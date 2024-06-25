import prisma from '../prisma/index.js'

export const createMembership = async (data) => {
  return await prisma.membership.create({
    data
  })
}

export const getMembershipById = async (id) => {
  return await prisma.membership.findUnique({
    where: { id }
  })
}

export const updateMembership = async (id, data) => {
  return await prisma.membership.update({
    where: { id },
    data
  })
}

export const deleteMembership = async (id) => {
  return await prisma.membership.delete({
    where: { id }
  })
}
