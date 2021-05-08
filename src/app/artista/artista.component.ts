import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpitiappService } from '../spitiapp.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

artista:any ={};
mostrar:boolean=true;
toptrack:any[] =[];


  constructor(private activatedRouter:ActivatedRoute,
              private service:SpitiappService          
    ) { 


    this.activatedRouter.params.subscribe( respuesta => {
      this.getartist( respuesta['id'] );  
      this.gettoptrack(respuesta['id']);
      
    })
  }

  getartist(id:string){

    this.service.getartista(id)
    .subscribe( artist => {
      console.log(artist);
      this.artista =artist;
      this.mostrar=false;
    }) ;     
  }
  
  gettoptrack(id:string){

    this.service.gettopTracks(id).subscribe( toptrack => {
      console.log(toptrack);
      this.toptrack = toptrack;
    });
  }

}
