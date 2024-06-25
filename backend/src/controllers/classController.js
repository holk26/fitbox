import { createClass, getClassById, updateClass, deleteClass } from '../services/classService.js'

export const createClassController = async (req, res) => {
  try {
    const newClass = await createClass(req.body)
    res.status(201).json(newClass)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getClassByIdController = async (req, res) => {
  try {
    const classData = await getClassById(req.params.id)
    res.status(200).json(classData)
  } catch (error) {
    res.status(404).json({ error: 'Class not found' })
  }
}

export const updateClassController = async (req, res) => {
  try {
    const updatedClass = await updateClass(req.params.id, req.body)
    res.status(200).json(updatedClass)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteClassController = async (req, res) => {
  try {
    await deleteClass(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
