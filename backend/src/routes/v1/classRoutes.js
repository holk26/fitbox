import express from 'express'
import {
  createClassController,
  getClassByIdController,
  updateClassController,
  deleteClassController
} from '../../controllers/classController.js'

const router = express.Router()

router.post('/', createClassController)
router.get('/:id', getClassByIdController)
router.put('/:id', updateClassController)
router.delete('/:id', deleteClassController)

export default router
