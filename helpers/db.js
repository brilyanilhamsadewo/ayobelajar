const mysql = require('mysql2/promise');

const createConnection = async () => {
    return await mysql.createConnection({
        host:'database-wa.cbkftsjlatak.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: 'admindatabase123',
        database: 'database_wa1'
    });
}

const getReply = async(keyword) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT message FROM wa_replies WHERE keyword=?',[keyword]);
    if(rows.length > 0) return rows[0].message;
    return false;
}

module.exports ={
    createConnection,
    getReply
}