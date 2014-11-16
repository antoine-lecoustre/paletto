'use strict';

var Engine = function () {

// private attributes and methods
    var board = new Array(8);
    var player1 = new Array();
    var player2 = new Array();
    var playerWin;

// public methods

    this.init = function () {
        var ligne;

        for (ligne = 0; ligne < board.length; ligne++) {
            board[ligne] = new Array(8);
        }

        /* 0 = blanc
         * 1 = Noir
         * 2 = Rouge
         * 3 = Bleu
         * 4 = Vert
         * 5 = Jaune
         */


        for(var ligne=0;ligne<board.length;ligne++){
            for(var colonne=0;colonne<board.length;colonne++){
                board[ligne][colonne] = Math.floor(Math.random() * 9);
            }
        }

    };

    this.display = function(){
        for(var i=0;i<board.length;i++){
            var ret = "";
            for(var j=0;j<board.length;j++){
                ret += board[i][j] + "\t";
            }
            console.log(ret);
        }
    }

    this.juxtaposition = function(){
        var ligne, colonne;



        for (ligne = 0; ligne < board.length; ligne++) {
            for (colonne = 0; colonne < board.length; colonne++) {

                if(colonne+1 < 8){
                    if(board[ligne][colonne] == board[ligne][colonne+1]){
                        return false;
                    }

                }

                if(colonne-1 > 0 ){
                    if(board[ligne][colonne] == board[ligne][colonne-1]){
                        return false;
                    }
                }

                if(ligne+1 < 8){
                    if(board[ligne][colonne] == board[ligne+1][colonne]){
                        return false;
                    }

                }

                if(ligne-1 > 0 ){
                    if(board[ligne][colonne] == board[ligne-1][colonne]){
                        return false;
                    }
                }


            }
        }
        return true;
    };

    this.getPiece = function(x){
        return board[x.charAt(1) - 1][x.charCodeAt(0) - 65]
    }

    this.removePiece = function (x, numberPlayer) {
        if(numberPlayer === 1){
            player1.push(board[x.charAt(1) - 1][x.charCodeAt(0) - 65]);
        }else{
            player2.push(board[x.charAt(1) - 1][x.charCodeAt(0) - 65]);
        }



        board[x.charAt(1) - 1][x.charCodeAt(0) - 65] = undefined;

        if(e.countPieceBoard() === 0){
            playerWin = numberPlayer;
        }
    };

    this.countPieceBoard = function(){
        var n = 0;

        for(var ligne=0;ligne<board.length;ligne++){
            for(var colonne=0;colonne<board.length;colonne++){
                if(board[ligne][colonne] != undefined){
                    n++;
                }
            }
        }

        return n;
    };

    this.countPiecesPlayer = function(numberPlayer){
        if(numberPlayer === 1){
            return player1.filter(function(value) { return value !== undefined }).length;
        }else{
            return player2.filter(function(value) { return value !== undefined }).length;
        }
    };

    this.colorPlayer = function(numberPlayer) {
        var list = Array();

        if (numberPlayer == 1) {
            list.push(2);
            list.push(4);
            list.push(5);
        } else {
            list.push(1);
            list.push(0);
            list.push(3);
        }

        return list;
    };

    this.neighborColorPiece = function(ligne, colonne, cp){
        var currentPiece = board[ligne][colonne];

        if(currentPiece != cp[0] && currentPiece != cp[1] && currentPiece != cp[2]){
            return true;
        }else{
            return false;
        }
    }

    this.neighbor = function(ligne, colonne, cp){
        var n = 0;


        if(colonne+1 < 6){
            if(board[ligne][colonne+1] != undefined){
                if(this.neighborColorPiece(ligne,colonne+1,cp)){
                    //console.log("gauche :" + board[ligne][colonne+1]);
                    n++;
                }
            }

        }

        if(colonne-1 > 0 ){
            if(board[ligne][colonne-1] != undefined){
                if(this.neighborColorPiece(ligne,colonne-1,cp)){
                    //console.log("droite :" + board[ligne][colonne-1]);
                    n++;
                }
            }

        }

        if(ligne+1 < 6){
            if(board[ligne+1][colonne] != undefined){
                if(this.neighborColorPiece(ligne+1,colonne,cp)){
                    //console.log("bas :" + board[ligne+1][colonne]);
                    n++;
                }
            }


        }

        if(ligne-1 > 0 ){
            if(board[ligne-1][colonne] != undefined){
                if(this.neighborColorPiece(ligne-1,colonne,cp)){
                    //console.log("haut :" + board[ligne-1][colonne]);
                    n++;
                }
            }

        }

        return (n===2) ? true : false;
    }

    this.playerRemovePiece = function(x, player){
        var cp = e.colorPlayer(player);

        if(e.neighbor(0,0,cp)){


            if(player === 1){
                player1.push(board[x.charAt(1) - 1][x.charCodeAt(0) - 65]);
            }else{
                player2.push(board[x.charAt(1) - 1][x.charCodeAt(0) - 65]);
            }

            board[x.charAt(1) - 1][x.charCodeAt(0) - 65] = undefined;
            return true;
        }else{
            return false;
        }
    }

    this.winGame = function(player){
        var n = 0;

        if(player === 1){
            for(var i=0;i<player1.length;i++){
                if(player1[i] === 1){
                    n++
                }
            }
        }else if(player === 2){
            for(var i=0;i<player2.length;i++){
                if(player2[i] === 1){
                    n++
                }
            }
        }

        return (n===6) ? true : false;
    }

    this.getWinner = function(){
        return playerWin;
    }

    this.removeRandomPiece = function(numberPlayer){
        var random = Math.floor(Math.random() * 6);

        for(var ligne=0;ligne<board.length;ligne++){
            for(var colonne=0;colonne<board.length;colonne++){
                if(random === board[ligne][colonne]){
                    if(numberPlayer === 1){
                        player1.push(board[ligne][colonne]);
                    }else{
                        player2.push(board[ligne][colonne]);
                    }

                    board[ligne][colonne] = undefined;

                    if(e.countPieceBoard() === 0){
                        playerWin = numberPlayer;
                    }
                }
            }
        }
    }


};
