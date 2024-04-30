import { useCallback, useState } from "react"

export default function App() {

  const [todo, setTodo]= useState("");
  const [todoList,setTodoList]= useState([]);


  const handleForm= (e)=>{
    e.preventDefault()
    setTodoList([...todoList,{todoName:todo}]);
    setTodo("");
  }
  const deleteTodo= (deleteValue)=>{
  const restTodoList= [...todoList.filter((value)=>{
    return value.todoName !== deleteValue;
  })]
  setTodoList(restTodoList);
  }

  return (
 <div className="bg-slate-200 w-full h-screen flex items-center ">
  <div className="w-[500px] mx-auto bg-white p-5 rounded-lg">
    <h1 className="text-5xl font-bold ml-28 mb-8">Todo List</h1>
    <form  onSubmit={handleForm}>
      <input type="text" className="border-2 border-black w-full p-3 rounded-lg  placeholder:text--400" placeholder="Type your task" value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button type="submit" className="bg-red-600 mt-4 w-32 ml-36 text-white  py-3 px-4 rounded-lg mb-8">Add</button>
    </form>
    <div className="todoArea">
      <ul>
       {
        todoList.map((singleTodo,index)=>{
          return(
          <li key={index} className="bg-black mb-5 flex justify-between text-white py-5 rounded-lg text-2xl px-2">
           {singleTodo.todoName}{""}
            <span onClick={()=>deleteTodo(singleTodo.todoName)} className="text-red-600 cursor-pointer">x</span></li>
          )
        })
       }
      </ul>
    </div>
  </div>
 </div>
  )
}