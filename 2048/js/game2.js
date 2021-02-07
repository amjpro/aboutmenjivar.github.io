let size = 0;
//export 
//default 
class Game {
    constructor(input) {
        
        //start of game
        this.board = new Array (input*input);
        this.score = 0;
        this.won = false;
        this.over = false;
        size = input;
        this.out_side = input;
        //creating an empty board to fill with two numbers
        this.board.fill(0);
        this.board = this.insertTile(this.board);
        this.board = this.insertTile(this.board);
        this.winner = [];
        this.mover = [];
        this.loser = [];
    };
    getGameState(){
        let gameState = {
            board: this.board,
            score: this.score,
            won: this.won,
            over: this.over
        };
        return gameState
    };
    rslide(a){
        let b = [...a];
        let moved = false;
        //2222
        //2202
        for (let i = 0; i<a.length; i+=size){
            for(let j = i; j<i+size-1; j++){
                if (a[j] != a[j+1] && a[j+1]==0){
                    for (let k = j; k >= i;k--){
                        a[k+1] = a[k];
                        a[k] = 0;
                    }
                }
            }
        }
        //2222
        //0222
        for (let i = 0; i<a.length; i+=size){
            for(let j = i+size-1; j>i; j--){
                if (a[j-1] == a[j]){
                    a[j] *=2
                    a[j-1] = 0;
                    this.score += a[j];
                    if (a[j] == 2048){
                        this.won = true;
                    }
                    moved = true;
                }
            }
        }
        //0404
        //0204
        for (let i = 0; i<a.length; i+=size){
            for(let j = i; j<i+size-1; j++){
                if (a[j] != a[j+1] && a[j+1]==0){
                    for (let k = j; k >= i;k--){
                        a[k+1] = a[k];
                        a[k] = 0;
                    }
                }
            }
        }
        let changed = false;
        for(let i = 0; i<a.length; i++){
            if (a[i] != b[i]){
                changed = true;
                break;
            }
        }
        // if (changed){
        //     // this.mover.forEach(function(element) {
        //     //     element(this.getGameState());
        //     // });
        //     if (this.mover.length>0){
        //         for (let i = 0; i < this.mover.length; i++) {
        //             this.mover[i](this.getGameState());
        //         }
        //     }
        // }
        //0044
        //0024
    
    
        // for (let i = 0; i<a.length; i+=size){
        //     for(let j = i; j<i+size-1; j++){
        //          if (a[j] != a[j+1] && a[j+1]==0){
        //              for (let k = j; k >= i;k--){
        //                  a[k+1] = a[k];
        //                  a[k] = 0;
        //              }
        //             moved = true;
        //        }
        //         if (a[j] == a[j+1] && a[j]==0){
        //             continue;
        //         } 
        //         if (a[j] == a[j+1]){
        //             a[j+1] *= 2;
        //             a[j] = 0;
        //             moved = true;
        //             break;
        //         }
        //     }
        //     for(let j = i; j<i+size-1; j++){
        //         if (a[j] != a[j+1] && a[j+1]==0){
        //             for (let k = j; k >= i;k--){
        //                 a[k+1] = a[k];
        //                 a[k] = 0;
        //             }
        //         }
        //     }
        //}
        return moved;
    };
    rrotation(a){
        let rArray = [];
        for(let i = 0; i<size; ++i){
            for(let j = 0; j<size;++j){
                rArray[i*size+j] = a[(size-j-1)*size+i];
            }
        }
        a = rArray;
        return a;
    };
    insertTile(a){
        let avail = [];
        for (let i = 0; i < a.length; i++){
            if (a[i] == 0){
                avail[avail.length] = i;
            }
        }
        let randomindex = Math.floor(Math.random()*avail.length);
        let randominsert = avail[randomindex];
    
        if (Math.floor(Math.random()*10)<9){
            a[randominsert] = 2;
        } else {
            a[randominsert] = 4;
        }
        //toString()
        //console.log(gameState.board)
        return a;
    };
    toString(){
        for(let i  = 0; i<this.board.length;i+=size){
            let temp = [];
            for (let j = i; j<i+size; j++){
                temp[temp.length] = this.board[j];
            }
            console.log(temp);
            //console.log(this.score)
        }
        console.log("-----------------");
    };
    end(){
        let temp = new Array(4);
        temp.fill(false);
        let val = 0;
        let a =  [...this.board];
        while (val<4){
            a = this.rrotation(a);
            for (let i = 0; i<a.length; i+=size){
                for(let j = i+size-1; j>i; j--){
                    if (a[j] == 0){
                        return false;
                    }
                    if (a[j-1] == a[j]){
                        return false;
                    }
                    if (a[j-1] != a[j] && j == i+1){
                        temp[val] = true;
                    }
                }
            }
            val++;
        }   
        if (temp.includes(false)){
            return false;
        } 
        return true;
    };
    setupNewGame(){
        this.board = new Array (size*size);
        this.score = 0;
        this.won = false;
        this.over = false;
        this.board.fill(0);
        this.board = this.insertTile(this.board);
        this.board = this.insertTile(this.board);
    };
    loadGame(gameState){
        this.board = gameState.board;
        this.score = gameState.score;
        this.won = gameState.won;
        this.over = this.end();
    };
    move(direction){
        let move = false;
        switch(direction){
            case 'right':
                move = this.rslide(this.board);
                break;
            case 'left':
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                move = this.rslide(this.board);
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                break;
            case 'down':
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                move = this.rslide(this.board);
                this.board = this.rrotation(this.board);
                break;
            case 'up':
                this.board = this.rrotation(this.board);
                move = this.rslide(this.board);
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                this.board = this.rrotation(this.board);
                break;
        }
        this.board = this.insertTile(this.board);
        this.over = this.end();
        if (this.mover.length>0){
            // for (let i = 0; i < this.mover.length; i++) {
            //     this.mover[i](this.getGameState());
            // }
            this.mover.forEach(element => {
                element(this.getGameState());
            });
        }
        if(this.over){
            this.loser.forEach(element => {
                element(this.getGameState());
            });
            // if (this.loser.length>0){
            //     for (let i = 0; i < this.loser.length; i++) {
            //         this.loser[i](this.getGameState());
            //     }
            // }
        }
        if (this.won){
            this.winner.forEach((element) => {
                element(this.getGameState());
            });
            // if (this.winner.length>0){
            //     for (let i = 0; i < this.winner.length; i++) {
            //         this.winner[i](this.getGameState());
            //     }
            // }
        } 
        //this.toString();
    };
    onMove(callback){
        this.mover[this.mover.length] = callback;
    };
    onWin(callback){
        this.winner[this.winner.length] = callback;
    };
    onLose(callback){
        this.loser[this.loser.length] = callback;
    };
};
//import {random} from 'mathjs'

