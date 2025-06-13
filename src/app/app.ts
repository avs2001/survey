import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QuestionEditorComponent} from './admin/question-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuestionEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'survey';
}
