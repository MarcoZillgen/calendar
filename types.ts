type Task = {
  id: number
  startDate: Date
  endDate: Date
  title: string
  description: string
  category: string
  color: string
}

type State<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export type {Task, State}