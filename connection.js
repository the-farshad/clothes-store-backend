var mysqlHost = process.env.MYSQL_HOST || 'localhost';
var mysqlPort = process.env.MYSQL_PORT || '3306';
var mysqlUser = process.env.MYSQL_USER || 'mySQL-username';
var mysqlPass = process.env.MYSQL_PASS || 'SQL-password';
var mysqlDB = process.env.MYSQL_DB || 'shopping_store';

var connectionOptions = {
    host: mysqlHost,
    port: mysqlPort,
    user: mysqlUser,
    password: mysqlPass,
    database: mysqlDB
};

module.exports = connectionOptions;