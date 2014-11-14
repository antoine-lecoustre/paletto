'use strict';

var Engine = function () {

// private attributes and methods
    var board = new Array(6);
    var player1 = new Array();
    var player2 = new Array();

// public methods

    this.init = function () {
        var ligne;

        for (ligne = 0; ligne < board.length; ligne++) {
            board[ligne] = new Array(6);
        }

        /* 0 = blanc
         * 1 = Noir
         * 2 = Rouge
         * 3 = Bleu
         * 4 = Vert
         * 5 = Jaune
         *
         */


        board[0][0] = 1;
        board[0][1] = 4;
        board[0][2] = 0;
        board[0][3] = 3;
        board[0][4] = 2;
        board[0][5] = 0;

        board[1][0] = 5;
        board[1][1] = 0;
        board[1][2] = 4;
        board[1][3] = 2;
        board[1][4] = 5;
        board[1][5] = 3;

        board[2][0] = 3;
        board[2][1] = 5;
        board[2][2] = 3;
        board[2][3] = 0;
        board[2][4] = 1;
        board[2][5] = 2;

        board[3][0] = 2;
        board[3][1] = 1;
        board[3][2] = 2;
        board[3][3] = 4;
        board[3][4] = 3;
        board[3][5] = 0;

        board[4][0] = 0;
        board[4][1] = 4;
        board[4][2] = 5;
        board[4][3] = 1;
        board[4][4] = 5;
        board[4][5] = 4;

        board[5][0] = 5;
        board[5][1] = 3;
        board[5][2] = 1;
        board[5][3] = 2;
        board[5][4] = 4;
        board[5][5] = 1;

        for(var i=0;i<board.length;i++){
            var ret = "";
            for(var j=0;j<board.length;j++){
                ret += board[i][j] + "\t";
            }
            console.log(ret);
        }

    };

    this.juxtaposition = function(){
        var ligne, colonne;



        for (ligne = 0; ligne < board.length; ligne++) {
            for (colonne = 0; colonne < board.length; colonne++) {

                if(colonne+1 < 6){
                    if(board[ligne][colonne] == board[ligne][colonne+1]){
                        return false;
                    }

                }

                if(colonne-1 > 0 ){
                    if(board[ligne][colonne] == board[ligne][colonne-1]){
                        return false;
                    }
                }

                if(ligne+1 < 6){
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

    this.choixCouleur = function(ligne, colonne){
        return board[ligne][colonne];
    };

    this.getPiece = function(x){
        return board[x.charCodeAt(0) - 65][x.charAt(1) - 1];
    };

    this.removePiece = function (x, numberPlayer) {
        if(numberPlayer == 1){
            player1.push(board[x.charCodeAt(0) - 65][x.charAt(1) - 1]);
        }else{
            player2.push(board[x.charCodeAt(0) - 65][x.charAt(1) - 1]);
        }

        board[x.charCodeAt(0) - 65][x.charAt(1) - 1] = undefined;
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
        if(numberPlayer == 1){
            return player1.filter(function(value) { return value !== undefined }).length;
        }else{
            return player2.filter(function(value) { return value !== undefined }).length;
        }
    };

    /*this.listOfPossibilites = function(pieceColor){
        for(var i=0;i<board.length;i++){
            for(var i=0;i<board.length;i++){

                if(pieceColor == )
            }
        }
    }*/

    this.jouable = function(ligne,colonne){
        var n = 0;
        //var list = new array(4);

        if(ligne+1 < 6)
            if(board[ligne+1][colonne] != undefined)
                n++;

        if(ligne-1 >= 0)
            if(board[ligne-1][colonne] != undefined)
                n++;

        if(colonne+1 < 6)
            if(board[ligne][colonne+1] != undefined)
                n++;

        if(colonne-1 >= 0)
            if(board[ligne][colonne-1] != undefined)
                n++;

        return (n<=2) ? true : false;

    };

    this.choiceColorPlayer = function(numberPlayer) {
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

    this.playPlayer = function(numberPlayer){
        var possibilitiesPlayer = this.choiceColorPlayer(numberPlayer);

        for(var ligne=0;ligne<board.length;ligne++){
            for(var colonne=0;colonne<board.length;colonne++){
                if(this.jouable(ligne,colonne)){
                    if(board[ligne][colonne] == possibilitiesPlayer[0] || board[ligne][colonne] == possibilitiesPlayer[1] || board[ligne][colonne] == possibilitiesPlayer[2]){
                        console.log("(" + ligne + "," + colonne + ") => " + board[ligne][colonne]);
                        if(numberPlayer == 1){
                            player1.push(board[ligne][colonne]);
                        }else{
                            player2.push(board[ligne][colonne]);
                        }

                        board[ligne][colonne] = undefined;
                    }
                }
            }
        }
    }






};
