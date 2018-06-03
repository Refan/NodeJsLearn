var mysql = require('mysql');

//連線資訊
var connection = mysql.createConnection({
    host: 'MySQL伺服器位址',
    user: 'MySQL使用者名稱',
    password: '密碼',
    database: '預設資料庫'
});

//建立連線
connection.connect();

//資料讀取
connection.query('SELECT * FROM website',function(error, rows, fields){
    //檢查是否有錯誤
    if(error){
        throw error;
    }
    console.log(rows[0].title);
});

//資料寫入
var data = {
    rows: 'columns',
    strings: 'integers'
};
connection.query('INSERT INTO `table` SET ?', data, function(error){
    if(error){
        console.log('寫入資料失敗！');
        throw error;
    }
});

//關閉連線
connection.end();