const express = require('express')
const sequelize = require('./config/DBConnection')
const employeeRouter = require('./routes/employeeRoutes')

sequelize.sync({ force: false });

const app = express()

app.use(express.json())

app.use('/api/v1/employees', employeeRouter)

app.listen(8000, () => {
  console.log(`App running on port 8000...`);
})