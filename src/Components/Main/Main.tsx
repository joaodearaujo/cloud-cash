import Cards from "../Cards/Cards";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Goals from "../Goals/Goals";
import OutcomeStatistics from "../OutcomeStatistics/OutcomeStatistics";
import './Main.css';

const userCards: UserCard[] = [ 
     {
        bankName: 'Nubank',
        typeCard: 'credit',
        cardNumber: '5105 **** **** 4567',
        name: 'João Pedro Araújo',
        expirationDate: '06/32',
        weeklyLimit: 4000,
        weeklyUsed: 3500.6,
        currentBalance: 2000.00,
        income: 2500.00,
        outcome: 500.00,
        color: '#8A05BE'
    },
    {
        bankName: 'Inter',
        typeCard: 'debit',
        cardNumber: '4532 **** **** 1289',
        name: 'João Pedro Araújo',
        expirationDate: '11/29',    
        weeklyLimit: 2500,
        weeklyUsed: 450.0,
        currentBalance: 23945.75,
        income: 5000.00,
        outcome: 1200.00,
        color: '#FF7A00'
    },
    {
        bankName: 'Santander',
        typeCard: 'platinum',
        cardNumber: '5434 **** **** 9012',
        name: 'J. Pedro Araújo',
        expirationDate: '01/28',
        weeklyLimit: 8000,
        weeklyUsed: 2100.0,
        currentBalance: 3200.50,
        income: 4000.00,
        outcome: 800.00,
        color: '#EC0000'
    },
    {
        bankName: 'C6 Bank',
        typeCard: 'black',
        cardNumber: '3782 **** **** 0041',
        name: 'Joao P. Araujo',
        expirationDate: '02/30',
        weeklyLimit: 15000,
        weeklyUsed: 8900.0,
        currentBalance: 450.10,
        income: 1500.00,
        outcome: 3200.00,
        color: '#212121'
    },
    {
        bankName: 'Chase Bank',
        typeCard: 'credit',
        cardNumber: '4242 **** **** 4242',
        name: 'Joao P. Araujo',
        expirationDate: '05/27',
        weeklyLimit: 5000,
        weeklyUsed: 5000.0,
        currentBalance: 0.00,
        income: 0.00,
        outcome: 150.00,
        color: '#117ACA'
    }   
    ]

const Main = () => {
    return (
    <div className="main-container">
            <div className="main__left">
                <Cards
                {...userCards}
                />
                <TransactionHistory/>
            </div>
            <div className="main__right">
                <Goals/>
                <OutcomeStatistics/>
          </div>
    </div>)
}

export default Main;