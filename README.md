## js-mysql-lection  
# Способы работы с MySQL из node.js  

0. Подключение библиотеки.
0. Создание соединения с БД.
0. Проверка соединения.
0. Выполнение запроса на выборку.
0. Отключение от БД.
---  
* mysql = require("mysql2");  
* connection = mysql.createConnection();  
* connection.connect();  
* connection.query();  
* connection.end();  
---  
**SELECT**  
    start_02 - start_10  
**INSERT**  
    start_11  
**UPDATE**  
    start_12  
**DELETE**  
    start_13  
**JSON**  
    start_14 - start_16  
**CSV**  
    start_17  
