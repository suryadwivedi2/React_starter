import ExpenseItem from './componets/ExpenseItem'


function App() {
  const expense = [
    {
      title: 'toilet paper',
      price: '12 $',
      date: new Date(2023, 10, 12),
      locationofexpense:'delhi'
    },
    {
      title: 'car tyre',
      price: '120 $',
      date: new Date(2023, 10, 10),
      locationofexpense:'surat'
    },
    {
      title: 'car paint',
      price: '1200 $',
      date: new Date(2023, 10, 22),
      locationofexpense:'gujrat'
    },
    {
      title: 'car insurance',
      price: '150 $',
      date: new Date(2023, 10, 17),
      locationofexpense:'mumbai'

    }
  ]

   return (
      <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].price} date={expense[0].date} location={expense[0].locationofexpense}></ExpenseItem>
       <ExpenseItem title={expense[1].title} amount={expense[1].price} date={expense[1].date} location={expense[1].locationofexpense}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].price} date={expense[2].date} location={expense[2].locationofexpense}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].price} date={expense[3].date} location={expense[3].locationofexpense}></ExpenseItem>
     
    </div>
  )
}


export default App;
