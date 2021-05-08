import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpitiappService {

  constructor( private http:HttpClient) { 
    console.log('Bonjour');

    }

    getquery( query:string){

      const url = `https://api.spotify.com/v1/${query}`;

  
      const headers = new HttpHeaders({
        'Authorization' : 'Aquí va la autorización generada en spotify'
        });

       return this.http.get(url, {headers});

    }


    getnewrelease(){

      return this.getquery('browse/new-releases?limit=20')

       .pipe( map(respuesta => respuesta['albums'].items));
      
    }
    
    getartistas(termino:string){
     
        return this.getquery(`search?q=${termino}&type=artist&limit=15`)
  
             .pipe(map(data => data['artists'].items));
        

    }
    getartista(id:string){
     
      return this.getquery(`artists/${ id }`);

         //  .pipe(map(data => data['artists'].items));
      }
      gettopTracks(id:string){
     
        return this.getquery(`artists/${id}/top-tracks?country=ES`)
  
            .pipe(map(data => data['tracks']));
        }
}
