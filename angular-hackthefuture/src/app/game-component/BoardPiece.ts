import { IBoardPiece } from './IBoardPiece';
import { Types } from './Types';


export class BoardPiece implements IBoardPiece{
    x: number;
    y: number;
    color: string;
    type: Types;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.spawn();
      }
    
      spawn() {
        this.color = "blue";
        this.type = Types.Empty;
        // Position where the shape spawns.
        this.x = 3;
        this.y = 0;
      }

      draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.x, this.y,30,30);
        this.ctx.fill();
      
        
      }
}