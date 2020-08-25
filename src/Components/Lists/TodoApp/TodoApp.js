import React ,{useState} from "react"
import TodoData from "./TodoData"


const TodoApp=()=>{
  const [items,setItems]=useState(TodoData)

  const HandleAddItem=(e,taskItem)=>{
    e.preventDefault();
    let Item={
      id:1000,
      task : taskItem,
      duree:"1h",
      completed:false,
    }
    return setItems([...items,Item])
  }
  const handleDelete =(taskToDelete)=>
  {
    console.log(items)
    return setItems(items.filter(el=>el.task!==taskToDelete))
  }
  return(
    <div className="container">
      <h1>To-do List</h1>
      <input type="text" placeholder="Add new Todo" onKeyPress={
        (e)=>{
        if(e.key==='Enter')
            HandleAddItem(e,e.target.value)
          } }/>
      <ul>
        {items.map((item,i)=><li key={i}><span onClick={(e)=>handleDelete(item.task)}>♼</span>{item.task}</li>)}
      </ul>
      {items.length===0?<h1>Move your ass lazy boy ! </h1> : <h1>Big Busy day ahead of you ! let's start the work</h1>}
    </div>
  )
}
export default TodoApp
