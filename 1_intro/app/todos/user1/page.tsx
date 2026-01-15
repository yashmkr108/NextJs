import axios from "axios"
import { Metadata } from "next"

export const metadata:Metadata={
    title:"Todos"
}

const Todos = async () => {
    const response = await axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos/')
    const todos = response.data
    return <div className="bg-slate-900 min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-5 gap-4 w-[90%]">
            {todos
                .filter((todo) => todo.userId == 2)
                .map((todo) => (<Todo key={todo.id} title={todo.title} completed={todo.completed} />))}
        </div>
    </div>
}

const Todo = ({ title, completed }: TodoProps) => {
    return <div className="p-4 border border-slate-800 bg-slate-50 rounded-3xl mt-1 mb-1">
        <h1 className="font-semibold text-xl">{title}</h1>
        <div className={`text-center font-semibold text-lg ${completed ? 'text-green-500' : 'text-red-500'}`}>{completed.toString()}</div>
    </div>
}
type TodoProps = Pick<TodoType, 'title' | 'completed'>
type TodoType = {
    userId: number
    id: number,
    title: string,
    completed: boolean
}
export default Todos