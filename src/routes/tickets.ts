import { Router } from 'express'
import { getTicket, postTicket } from '../controllers/tickets'

const router = Router()

router.get('/ticket/:ticketId', getTicket)

router.post('/ticket', postTicket)

export default router
