import { useParams } from 'react-router-dom'

function TaskDetails() {
  const { id } = useParams()
  return <div>задача с id: {id}</div>
}

export default TaskDetails