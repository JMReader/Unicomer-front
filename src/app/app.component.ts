import { Component } from '@angular/core';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unicomer';
  faKeyboard = faKeyboard;
}
