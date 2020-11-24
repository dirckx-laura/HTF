import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  difficultyNumber: number;
  gameId: number;

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.difficultyNumber = 0;
    this.service.startLevel(this.difficultyNumber).subscribe(result =>{
        this.gameId = result;
        console.log(this.gameId);

    }, (error) => {
      console.log(error);
    }
    
    )
    
  }

}
