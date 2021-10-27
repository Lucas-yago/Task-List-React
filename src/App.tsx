import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
    localStorage.setItem("taskList", JSON.stringify(newList));
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    localStorage.setItem("taskList", JSON.stringify(newList));
    setList(newList);
  }

  const handleRemoveTask = (id: number) => {
    let newList = [...list];
    newList.forEach((e) => {
      if (e.id === id) {
        newList.splice(newList.indexOf(e), 1)
        localStorage.setItem("taskList", JSON.stringify(newList));
      }
      setList(newList);
    })

    console.log('removendo id:', id)
  }


  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("taskList") || "[]");
    setList(tasks)
  }, []
  );

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddItem onEnter={handleAddTask} />

        <div id="listBox">

          {list.map((item, index) => (
            <ListItem key={index} item={item} onChange={handleTaskChange} handleRemoveTask={handleRemoveTask} />
          ))}

        </div>

      </C.Area>
    </C.Container>

  );
}
export default App;