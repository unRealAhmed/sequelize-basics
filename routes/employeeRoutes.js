const express = require('express')
const { getAllEmployees, createEmployee } = require('../controller/employeeController')

const router = express.Router()

router.route('/').get(getAllEmployees).post(createEmployee)

module.exports = router