import { Request, Response } from 'express'
import postTicketToDB from '../services/tickets/postTicketToDB'
import { Ticket } from '../types'
import { format } from 'date-fns'
import getTicketFromDB from '../services/tickets/getTicketFromDB'

export const getTicket = async (req: Request, res: Response) => {
  const { ticketId } = req.params
  const parsedTicketId = parseInt(ticketId)
  if (isNaN(parsedTicketId)) return res.status(400).json({ error: "'ticketId' must be a number." })

  const ticket = await getTicketFromDB(parsedTicketId)
  const ticketToReturn = {
    ticketId: ticket.ticketId,
    clientName: ticket.clientName,
    movie: ticket.movie,
    showtime: ticket.showtime,
    seats: ticket.seats,
    aud: ticket.aud,
    total: ticket.total,
    createdAt: ticket.createdAt
  }
  return res.status(200).json({ ticket: ticketToReturn })
}

export const postTicket = async (req: Request, res: Response) => {
  const { clientName, movie, showtime, seats } = req.body
  const aud = 'a-1'
  const total = 235

  // format data to send:
  /*
      interface Ticket {
        clientName: string
        movie: string
        showtime: Date
        seats: string
        aud: Aud
        total: number
        createdAt: Date | string
      }
  */

  // MySql DB: DATETIME format -> 'YYYY-MM-DD HH:MM:SS'
  const createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  const newTicket: Ticket = {
    clientName,
    movie,
    showtime,
    seats,
    aud,
    total,
    createdAt
  }

  // Task:
  // ckeck available seats...

  const ticketId = await postTicketToDB(newTicket)
  return res.status(200).json({ ticket: { ticketId, ...newTicket } })
}
