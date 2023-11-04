import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ConwayResponse {
  error?: string;
  gameId?: string;
  world?: string;
}

@Component({
  selector: 'app-game-saved',
  templateUrl: './game-saved.component.html',
  styleUrls: ['./game-saved.component.css']
})
export class GameSavedComponent implements OnInit {
  id: string;
  timeInterval = 300;
  start = false;
  resetworld = false;
  iterations = 0;
  error = '';
  world: number[][];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get( `/api/game/${this.id}` )
    .toPromise()
    .then( ( r: ConwayResponse ) => {
      if ( r.error ) {
        console.log( 'Error:', r.error );
        this.error = `${r.error} - Navigating to new game`;
        setTimeout( () => this.router.navigate(['/game']), 4000 );
      }
      else {
        const world = JSON.parse( r.world );
        this.world = world;
      }
    })
    .catch( error => {
      console.log( 'Error:', error );
      this.error = `${error} - Navigating to new game`;
      setTimeout( () => this.router.navigate(['/game']), 4000 );
    });
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

  clearError = () => {
    this.error = '';
  }
}

