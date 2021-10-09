
import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type EnterProps ={
    onEnter: (taskName: string) => void;
}

export const AddItem = ({onEnter}: EnterProps)=>{

    const[inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');   
        }
    };

    return(
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder = "Adicione uma nova tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
             />
        </C.Container>
    );
};