import express from 'express'
import {
  createMembershipController,
  getMembershipByIdController,
  updateMembershipController,
  deleteMembershipController
} from '../../controllers/membershipController.js'

const router = express.Router()

router.post('/', createMembershipController)
router.get('/:id', getMembershipByIdController)
router.put('/:id', updateMembershipController)
router.delete('/:id', deleteMembershipController)

export default router
