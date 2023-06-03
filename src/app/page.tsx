import { TodoItem } from "@/component/TodoItem"
import { prisma } from "@/db"
function getTodos(){
  return prisma.todo.findMany()
}

async function toggleTodo(id:string, complete:boolean) {
  "use server"
  await prisma.todo.update({where:{id}, data:{complete}})
  
}

export default async function Home(){
  const todos = await getTodos()
  // await prisma.todo.create({data:{title:"text", complete:false}})
  return(
    <>
      <header className="">
        <h1 className="text-2xl bg-slate-500 px-4 py-2 mb-4"> TODO</h1>
        <a className=" bg-orange-500 px-5 py-2 shadow-sm rounded hover:bg-orange-600" href="/new">New</a>
      </header>
      <ul>
        {
          todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
            // <li key={todo.id}>{todo.title} </li>
          ))
        }
      </ul>
    </>
  )
}