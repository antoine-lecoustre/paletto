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

    assertTrue(e.choixCouleur(5,0) == 5);
};

//Troisieme histoire
PalettoTestCase.prototype.test3 = function () {
    e.removePiece("A6",1);


    assertTrue(e.countPieceBoard() == 35);
    assertTrue(e.countPiecesPlayer(1) == 1);
};