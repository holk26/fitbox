import { createSkill, getSkillById, updateSkill, deleteSkill } from '../services/skillService.js'

export const createSkillController = async (req, res) => {
  try {
    const newSkill = await createSkill(req.body)
    res.status(201).json(newSkill)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getSkillByIdController = async (req, res) => {
  try {
    const skill = await getSkillById(req.params.id)
    res.status(200).json(skill)
  } catch (error) {
    res.status(404).json({ error: 'Skill not found' })
  }
}

export const updateSkillController = async (req, res) => {
  try {
    const updatedSkill = await updateSkill(req.params.id, req.body)
    res.status(200).json(updatedSkill)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteSkillController = async (req, res) => {
  try {
    await deleteSkill(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
