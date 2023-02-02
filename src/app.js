import express from 'express'
import cors from 'cors'

import projectsRoutes from './routes/projects.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

export const app = express()
app.use(cors())
app.use(express.json())

app.use(projectsRoutes)
app.use(tasksRoutes)
