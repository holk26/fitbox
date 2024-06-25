import express from 'express'
import { createSkill, getSkillById, updateSkill, deleteSkill } from '../../services/skillService.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newSkill = await createSkill(req.body)
    res.status(201).json(newSkill)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const skill = await getSkillById(req.params.id)
    res.status(200).json(skill)
  } catch (error) {
    res.status(404).json({ error: 'Skill not found' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedSkill = await updateSkill(req.params.id, req.body)
    res.status(200).json(updatedSkill)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await deleteSkill(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
