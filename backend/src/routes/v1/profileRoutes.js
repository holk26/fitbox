import express from 'express'
import {
  createProfileController,
  getProfileByIdController,
  updateProfileController,
  deleteProfileController
} from '../../controllers/profileController.js'

const router = express.Router()

router.post('/', createProfileController)
router.get('/:id', getProfileByIdController)
router.put('/:id', updateProfileController)
router.delete('/:id', deleteProfileController)

export default router
