"use strict";
var getUserName = function (users) { return users.name; };
var users = {
    name: 'tianyuqi',
    age: 22,
    isMale: true,
    say: function (words) {
        return 'hello' + words;
    },
    phone: {
        email: '564417296@qq.com'
    }
};
getUserName(users);
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ widdth: 5 });
var options = { widdth: 5 };
//# sourceMappingURL=interface.js.map