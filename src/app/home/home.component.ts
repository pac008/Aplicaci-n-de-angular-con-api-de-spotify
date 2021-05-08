import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpitiappService } from '../spitiapp.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  canciones:any[] = [];
  mostrar:boolean =true;
  error:boolean=false;
  mensajeError:string;
  
  constructor(private http:HttpClient,
              private service:SpitiappService ) {

       
          this.service.getnewrelease()
          .subscribe( (respuesta:any) => {
           
            this.canciones = respuesta;
            this.mostrar=false;
          },(errorService) => {
          this.error=true;
          this.mostrar=false;
          this.mensajeError = errorService.error.error.message;

          }   
          );

   }

   

  
}
