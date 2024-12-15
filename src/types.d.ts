export type Aud = 'a-1' | 'b-2' | 'c-3' | 'd-4' | 'e-5' | 'f-6' | 'g-7' | 'h-8'
export type Available = 0 | 1

interface Movie {
  movie_id: number
  title: string
  imageUrl: string
}

interface Showtime {
  movie_id: string
  showtime: Date
  auditorium: Aud
}

interface Ticket {
  readonly ticketId?: number
  clientName: string
  movie: string
  showtime: Date
  seats: string
  aud: Aud
  total: number,
  createdAt: Date | string
}

interface Seat {
  id: number
  seat: number
  available: Available
}

interface MovieShowtime {
  movie: Movie
  showtimes: Showtime[]
}

// BD Types...
export interface MovieSchema {
  id_schedule: number
  showtime: Date
}

export interface AudSchema {
  id_showtime: number
  showtime: Date
}

export interface ShowtimeSchema {
  id_showtime: number
  showtime: Date | string
  formatedShowtime?: Date | string
}

export interface ShowtimeSchemaAlgoError {
  error?: boolean
  message?: string
}
