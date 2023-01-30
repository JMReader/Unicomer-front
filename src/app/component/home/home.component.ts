import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { Tarjeta } from 'src/app/models/tarjeta';
import { Transaccion } from 'src/app/models/transaccion';
import { LoginService } from 'src/app/services/login.service';
import { TarjetasService } from 'src/app/services/tarjetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarjetas!: Tarjeta[];
  TransEnviadas !: Transaccion[];
  TransRecibidas !: Transaccion[];
  userName= sessionStorage.getItem('nombre');
  DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
  constructor(private tarjetasS: TarjetasService, private loginservice:LoginService,private router: Router) {
    
    if(sessionStorage.getItem("nombre")==null){
      console.log('No estás logueado');
        this.router.navigate(['/']);
    }
    
    this.traertarjetas();
    this.traertranss();

   }
   






   async traertarjetas(){
    this.tarjetasS.getTarjetas().subscribe(
      (result)=>{
        this.tarjetas= result.tarjetas;
        console.log(result)
      }
    );
   }
   async traertranss(){
    this.tarjetasS.getTransacciones().subscribe(
      (result)=>{
        this.TransEnviadas= result.enviadas;
        this.TransRecibidas= result.recibidas;

        console.log(this.TransEnviadas)
      }
    );
   }


   


  ngOnInit(): void {
  
    
  }

}
