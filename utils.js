const conn = {
	host: "mysql95.1gb.ru",
	user: "gb_psis",
	database: "gb_psis",
	password: "ca8484adc89a"
};

const menu = [
	'0. Выйти из программы',
	'1. Вывести данные',
	'2. Сортировать по time',
	'3. Сортировать по power'
];

let stop = function (connection) {
	connection.end(() => console.log('___stop___'));
}

module.exports.conn = conn;
module.exports.menu = menu;
module.exports.stop = stop;