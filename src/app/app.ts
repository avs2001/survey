import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MultipleChoice} from './shared/controls/multiple-choice/multiple-choice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MultipleChoice],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'survey';
}
