import express from 'express'
import {
  createSubscriptionController,
  getSubscriptionByIdController,
  updateSubscriptionController,
  deleteSubscriptionController
} from '../../controllers/subscriptionController.js'

const router = express.Router()

router.post('/', createSubscriptionController)
router.get('/:id', getSubscriptionByIdController)
router.put('/:id', updateSubscriptionController)
router.delete('/:id', deleteSubscriptionController)

export default router
