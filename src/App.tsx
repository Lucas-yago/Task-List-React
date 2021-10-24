import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  
  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.unshift({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
    console.log(newList)
    localStorage.setItem("newList",JSON.stringify(newList));
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem("newList") || "[]" ); 
    setList(tasks) 
    },[]
    
  );

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddItem onEnter={handleAddTask} />

        <div id="listBox">
          
          {list.map((item, index)=>(
            <ListItem key={index} item={item} onChange={handleTaskChange} />

          ))}
        </div>

      </C.Area>
    </C.Container>

  );
}
export default App;