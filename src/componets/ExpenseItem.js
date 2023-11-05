import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expensedate=new Date(2023,3,28);
    // const expenseprice=10;
    // const expensetitle="Food expense";
    // const locationofexpense="delhi";

    // const month = props.date.toLocaleString('en-Us', { month: 'long' });
    // const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
    // const year = props.date.getFullYear();

    return (
        <div className="expense-item">
          <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </div>
    )
}

export default ExpenseItem;


//we type className in jsx as comapred to html where we write class only