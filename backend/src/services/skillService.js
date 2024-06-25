import prisma from '../prisma/index.js'

export const createSkill = async (data) => {
  return await prisma.skill.create({
    data
  })
}

export const getSkillById = async (id) => {
  return await prisma.skill.findUnique({
    where: { id }
  })
}

export const updateSkill = async (id, data) => {
  return await prisma.skill.update({
    where: { id },
    data
  })
}

export const deleteSkill = async (id) => {
  return await prisma.skill.delete({
    where: { id }
  })
}
