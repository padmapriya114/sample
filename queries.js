const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "sample.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "Sample",
  password: "sample2021",
  port: 5432
});

const insertEmployee = (request, response) => {
const {id, name} = request.body
  pool.query( "INSERT INTO public.Employee (id, name) VALUES ($1,$2)",[id, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in Employee')
  })
}

const insertUniverse = (request, response) => {
const {id, name} = request.body
  pool.query( "INSERT INTO public.Universe (id, name) VALUES ($1,$2)",[id, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in Universe')
  })
}

const insertaccounts = (request, response) => {
const {user_id, username, password, email, created_on, last_login} = request.body
  pool.query( "INSERT INTO public.accounts (user_id, username, password, email, created_on, last_login) VALUES ($1,$2,$3,$4,$5,$6)",[user_id, username, password, email, created_on, last_login], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in accounts')
  })
}

module.exports = {
insertEmployee,
insertUniverse,
insertaccounts
}
