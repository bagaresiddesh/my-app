import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import GetAll from './GetAll';

const NewCustomer = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return (
        <div className='Dashboard-new-customer'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Customer</button>
            )}
            {isEditing && (
                <CustomerForm

                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
            <div className='Customer-table-area'>
                <GetAll />
            </div>
        </div>
    );
}

export default NewCustomer;