const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '147258369',
    database: "nodedb",
    connectionLimit: 5
});
module.exports = pool;