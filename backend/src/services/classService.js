import prisma from '../prisma/index.js'

export const createClass = async (data) => {
  return await prisma.class.create({
    data
  })
}

export const getClassById = async (id) => {
  return await prisma.class.findUnique({
    where: { id },
    include: {
      instructor: true,
      attendees: true
    }
  })
}

export const updateClass = async (id, data) => {
  return await prisma.class.update({
    where: { id },
    data
  })
}

export const deleteClass = async (id) => {
  return await prisma.class.delete({
    where: { id }
  })
}
