import { createSubscription, getSubscriptionById, updateSubscription, deleteSubscription } from '../services/subscriptionService.js'

export const createSubscriptionController = async (req, res) => {
  try {
    const newSubscription = await createSubscription(req.body)
    res.status(201).json(newSubscription)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getSubscriptionByIdController = async (req, res) => {
  try {
    const subscription = await getSubscriptionById(req.params.id)
    res.status(200).json(subscription)
  } catch (error) {
    res.status(404).json({ error: 'Subscription not found' })
  }
}

export const updateSubscriptionController = async (req, res) => {
  try {
    const updatedSubscription = await updateSubscription(req.params.id, req.body)
    res.status(200).json(updatedSubscription)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteSubscriptionController = async (req, res) => {
  try {
    await deleteSubscription(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
