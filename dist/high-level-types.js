"use strict";
function mixin(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var mixinX = mixin({ a: 'hello' }, { b: 42 });
var mixinA = mixinX.a;
var mixinB = mixinX.b;
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
}
var someb = true;
var somea = '123';
var somec = 124;
//# sourceMappingURL=high-level-types.js.map