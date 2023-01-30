import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import Keyboard from "simple-keyboard";
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  v: number= 0;
  cont =0
  dni !:number;
  tipodni="";
  clave = "";
  value = "";
  keyboard!: Keyboard;
  visibleKeyboard: boolean = false;
  visiblenumberpad:boolean = false;
  badcredentials: boolean = false;
  LoginForm:FormGroup;

  constructor( public fb: FormBuilder,
     private Slogin: LoginService,
     private router: Router ) { 
    this.LoginForm=this.fb.group({
      dni:[0,[Validators.required, Validators.min(10000000)]],
      tipoDni:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
    });


  }





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
  
  numberpadElegir(numero:number){
    if(this.cont==0){
      this.dni=numero;
      this.cont++;
    }else{
      this.dni=(this.dni*10)+numero
    }
    console.log(this.dni);
  }
  numberpadBorrar(){
    this.dni=0;
  }

  Login(){
    this.Slogin.login( String(this.LoginForm.value.dni), this.LoginForm.value.password).subscribe(result =>{
      var user = result.user;
      if(result.status ==1){
        console.log("a");
      sessionStorage.setItem("_id", user._id);
      sessionStorage.setItem("dni", user.dni);
      this.router.navigateByUrl('home');
    }else{
      this.badcredentials=true;
    }
      
    });

  }

}
