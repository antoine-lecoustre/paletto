'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");


//Premiere histoire
PalettoTestCase.prototype.test1 = function () {
    var e = new Engine();
    e.init();

    assertTrue(e.juxtaposition());
};