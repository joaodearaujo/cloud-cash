import { TransactionHistoryProps } from "./TransactionHistory.type"

const TransactionHistory = ({children} : TransactionHistoryProps) => {
    return(
        <div className="th-container">
            {children}
        </div>
    )
}

export default TransactionHistory;