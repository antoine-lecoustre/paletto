'use strict';

var Engine = function () {

// private attributes and methods
    var board = new Array(6);

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

    //Premiere histoire
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

    //Deuxieme histoire
    this.choixCouleur = function(ligne, colonne){
        return board[ligne][colonne];
    }
};
