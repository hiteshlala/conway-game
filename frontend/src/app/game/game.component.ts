import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ConwayResponse {
  error?: string;
  gameId?: string;
  world?: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: string;
  rows = 20;
  columns = 20;
  timeInterval = 300;
  blank = false;
  start = false;
  resetworld = false;
  iterations = 0;
  world: number[][];
  saved = false;
  url = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  pause = () => {
    this.start = false;
  }

  resume = () => {
    this.start = true;
  }

  reset = () => {
    this.resetworld = true;
    this.start = false;
    setTimeout( () => this.resetworld = false, 50 );
  }

  currentIteration = ( e: number ) => {
    this.iterations = e;
  }  

  startingWorld = ( e: number[][] ) => {
    this.world = e;
  }

  save = () => {
    const data = { world: JSON.stringify( this.world ) };
    this.http.post( '/api/game', data )
    .toPromise()
    .then( ( r: ConwayResponse ) => {
      if ( r.error ) {
        console.log( 'Error:', r.error );
        this.error = r.error;
      }
      else {
        this.saved = true;
        this.url = `Game Saved To: ${window.location.href}/${r.gameId}`;
      }
    })
    .catch( error => {
      console.log( 'Error:', error );
      this.error = error;
    });
  }

  getGame = ( id: string ) => {
    console.log( 'getGame' );
    this.http.get( `/api/game/${id}` )
    .toPromise()
    .then( ( r: ConwayResponse ) => {
      if ( r.error ) {
        console.log( 'Error:', r.error );
      }
      else {

      }
    })
    .catch( console.log );
  }

  clearError = () => {
    this.error = '';
  }

}
