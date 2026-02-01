import { NewTransactionProps } from "./NewTransaction.type"

const NewTransacition = ({children} : NewTransactionProps) => {
    return (
        <div className="nt-container">
            {children}
        </div>
    )
}

export default NewTransacition;