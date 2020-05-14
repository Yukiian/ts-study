"use strict";
var ab = 2;
var ao = 76;
var ax = 0x514;
var d = false;
function move(distance, direction) {
}
var action = {
    action: 'create',
    id: 111,
    info: {
        username: 'xiaomuzhu'
    }
};
var UserReducer = function (userAction) {
    switch (userAction.action) {
        case 'delete':
            console.log(userAction.id);
            break;
        default:
            break;
    }
};
//# sourceMappingURL=可辨识联合类型.js.map