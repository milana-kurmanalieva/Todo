import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './module/TodoBox/Todo'

createRoot(document.getElementById('root')!).render(
    <Todo />
)
