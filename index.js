var mysql = require('mysql');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
var responseStr = "MySQL Data:";

app.get('/',function(req,res){
   
   var mysqlHost = process.env.MYSQL_HOST || 'mySQL-host';
   var mysqlPort = process.env.MYSQL_PORT || '3306';
   var mysqlUser = process.env.MYSQL_USER || 'mySQL-username';
   var mysqlPass = process.env.MYSQL_PASS || 'SQL-password';
   var mysqlDB   = process.env.MYSQL_DB   || 'shopping_store';

   var connectionOptions = {
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   };

   
   console.log('MySQL Connection config:');
   console.log(connectionOptions);

   var connection = mysql.createConnection(connectionOptions);

   connection.connect();
 
   connection.query('SELECT * FROM ITEM_TABLES', function (error, results, fields) {
     if (error) throw error;
     
     responseStr = '';

     results.forEach(function(data){
        responseStr += data.ITEM_NAME + ' : ';
        console.log(data);
     });

     if(responseStr.length == 0)
        responseStr = 'No records found';

     console.log(responseStr);

     res.status(200).send(responseStr);
   });
    
   connection.end();
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))