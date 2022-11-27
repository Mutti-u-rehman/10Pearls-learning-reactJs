import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

    if (props.items.length == 0) {
      return <p>No Expenses Found.</p>;
    };

    return (
    <ul className="expreses-list">
        {props.items.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
    );
};

export default ExpensesList;