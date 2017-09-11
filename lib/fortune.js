var fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки",
    "еще что то",
    "дрегое еще что то",
    "бла бла бла"
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() *  fortunes.length);
    return fortunes[idx];
};