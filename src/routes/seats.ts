import { Router } from 'express'
import { getSeats, postSeats, resetAvailableSeats } from '../controllers/seats'

const router = Router()

router.get('/seats', getSeats)

router.patch('/seats', postSeats)

router.patch('/reset-available-seats', resetAvailableSeats)

export default router
