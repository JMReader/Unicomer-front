import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Keyboard from "simple-keyboard";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  v: number= 0;
  dni ="";
  tipodni="";
  clave = 0;
  value = "";
  keyboard!: Keyboard;
  visibleKeyboard: boolean = false;
  visiblenumberpad:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: (button:any) => this.onKeyPress(button)
    });
  }
  //cambiara el valor de la variable dpeendendo del input que seleccionemos
  cambiar(a:number){
    
    if(this.v!=a){
      this.v=a;
      this.keyboard.setInput("");
    }
    if(a==1 && this.visibleKeyboard==true){
      this.visiblenumberpad=true;
    }else{
      this.visiblenumberpad=false;
    }
    
  }

  onChange = (input: string, ) => {
    //nos indica que input cambiaremos 
    switch(this.v) { 
      case 0: { 
        if(this.visibleKeyboard==false && this.visiblenumberpad==true){
          this.ChangeVisibility();
        }
        this.value = input; 
         break; 
      } 

       
      case 2:{
        if(this.visibleKeyboard==false && this.visiblenumberpad==true){
          this.ChangeVisibility();
        }

        this.tipodni= input;
        break; 
      }
      default: { 
        this.value = input; 
         break; 
      } 
   } 
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button); 
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };



  allhidden(){
    this.visiblenumberpad = false;
    this.visibleKeyboard=false;
  }
  ChangeVisibility(){
    if(this.visiblenumberpad==true){
      this.visiblenumberpad = false;
    }
  this.visibleKeyboard = !this.visibleKeyboard;

 console.log(this.visibleKeyboard);
  }


}
