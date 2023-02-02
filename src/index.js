import { app } from './app.js'
import { PORT } from './config.js'
import { sequelize } from './database/index.js'

async function main () {
  try {
    await sequelize.sync({ force: false })
    app.listen(PORT)
    console.log(`Server online on port ${PORT}`)
  } catch (error) {
    console.log(`Unabled to connect to the database: ${error}`)
  }
}

main()
