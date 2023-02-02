import { Task } from '../models/Task.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.findByPk(id)

    if (!task) return res.status(404).json({ message: 'Task not found' })

    res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body

    const newTask = await Task.create({
      name, done, projectId
    })

    res.json(newTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { name, done, projectId } = req.body

    const task = await Task.findByPk(id)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    task.name = name
    task.done = done
    task.projectId = projectId

    await task.save()

    res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params

    const task = await Task.destroy({
      where: {
        id
      }
    })

    if (task <= 0) {
      return res.status(404).json({
        message: 'Task not found'
      })
    }

    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
