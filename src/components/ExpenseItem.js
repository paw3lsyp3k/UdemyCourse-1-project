import React from 'react';

import './ExpenseItem.css'

function ExpenseItem({title,date,amount}) {
    const month = date.toLocaleString('pl-PL', {month: 'long'});
    const day = date.toLocaleString('pl-PL', {day: '2-digit'});
    const year = date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;