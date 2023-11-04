import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  constructor() { }

  rowsInternal: number;
  columnsInternal: number;
  stateInitial: number[][];
  currentState: number[][];
  canedit = true;
  intervalInternal = 300;
  timer: any;
  startInternal = false;
  resetInternal = false;
  blankInternal = false;
  editable = true;
  counter = 0;

  @Output() generation = new EventEmitter();

  @Output() world = new EventEmitter();
  
  @Input() set rows( r: number ) {
    this.rowsInternal = r;
    this.redraw();
  }

  @Input() set columns( c: number ) {
    this.columnsInternal = c;
    this.redraw();
  }

  @Input() set state( a: number[][] ) {
    if ( Array.isArray(a) ) {
      this.stateInitial = a;
      this.currentState = a.map( outer => outer.map( inner => inner ) );
      this.rowsInternal = this.stateInitial.length;
      this.columnsInternal = this.stateInitial[0].length;
    }
  }

  @Input() set edit( flag: boolean ) {
    this.canedit = flag;
    this.editable = flag;
  }

  @Input() set interval( ms: number ) {
    this.intervalInternal = ms;
  }

  @Input() set blank( flag: boolean ) {
    this.blankInternal = flag;
    this.redraw();
  }

  @Input() set start( flag: boolean ) {
    if ( this.startInternal && !flag ) {
      this.startInternal = false;
      clearInterval( this.timer );
    }
    else if ( !this.startInternal && flag ) {
      this.editable = false;
      this.startInternal = true;
      this.timer = setInterval( this.evolve, this.intervalInternal );
    }
  }

  @Input() set reset( flag: boolean ) {
    if ( flag && !this.resetInternal ) {
      this.counter = 0;
      this.startInternal = false;
      clearInterval( this.timer );
      this.currentState = this.stateInitial.map( outer => outer.map( inner => inner ) );
      this.resetInternal = false;
      this.editable = this.canedit ? true : false;
      this.generation.emit( this.counter );
    }

  } 

  ngOnInit() {
    if ( this.stateInitial ) {
      this.rowsInternal = this.stateInitial.length;
      this.columnsInternal = this.stateInitial[0].length;
      this.currentState = this.stateInitial.map( outer => outer.map( inner => inner ) );
    }
    else {
      if ( !this.rowsInternal ) {
        this.rowsInternal = 10;
      }
      if ( !this.columnsInternal ) {
        this.columnsInternal = 10;
      }
      this.stateInitial = [];
      this.currentState = [];
      for ( let i = 0; i < this.rowsInternal; i++ ) {
        const row = [];
        for ( let j = 0; j < this.columnsInternal; j++ ) {
          const value = this.blankInternal ? 0 : ( (Math.random() >= 0.5) ? 1 : 0) ;
          row.push( value );
        }
        this.stateInitial.push( row );
        this.currentState.push( row.slice() );
      }
    }
    this.generation.emit( this.counter );
    this.world.emit( this.stateInitial );
  }

  redraw = () => {
    this.stateInitial = [];
    this.currentState = [];
    this.counter = 0;
    for ( let i = 0; i < this.rowsInternal; i++ ) {
      const row = [];
      for ( let j = 0; j < this.columnsInternal; j++ ) {
        const value = this.blankInternal ? 0 : ( (Math.random() >= 0.5) ? 1 : 0) ;
        row.push( value );
      }
      this.stateInitial.push( row );
      this.currentState.push( row.slice() );
    }
    this.editable = this.canedit ? true : false;
    this.world.emit( this.stateInitial );
  }

  toggleState = ( row, col ) => {
    if ( this.canedit && this.editable ) {
      this.currentState[ row ][ col ] = this.currentState[ row ][ col ] === 1 ? 0 : 1;
      this.stateInitial[ row ][ col ] = this.stateInitial[ row ][ col ] === 1 ? 0 : 1;
    }
  }

  genEmptyCells = ( m, n ) => {
    const empty = [];
    for ( let i = 0; i < m; i++ ) {
      empty.push(new Array(n));
    }
    return empty;
  }

  evolve = () => {
    const m = this.rowsInternal;
    const n = this.columnsInternal;
    const cells = this.currentState;
    this.counter++;
    
    const next = this.genEmptyCells( m, n );
    const getValue = ( matrix, i: number, j: number ) => {
        return matrix[i] && matrix[i][j] || 0;
    };

    for ( let i = 0; i < m; i++ ) {
      for ( let j = 0; j < n; j++ ) {
        // check eight neighbors
        const count = getValue( cells, i - 1, j - 1) +
          getValue(cells, i - 1, j) +
          getValue(cells, i - 1, j + 1 ) +
          getValue(cells, i, j - 1) +
          getValue(cells, i, j + 1) +
          getValue(cells, i + 1, j - 1 ) +
          getValue(cells, i + 1, j) +
          getValue(cells, i + 1, j + 1 );

        if ( count === 3 ) {
          next[i][j] = 1;
        } 
        else if ( count === 2 && cells[i][j] === 1 ) {
          next[i][j] = 1;
        } 
        else {
          next[i][j] = 0;
        }
      } // for(j)
    } // for(i)
    
    this.currentState = next;
    this.generation.emit( this.counter );
  }

}
