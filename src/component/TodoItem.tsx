"use client"

type TodoItemProps ={
    id:string
    title: string
    complete:boolean
    toggleTodo:(id:string, complete:boolean)=>void
}
export function TodoItem({id, title, complete, toggleTodo}:TodoItemProps){
    return (
        <li className="flex gap-1 items-center" style={{display:"flex"}}>
            <input 
                id={id} 
                type="checkbox"
                defaultChecked={complete}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
            <label 
                htmlFor={id}>{title}</label>
        </li>
    )
}
