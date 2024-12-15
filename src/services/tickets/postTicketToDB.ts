import db from '../DBConnection'
import { Ticket } from '../../types'
import { OkPacketParams, ResultSetHeader } from 'mysql2'

/*
      interface Ticket {
        clientName: string
        movie: string
        showtime: Date
        seats: string
        aud: Aud
        total: number
      }
*/

const postTicketToDB = async (data: Ticket) => {
  const result = await db.execute(
    `INSERT INTO ticket(clientName, movie, showtime, seats, aud, total, createdAt) VALUES("${data.clientName}", "${data.movie}", "${data.showtime}", "${data.seats}", "${data.aud}", "${data.total}", "${data.createdAt}")`
  )
  // return ticketId
  const postResult = result[0] as OkPacketParams
  return postResult.insertId
}

export default postTicketToDB
