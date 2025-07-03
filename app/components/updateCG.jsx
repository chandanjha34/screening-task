import { operators, size, margin } from '../data/operators.jsx';
import Operator from './Operator';
import Circuit from './Circuit.jsx';

export default function updateCG(){

    operators[3].components.map((component,index)=>{
            Key=index
            console.log('hi');
            const newItem = {
            i: new Date().getTime().toString(), // unique id
            gateId: 'Hadamard',
            x: component.x,
            y: component.y,
            w: 1,
            h: 1,
            isResizable: false,
        };

        const updatedLayout = newLayout.filter(
            item => item.i !== '__dropping-elem__' && item.y < Circuit.gridDimenY,
        ).map(item => {
            return {
                ...item,
                gateId: layout.find(i => i.i === item.i)?.gateId,
            };
        });
        updatedLayout.push(newItem);

        handleCircuitChange({
            layout: updatedLayout,
        });
    })


    

}