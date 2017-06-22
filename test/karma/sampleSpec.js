var assert = require("assert");
var ID = require("incremental-dom");
var superviews = require("../../index.js");

global.require = function(moduleName) {
  return moduleName == "incremental-dom" ? ID : void 0;
};
global.module = new module.constructor();

describe("DOM test", () => {
  it("document exist", () => {
    var bed = document.getElementById("testbed");
    assert(bed !== null);

    var result =
    superviews(`<template name="test" args="data">
<div id="ABC"></div>
</template>`, "test", void 0, "cjs");

    (new Function(result))();

    var f = global.module.exports;
    var data = {};

    ID.patch(bed, f, data);

    var abc = document.getElementById("ABC");
    assert(abc !== null);
  });
});
