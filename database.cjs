// database.cjs

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'gohan_bebidas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const executeQuery = async (sql, values = []) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } finally {
    connection.release();
  }
};

module.exports = executeQuery;
