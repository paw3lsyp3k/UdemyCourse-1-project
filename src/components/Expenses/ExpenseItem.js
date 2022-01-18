import React,{ useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css'

function ExpenseItem({title,date,amount}) {
    
    const [newtitle, setTitle] = useState(title);


    const clikcHandler = () => {
        setTitle("updated");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{newtitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clikcHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;