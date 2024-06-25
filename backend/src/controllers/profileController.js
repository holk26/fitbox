import { createProfile, getProfileById, updateProfile, deleteProfile } from '../services/profileService.js'

export const createProfileController = async (req, res) => {
  try {
    const newProfile = await createProfile(req.body)
    res.status(201).json(newProfile)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getProfileByIdController = async (req, res) => {
  try {
    const profile = await getProfileById(req.params.id)
    res.status(200).json(profile)
  } catch (error) {
    res.status(404).json({ error: 'Profile not found' })
  }
}

export const updateProfileController = async (req, res) => {
  try {
    const updatedProfile = await updateProfile(req.params.id, req.body)
    res.status(200).json(updatedProfile)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteProfileController = async (req, res) => {
  try {
    await deleteProfile(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
