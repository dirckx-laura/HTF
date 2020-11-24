import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { BoardPiece } from './BoardPiece';


export const COLS = 20;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})

export class GameComponentComponent implements OnInit {
  
  

  @ViewChild("board", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  difficultyNumber: number;
  gameId: number;
  piece: BoardPiece;

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    // this.difficultyNumber = 0;
    // this.service.startLevel(this.difficultyNumber).subscribe(result =>{
    //     this.gameId = result;
    //     console.log(this.gameId);

    // }, (error) => {
    //   console.log(error);
    // }
    
    // )

    this.initBoard();
    
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext("2d");

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;
  }

  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  play() {
 
    var board =this.getEmptyBoard();

   
    this.piece = new BoardPiece(this.ctx);
    this.piece.draw();
}



}
