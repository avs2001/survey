import { Component, Input, inject, signal, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';
import { UPLOAD_SERVICE, UploadService } from './upload-service.token';

@Component({
  selector: 'survey-file-upload',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileUploadControl),
    multi: true
  }],
  template: `
    <label [attr.for]="id">{{ label }}</label>
    <input
      type="file"
      [id]="id"
      [attr.accept]="accept"
      [attr.placeholder]="placeholder"
      (change)="fileSelected($event)"
    />
    @if (fileName()) {<span>{{ fileName() }}</span> <button type="button" (click)="remove()">Remove</button>}
  `,
  styles: [':host{display:block;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadControl implements SurveyControl<File | null> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() accept?: string;
  @Input() maxSize = 0;
  @Input() placeholder?: string;

  value = signal<File | null>(null);
  fileName = signal('');

  private svc = inject(UPLOAD_SERVICE, { optional: true });
  private onChange = (f: File | null) => {};
  private onTouched = () => {};

  writeValue(obj: File | null): void { this.value.set(obj); this.fileName.set(obj ? obj.name : ''); }

  registerOnChange(fn: (file: File | null) => void): void { this.onChange = fn; }

  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  fileSelected(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) return;
    if (this.maxSize && file.size > this.maxSize) return;
    if (this.accept && !file.type.match(this.accept)) return;
    this.value.set(file);
    this.fileName.set(file.name);
    this.onChange(file);
    this.svc?.upload(file).catch(() => {});
  }

  remove(): void {
    this.value.set(null);
    this.fileName.set('');
    this.onChange(null);
  }

  validate(): ValidationErrors | null {
    const f = this.value();
    if (!f) return this.required ? { required: true } : null;
    if (this.maxSize && f.size > this.maxSize) return { maxSize: true };
    if (this.accept && !f.type.match(this.accept)) return { accept: true };
    return null;
  }
}
