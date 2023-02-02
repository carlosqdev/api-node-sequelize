import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DATABASE = process.env.DATABASE
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
