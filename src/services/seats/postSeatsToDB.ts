import { ResultSetHeader } from 'mysql2'
import db from '../DBConnection'

const postSeatsToDB = async (seats: number[]): Promise<boolean> => {
  const pickedSeats = seats.toString()

  const result = await db.execute(`
                                    UPDATE availableseats
                                    SET available = 0
                                    WHERE id IN (${/* (2, 3, 4, 5) */ pickedSeats});
                        `)

  const updatedSeats = result[0] as ResultSetHeader

  if (updatedSeats.info.includes(`Changed: ${seats.length}`)) {
    return true
  } else {
    return false
  }
}

export default postSeatsToDB
