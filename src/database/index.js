import Sequelize from 'sequelize'
import { DATABASE, DB_USER, DB_PASSWORD, DB_HOST } from '../config.js'

export const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
})
