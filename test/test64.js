'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
e.init();

PalettoTestCase.prototype.test8 = function () {
    assertTrue(e.juxtaposition());
}