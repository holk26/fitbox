import prisma from '../prisma/index.js'

export const createProfile = async (data) => {
  return await prisma.profile.create({
    data
  })
}

export const getProfileById = async (id) => {
  return await prisma.profile.findUnique({
    where: { id }
  })
}

export const updateProfile = async (id, data) => {
  return await prisma.profile.update({
    where: { id },
    data
  })
}

export const deleteProfile = async (id) => {
  return await prisma.profile.delete({
    where: { id }
  })
}
