import prisma from '../prisma/index.js'

export const createAttendance = async (data) => {
  return await prisma.attendance.create({
    data
  })
}

export const getAttendanceById = async (id) => {
  return await prisma.attendance.findUnique({
    where: { id }
  })
}

export const updateAttendance = async (id, data) => {
  return await prisma.attendance.update({
    where: { id },
    data
  })
}

export const deleteAttendance = async (id) => {
  return await prisma.attendance.delete({
    where: { id }
  })
}
