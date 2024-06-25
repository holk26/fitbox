import express from 'express'
import { createSubscription, getSubscriptionById, updateSubscription, deleteSubscription } from '../../services/subscriptionService.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newSubscription = await createSubscription(req.body)
    res.status(201).json(newSubscription)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const subscription = await getSubscriptionById(req.params.id)
    res.status(200).json(subscription)
  } catch (error) {
    res.status(404).json({ error: 'Subscription not found' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedSubscription = await updateSubscription(req.params.id, req.body)
    res.status(200).json(updatedSubscription)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await deleteSubscription(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default router
