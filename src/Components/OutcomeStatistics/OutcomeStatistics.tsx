import { OutcomeStatisticsProps } from './OutcomeStatistics.type';
import './OutcomeStatistics.css';
import { historyInfoProps } from '../TransactionHistory/TransactionHistory.type';

const historyInfo = [
        {
    "id": 1,
    "receiver": "Tesco Market",
    "type": "Shopping",
    "date": "13 Dec 2020",
    "amount": 75.67,
    "icon": "add.png"
  },
  {
    "id": 2,
    "receiver": "Starbucks Coffee",
    "type": "Food & Drink",
    "date": "14 Dec 2020",
    "amount": 12.50,
    "icon": "add.png"
  },
  {
    "id": 3,
    "receiver": "Shell Gas Station",
    "type": "Transport",
    "date": "15 Dec 2020",
    "amount": 45.00,
    "icon": "add.png"
  },
  {
    "id": 4,
    "receiver": "Netflix Subscription",
    "type": "Entertainment",
    "date": "16 Dec 2020",
    "amount": 15.99,
    "icon": "add.png"
  },
  {
    "id": 5,
    "receiver": "Apple Store",
    "type": "Electronics",
    "date": "17 Dec 2020",
    "amount": 1200.00,
    "icon": "add.png"
  },
  {
    "id": 6,
    "receiver": "Amazon.com",
    "type": "Shopping",
    "date": "18 Dec 2020",
    "amount": 89.90,
    "icon": "add.png"
  },
  {
    "id": 7,
    "receiver": "City Gym",
    "type": "Health",
    "date": "19 Dec 2020",
    "amount": 50.00,
    "icon": "add.png"
  }      

 ]

    const Statistic = (historyInfo : historyInfoProps) => {

            return(
            <div className="statistic">
                <img src="./public/holidays.png" alt="" className="statistic__icon" />
                <div className="statistic__group">
                    <div className="statistic__bar">
                        <div className="statistic__fill" style={{width:'45%'}}>
                        </div>
                    </div>
                    <p className="statistic__label">Shopping</p>
                </div>  
                <p className="statistic__percentage">23%</p>
            </div>
        )
    }

const OutcomeStatistics = (historyInfo : historyInfoProps) => {
    return(
        <div className="outcome-statistics">
                <p className="outcome-statistics__title">Outcome Statistics</p>
                <Statistic
                    {...historyInfo}
                />            
        </div>
    )
}

export default OutcomeStatistics;