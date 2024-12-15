import { ResultSetHeader } from 'mysql2'
import db from '../DBConnection'

const resetAvailableSeatsDB = async (): Promise<boolean> => {
  const result = await db.execute(`
                                    UPDATE availableseats
                                    SET available = 1
                        `)

  const updatedSeats = result[0] as ResultSetHeader

  if (updatedSeats.affectedRows === 40) {
    return true
  } else {
    return false
  }
}

export default resetAvailableSeatsDB
