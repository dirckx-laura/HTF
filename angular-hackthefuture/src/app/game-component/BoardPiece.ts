import { IBoardPiece } from './IBoardPiece';
import { Types } from './Types';


export class BoardPiece implements IBoardPiece{
    x: number;
    y: number;
    color: string;
    type: Types;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.spawn(this.x, this.y);
      }
    
    
      spawn(x: number, y:number) {
        this.color = "blue";
        this.type = Types.Empty;
        // Position where the shape spawns.
        this.x = x;
        this.y = y;
      }

      draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.x, this.y,30,30);
        this.ctx.fill();
      
        
      }
}