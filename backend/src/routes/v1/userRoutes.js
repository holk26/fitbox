import express from 'express'
import { createUser, getUserById, updateUser, deleteUser } from '../../services/userService.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newUser = await createUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ error: 'User not found' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body)
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await deleteUser(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
