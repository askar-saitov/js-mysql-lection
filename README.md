# js-mysql-lection
 Способы работы с MySQL из node.js

 * Подключение библиотеки.
 * Создание соединения с БД.
 * Проверка соединения.
 * Выполнение запроса на выборку.
 * Отключение от БД.
-
mysql = require("mysql2");  
connection = mysql.createConnection();  
connection.connect();  
connection.query();  
connection.end();  
-
SELECT  
INSERT  
UPDATE  
DELETE  
