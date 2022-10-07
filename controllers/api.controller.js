const pool = require('../mdb.js');

const getEmployees = async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('Select * from employees')
        console.log(rows);
        res.json(rows);
    }
    catch (err) {
        throw err;
    }
}
const getbyIDEmployees = async (req, res) => {
    const id = req.params.id
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM employees WHERE id = ?', [id])
        console.log(rows);
        res.json(rows);
    }
    catch (err) {
        throw err;
    }
}
const postEmployees = async (req, res) => {
    let employee = req.body;
    try {
        const result = await pool.query("insert into employees (name,adress) values (?,?)", [employee.name, employee.adress]);
        console.log(result);
        console.log(employee.name, typeof (employee.name))
        console.log(employee.adress, typeof (employee.adress))
        res.send({ 'success': "true" });
    } catch (err) {
        throw err;
    }
}
const putEmployees = async (req, res) => {
    let employee = req.body;

    try {
        const result = await pool.query("update employees set name = ?, adress = ? where id = ?", [employee.name, employee.adress, employee.id]);
        console.log(result);
        res.send({ 'success': "true" });
    } catch (err) {
        throw err;
    }
}
const deleteEmployees = (async (req, res) => {
    let id = req.params.id;
    try {
        conn = await pool.getConnection();
        const result = await conn.query("delete from employees where id = ?", [id]);
        console.log(result);
        res.send({ 'success': "true" });
    } catch (err) {
        throw err;
    }
});


module.exports = {
    getEmployees,
    getbyIDEmployees,
    postEmployees,
    putEmployees,
    deleteEmployees,
}
