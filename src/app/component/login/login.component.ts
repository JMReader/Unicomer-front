import { Component, OnInit } from '@angular/core';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Keyboard from "simple-keyboard";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value = "";
  keyboard!: Keyboard;
  faKeyboard = faKeyboard;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: (button:any) => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

 
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

}
