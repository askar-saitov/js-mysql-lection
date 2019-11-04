# js-mysql-lection
 Способы работы с MySQL из node.js

 * Подключение библиотеки.
 * Создание соединения с БД.
 * Проверка соединения.
 * Выполнение запроса на выборку.
 * Отключение от БД.
---
   mysql = require("mysql2");  
   connection = mysql.createConnection();  
   connection.connect();  
   connection.query();  
   connection.end();  
- - -
SELECT  
   start_02 - start_10
INSERT  
   start_11
UPDATE  
   start_12
DELETE  
   start_13
JSON
   start_14 - start_16
CSV
   start_17
