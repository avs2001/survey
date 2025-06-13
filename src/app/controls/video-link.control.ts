import { Component, Input, inject, signal, ChangeDetectionStrategy, forwardRef, InjectionToken } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SurveyControl } from './survey-control';

export interface VideoValidator {
  validate(url: string): boolean;
  preview(url: string): Promise<string>;
}

export const VIDEO_VALIDATOR = new InjectionToken<VideoValidator>('VIDEO_VALIDATOR');

@Component({
  selector: 'survey-video-link',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VideoLinkControl),
    multi: true
  }],
  template: `
    <label [attr.for]="id">{{ label }}</label>
    <input type="url" [id]="id" [attr.placeholder]="placeholder" [value]="value()" (input)="change($any($event.target).value)" (blur)="touched()" />
    @if (preview() && showPreview) {<img [src]="preview()" alt="preview" />}
  `,
  styles: [':host{display:block;} img{max-width:100%;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoLinkControl implements SurveyControl<string> {
  @Input() id = '';
  @Input() label = '';
  @Input() required = false;
  @Input() placeholder?: string;
  @Input() showPreview = false;

  private validator = inject(VIDEO_VALIDATOR, { optional: true });
  value = signal('');
  preview = signal('');
  private onChange = (v: string) => {};
  private onTouched = () => {};

  change(v: string): void {
    this.value.set(v);
    this.onChange(v);
    this.loadPreview(v);
  }

  private async loadPreview(v: string): Promise<void> {
    if (!this.showPreview || !this.validator) return;
    if (this.validator.validate(v)) {
      this.preview.set(await this.validator.preview(v));
    } else {
      this.preview.set('');
    }
  }

  writeValue(obj: string | null): void {
    this.value.set(obj ?? '');
    this.loadPreview(this.value());
  }

  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  touched(): void { this.onTouched(); }

  validate(): ValidationErrors | null {
    const v = this.value().trim();
    if (!v) return this.required ? { required: true } : null;
    if (this.validator && !this.validator.validate(v)) return { invalidUrl: true };
    return null;
  }
}
