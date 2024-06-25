import express from 'express'
import {
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController
} from '../../controllers/userController.js'

const router = express.Router()

router.post('/', createUserController)
router.get('/:id', getUserByIdController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default router