// export const gameState = {
//     board: [],
//     score: 0,
//     won: false,
//     over: false,
// }
// function lslide(){
//     for (let i = 0; i<gameState.board.length; i+=size){
//         let temp = [];
//         for(let j = i; j<i+size; j++){
//             if (gameState.board[j]!=0){
//                 temp[temp.length] = gameState.board[j];
//                 gameState.board[j] = 0;
//             }
//         }
//         for (let j = 0; j<temp.length-1;j++){
//             if (temp[j] !=temp[j+1]){
//                 continue;
//             } else if (temp[j+1] == 0){
//                 break;
//             } else if(temp[j] == temp[j+1] && temp[j] != 0){
//                 temp[j]*=2;
//                 temp[j+1] = 0;
//                 for (let k = 0; k < temp.length-1;k++){
//                     temp[j+1] = temp[j];
//                     temp[j] = 0;
                    
//                 }
//             }
//         }
//         for (let j = 0; j<temp.length;j++){
//             gameState.board[i+j] = temp[j];
//         }
//         //2244
//         //4044
//         //4404
//         //4440

//     }
// }

// for (let i = 0; i<gameState.board.length; i+=size){
                //     for(let j = i; j<i+size-1; j++){
                //         if (gameState.board[j] == gameState.board[j+1] && gameState.board[j+1]==0){
                //             continue;
                //         } else if (gameState.board[j] == gameState.board[j+1]){
                //             gameState.board[j] *= 2;
                //             gameState.board[j+1] = 0;
                //             s_changed = true;
                //         } else if (gameState.board[j] != gameState.board[j+1] && gameState.board[j]==0){
                //             for (let k = j; k >= i;k--){
                //                 gameState.board[k] = gameState.board[k+1];
                //                 gameState.board[k+1] = 0;
                //                // gameState.board[k+1] = gameState.board[k];
                //                 //gameState.board[k] = 0;
                //             }
                //         }
                //     }
                // }
                 // for (let i = 0; i<gameState.board.length; i+=size){
        //     for(let j = i; j<i+size-1; j++){
        //         if (gameState.board[j] != gameState.board[j+1] && gameState.board[j+1]==0){
        //             for (let k = j; k >= i;k--){
        //                 gameState.board[k+1] = gameState.board[k];
        //                 gameState.board[k] = 0;
        //             }
        //         }
        //     }
        // }