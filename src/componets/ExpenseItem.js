import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <h2>Expense Item</h2>
            <div className='expense-item__description'><h2>food rs 10</h2></div>
            <div className="expense-item__price">petrol rs100</div>
            <div>movie rs 200</div>
        </div>
    )
}

export default ExpenseItem;


//we type className in jsx as comapred to html where we write class only