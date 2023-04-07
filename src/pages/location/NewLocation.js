import React, { useState } from 'react';
import LocationForm from './LocationForm';
import GetAll from './GetAll';

const NewLocation = (props) => {
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
        <div className='Dashboard-new-location'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Location</button>
            )}
            {isEditing && (
                <LocationForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
            <div className='Home-table-area'>
                <GetAll />
            </div>
        </div>
    );
}

export default NewLocation;