import './TransactionHistory.css'
import { historyInfoProps } from "./TransactionHistory.type"

const HistoryTable = (historyInfo : historyInfoProps) => {
    return (
        <tbody className="transaction-history__body">
                <tr className="transaction-history__row">
                    <td className="transaction-history__cell transaction-history__cell--receiver"><img src={`${historyInfo.icon}`} alt="" className="transaction-history__icon"/>{historyInfo.receiver}</td>
                    <td className="transaction-history__cell transaction-history__cell--type">{historyInfo.type}</td>
                    <td className="transaction-history__cell transaction-history__cell--date">{historyInfo.date}</td>
                    <td className="transaction-history__cell transaction-history__cell--amount">${historyInfo.amount}</td>
                </tr>
        </tbody>
    )
}

const TransactionHistory = () => {

    const historyInfo = [
        {
            id: 1,
            receiver: "Tesco Market",
            type: "Shopping",
            date: "13 Dec 2020",
            amount: 75.67,
            icon: "shopping-cart-icon.png"
        },
        {
            id: 2,
            receiver: "ElectroMen Market",
            type: "Shopping",
            date: "14 Dec 2020",
            amount: 250.00,
            icon: "shopping-cart-icon.png"
        },
        {
            id: 3,
            receiver: "Fiorgio Restaurant",
            type: "Food",
            date: "07 Dec 2020",
            amount: 19.50,
            icon: "restaurant-icon.png"
        },
        {
            id: 4,
            receiver: "John Mathew Kayne",
            type: "Sport",
            date: "06 Dec 2020",
            amount: 350.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 1,
            receiver: "Tesco Market",
            type: "Shopping",
            date: "13 Dec 2020",
            amount: 75.67,
            icon: "shopping-cart-icon.png"
        },
        {
            id: 2,
            receiver: "ElectroMen Market",
            type: "Shopping",
            date: "14 Dec 2020",
            amount: 250.00,
            icon: "shopping-cart-icon.png"
        },
        {
            id: 3,
            receiver: "Fiorgio Restaurant",
            type: "Food",
            date: "07 Dec 2020",
            amount: 19.50,
            icon: "restaurant-icon.png"
        },
        {
            id: 4,
            receiver: "John Mathew Kayne",
            type: "Sport",
            date: "06 Dec 2020",
            amount: 350.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
        {
            id: 5,
            receiver: "Ann Marlin",
            type: "Shopping",
            date: "31 Nov 2020",
            amount: 430.00,
            icon: "user-icon.png"
        },
    ]

    return(
        <div className="transaction-history">
            <h1 className="transaction-history__title">Transaction History</h1>
            <div className="transiction-history__table-container">
                <table className="transaction-history__table">
                    <thead className="transaction-history__head">
                        <th className="transaction-history__header transaction-history__header--receiver">Receiver</th>
                        <th className="transaction-history__header transaction-history__header--type" >Type</th>
                        <th className="transaction-history__header transaction-history__header--date">Date</th>
                        <th className="transaction-history__header transaction-history__header--amount">Amount</th>
                    </thead>
                    {historyInfo.map((item, index) => (
                        <HistoryTable
                            id={index}
                            receiver={item.receiver}
                            type={item.type}
                            date={item.date}
                            amount={item.amount}
                            icon={item.icon}
                        />
                    ))}
                </table>
            </div>           
        </div>
    )
}

export default TransactionHistory;