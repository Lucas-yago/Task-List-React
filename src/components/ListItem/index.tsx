import * as C from './styles';
import { Item } from '../../types/item';
import { RemoveItem } from '../../components/RemoveItem';

type PropsItemList = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
    handleRemoveTask:  (id: number ) => void;
};


export const ListItem = ({item, onChange, handleRemoveTask }: PropsItemList) => {

    return (
        <section>
            <C.Container done={item.done}>
                <input type='checkbox'
                    checked={item.done}
                    onChange={e => onChange(item.id, e.target.checked)}
                />
                <div className="label-container">
                   <label>{item.name}</label> 
                </div>

                <RemoveItem item ={item} handleRemoveTask={handleRemoveTask}/>

            </C.Container> 

        </section>

    )
};
