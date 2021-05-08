import { Component } from '@angular/core';
import { SpitiappService } from '../spitiapp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any[] =  [];
  mostrar:boolean;

  constructor(private service:SpitiappService) {


   }
  
   buscar(termino:string){
    this.mostrar=true;
    this.service.getartistas(termino)
    .subscribe( (data:any) => {
      console.log(data);
      this.artistas = data;
      this.mostrar=false;

    })


   }
  
}
