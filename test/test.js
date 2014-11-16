'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
e.init();

//Premiere histoire
PalettoTestCase.prototype.test1 = function () {
    assertTrue(e.juxtaposition());

};

//Deuxieme histoire
PalettoTestCase.prototype.test2 = function () {

    assertTrue(e.getPiece("A6") == 5);
};

//Troisieme histoire
PalettoTestCase.prototype.test3 = function () {

    e.removePiece("A6", 1);

    assertTrue(e.countPieceBoard() == 35);
    assertTrue(e.countPiecesPlayer(1) == 1);
}

//Quatrième histoire
PalettoTestCase.prototype.test4 = function () {

    assertTrue(e.playerRemovePiece("A1",2) == true);
    assertTrue(e.playerRemovePiece("F6",2) == true);

    assertTrue(e.countPieceBoard() == 33);
    assertTrue(e.countPiecesPlayer(2) == 2);

}

//Sixième histoire
PalettoTestCase.prototype.test6 = function () {
    e.init();

    e.removePiece("A1",1);
    e.removePiece("F6",1);

    e.removePiece("B1",2);
    e.removePiece("E6",2);
    e.removePiece("F5",2);

    e.removePiece("A2",1);
    e.removePiece("A6",1);

    e.removePiece("A3",2);

    e.removePiece("A5",1);
    e.removePiece("F4",1);
    e.removePiece("F1",1);
    e.removePiece("C1",1);

    e.removePiece("E1",2);
    e.removePiece("F3",2);
    e.removePiece("D6",2);
    e.removePiece("A4",2);

    e.removePiece("D3",1);
    e.removePiece("F2",1);
    e.removePiece("B6",1);

    e.removePiece("B3",2);
    e.removePiece("E2",2);
    e.removePiece("E5",2);

    e.removePiece("B4",1);
    e.removePiece("C6",1);
    e.removePiece("D5",1);
    e.removePiece("E3",1);

    assertTrue(e.winGame(1));


}

PalettoTestCase.prototype.test7 = function () {
    e.removePiece("A1",1);
    e.removePiece("F6",1);

    e.removePiece("A2",2);
    e.removePiece("A6",2);

    e.removePiece("A5",1);
    e.removePiece("F6",1);

    e.removePiece("E6",2);
    e.removePiece("B1",2);
    e.removePiece("F5",2);

    e.removePiece("A3",1);
    e.removePiece("F2",1);

    e.removePiece("C1",2);
    e.removePiece("F4",2);

    e.removePiece("E1",1);
    e.removePiece("D6",1);
    e.removePiece("A4",1);
    e.removePiece("F3",1);

    e.removePiece("D1",2);
    e.removePiece("B6",2);

    e.removePiece("E2",1);
    e.removePiece("E5",1);

    e.removePiece("C6",2);
    e.removePiece("D5",2);
    e.removePiece("E3",2);

    e.removePiece("B5",1);

    e.removePiece("D2",2);

    e.removePiece("B2",1);
    e.removePiece("D3",1);

    e.removePiece("E4",2);

    e.removePiece("C5",1);
    e.removePiece("B3",1);

    e.removePiece("D4",2);
    e.removePiece("C2",2);

    e.removePiece("C3",1);

    e.removePiece("B4",2);


    e.removePiece("C4",1);

    assertTrue(e.getWinner() === 1);
}

