import { Component, OnInit } from '@angular/core';
import { Opciones } from 'src/app/models/opciones';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opcioness!: Opciones[];

  constructor(
 private service:LoginService


  ) { }

  ngOnInit(): void {
    this.service.obtenerMenu().subscribe(
      (result)=>{
        console.log(result.msg[0].opciones);
   
        this.opcioness=result.msg[0].opciones;
      }
    )
  }

}
