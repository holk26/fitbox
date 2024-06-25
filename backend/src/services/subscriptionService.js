import prisma from '../prisma/index.js'

export const createSubscription = async (data) => {
  return await prisma.subscription.create({
    data
  })
}

export const getSubscriptionById = async (id) => {
  return await prisma.subscription.findUnique({
    where: { id }
  })
}

export const updateSubscription = async (id, data) => {
  return await prisma.subscription.update({
    where: { id },
    data
  })
}

export const deleteSubscription = async (id) => {
  return await prisma.subscription.delete({
    where: { id }
  })
}
