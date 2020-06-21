import PieceBase from './piece-base.js';
export class King extends PieceBase{
    constructor(isWhite, x, y){
        super(isWhite, x, y);
        this.name = 'king';
    }
}