import { Ticket } from '../../types'
import db from '../DBConnection'

const getTicketFromDB = async (ticketId: number): Promise<Ticket> => {
  const result = await db.execute(`SELECT * FROM ticket WHERE ticketId = ${ticketId}`)
  const tickets = result[0] as Ticket[]
  return tickets[0]
}

export default getTicketFromDB
