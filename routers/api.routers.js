const router = require('express').Router();
const { getEmployees, getbyIDEmployees, postEmployees, putEmployees, deleteEmployees } = require('../controllers/api.controller.js');

router.get('/employees', getEmployees);

router.get('/employees/:id', getbyIDEmployees);

router.post('/employees', postEmployees);

router.put('/employees', putEmployees);

router.delete('/employees/:id', deleteEmployees);

module.exports = router;