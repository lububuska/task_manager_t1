import type { Task } from '../types/task'

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Fix login bug',
    description: 'Error 500 when logging in',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Add dark mode',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Update README',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
  },
]
