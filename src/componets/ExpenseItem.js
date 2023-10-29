import './ExpenseItem.css';

function ExpenseItem() {
    const expensedate=new Date(2023,3,28);
    const expenseprice=10;
    const expensetitle="Food expense";
    const locationofexpense="delhi";
       
    return ( 
        <div className="expense-item">
            <div>{expensedate.toISOString()}</div>
            <div className='expense-item__description '>
                <h2>{expensetitle}</h2>
                <h2>{locationofexpense}</h2>
            <div className="expense-item__price">{expenseprice}</div>

            </div>
        </div>
    )
}

export default ExpenseItem;


//we type className in jsx as comapred to html where we write class only