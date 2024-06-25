import { createAttendance, getAttendanceById, updateAttendance, deleteAttendance } from '../services/attendanceService.js'

export const createAttendanceController = async (req, res) => {
  try {
    const newAttendance = await createAttendance(req.body)
    res.status(201).json(newAttendance)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getAttendanceByIdController = async (req, res) => {
  try {
    const attendance = await getAttendanceById(req.params.id)
    res.status(200).json(attendance)
  } catch (error) {
    res.status(404).json({ error: 'Attendance not found' })
  }
}

export const updateAttendanceController = async (req, res) => {
  try {
    const updatedAttendance = await updateAttendance(req.params.id, req.body)
    res.status(200).json(updatedAttendance)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteAttendanceController = async (req, res) => {
  try {
    await deleteAttendance(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
