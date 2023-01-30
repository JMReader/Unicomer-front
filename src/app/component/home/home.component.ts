import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta';
import { Transaccion } from 'src/app/models/transaccion';
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
  constructor(private tarjetasS: TarjetasService) {
    
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
