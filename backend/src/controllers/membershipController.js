import { createMembership, getMembershipById, updateMembership, deleteMembership } from '../services/membershipService.js'

export const createMembershipController = async (req, res) => {
  try {
    const newMembership = await createMembership(req.body)
    res.status(201).json(newMembership)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getMembershipByIdController = async (req, res) => {
  try {
    const membership = await getMembershipById(req.params.id)
    res.status(200).json(membership)
  } catch (error) {
    res.status(404).json({ error: 'Membership not found' })
  }
}

export const updateMembershipController = async (req, res) => {
  try {
    const updatedMembership = await updateMembership(req.params.id, req.body)
    res.status(200).json(updatedMembership)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteMembershipController = async (req, res) => {
  try {
    await deleteMembership(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
