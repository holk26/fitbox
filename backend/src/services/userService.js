import prisma from '../prisma/index.js'

const validRoles = ['MEMBER', 'INSTRUCTOR', 'ADMIN', 'OWNER', 'SUPER_ADMIN']

export const createUser = async (data) => {
  if (!validRoles.includes(data.role)) {
    throw new Error('Invalid user role')
  }

  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
      role: data.role,
      googleId: data.googleId,
      appleId: data.appleId
    }
  })

  return newUser
}

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
      skills: true,
      attendances: true,
      memberships: true,
      classes: true
    }
  })
}

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data
  })
}

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id }
  })
}
