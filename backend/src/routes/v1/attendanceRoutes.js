import express from 'express'
import {
  createAttendanceController,
  getAttendanceByIdController,
  updateAttendanceController,
  deleteAttendanceController
} from '../../controllers/attendanceController.js'

const router = express.Router()

router.post('/', createAttendanceController)
router.get('/:id', getAttendanceByIdController)
router.put('/:id', updateAttendanceController)
router.delete('/:id', deleteAttendanceController)

export default router
