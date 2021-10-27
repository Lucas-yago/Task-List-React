import * as C from './styles';
import { Item } from '../../types/item';

 type propsRemoveItems = {
    item: Item;
    handleRemoveTask:  (id: number) => void;
 }


export const RemoveItem = ({item, handleRemoveTask}:propsRemoveItems) => {


    return (
        <C.Container>
            <button onClick={()=>handleRemoveTask(item.id)} >✖</button>
        </C.Container>
    )
}