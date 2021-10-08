import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name:"Comprar Bolo na padaria", done: false},
    {id: 2, name:"Comprar Pão na padaria", done: true},
    {id: 3, name:"Comprar Leite no mercado", done: false},
    {id: 4, name:"Comprar Mortadela no mercado", done: true}

  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/*ADICIONA NOVA TAREFA */}



        {/*LISTA TODAS AS TAREFAS*/}

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}



      </C.Area>
    </C.Container>

  );
}
export default App;