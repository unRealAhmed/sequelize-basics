const Employee = require('../models/Employee')

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.findAll()
  res.json(employees)
}

exports.createEmployee = async (req, res) => {
  const newEmployee = await Employee.create({
    ...req.body,
  });
  res.json(newEmployee)
}