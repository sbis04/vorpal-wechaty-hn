"use strict";
exports.__esModule = true;
var wechaty_1 = require("wechaty");
var wechaty_vorpal_1 = require("wechaty-vorpal");
var vorpal_hacker_news_1 = require("vorpal-hacker-news");
var wechaty = new wechaty_1.Wechaty();
wechaty.use(wechaty_vorpal_1.WechatyVorpal({
    use: vorpal_hacker_news_1["default"]
}));
wechaty.start();
