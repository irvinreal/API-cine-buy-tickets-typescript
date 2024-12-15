import { Request, Response } from 'express'
import getSeatsFromDB from '../services/seats/getSeatsFromDB'
import postSeatsToDB from '../services/seats/postSeatsToDB'
import resetAvailableSeatsDB from '../services/seats/resetAvailableSeats'

export const getSeats = async (req: Request, res: Response) => {
  const seats = await getSeatsFromDB()
  return res.status(200).json({ status: 'Success', seats })
}

export const postSeats = async (req: Request, res: Response) => {
  const { seats } = req.body

  try {
    const postedSeats = await postSeatsToDB(seats)
    if (postedSeats) {
      return res.status(200).json({ pickedSeats: seats })
    } else {
      return res.status(400).json({ error: "Couldn't update 'seats' on DB." })
    }
  } catch (error) {
    return res.status(500).json({ error: "Couldn't update 'seats' on DB." })
  }
}

export const resetAvailableSeats = async (req: Request, res: Response) => {
  const reseted = await resetAvailableSeatsDB()
  res.status(200).json({ status: 'Success!', reseted })
}
