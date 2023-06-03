import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data:FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if(typeof title != "string" || title.length ===0){
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({data:{title, complete:false}})
    redirect("/")
}


export default function Page(){
    return(<>
        <form action={createTodo}>
            <input 
                type="text" 
                name="title" 
                placeholder="Enter your todo"
                className="w-full bg-slate-500 px-4 py-2 mb-4 rounded-sm text-white"
            />
            <div className="flex space-x-3 justify-end">
                <a href=".." className=" bg-gray-400 px-5 py-2 shadow-sm rounded hover:bg-gray-600">Cancel</a>
                <button className=" bg-orange-500 px-5 py-2 shadow-sm rounded hover:bg-orange-600" type="submit">ADD</button>
            </div>
        </form>
    </>
        )
}