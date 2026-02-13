import { OutcomeStatisticsProps } from './OutcomeStatistics.type';
import './OutcomeStatistics.css';
import Bar from "../common/Bar";
import { historyInfoProps } from '../TransactionHistory/TransactionHistory.type';

const historyInfo = [
  { id: 1, receiver: "Starbucks", type: "Food & Drink", date: "01 Feb 2026", amount: 15.50, icon: "coffee.png" },
  { id: 2, receiver: "Uber", type: "Transport", date: "01 Feb 2026", amount: 25.00, icon: "car.png" },
  { id: 3, receiver: "Amazon", type: "Shopping", date: "02 Feb 2026", amount: 120.00, icon: "bag.png" },
  { id: 4, receiver: "Netflix", type: "Entertainment", date: "02 Feb 2026", amount: 39.90, icon: "play.png" },
  { id: 5, receiver: "City Gym", type: "Health", date: "03 Feb 2026", amount: 90.00, icon: "gym.png" },
  { id: 6, receiver: "McDonalds", type: "Food & Drink", date: "03 Feb 2026", amount: 45.00, icon: "food.png" },
  { id: 7, receiver: "Metrô Rio", type: "Transport", date: "04 Feb 2026", amount: 6.90, icon: "train.png" },
  { id: 8, receiver: "Steam", type: "Entertainment", date: "04 Feb 2026", amount: 150.00, icon: "games.png" },
  { id: 9, receiver: "Droga Raia", type: "Health", date: "05 Feb 2026", amount: 32.50, icon: "health.png" },
  { id: 10, receiver: "Zara", type: "Shopping", date: "05 Feb 2026", amount: 250.00, icon: "clothes.png" },
  { id: 11, receiver: "Uber", type: "Transport", date: "06 Feb 2026", amount: 18.00, icon: "car.png" },
  { id: 12, receiver: "iFood", type: "Food & Drink", date: "06 Feb 2026", amount: 65.00, icon: "delivery.png" },
  { id: 13, receiver: "Spotify", type: "Entertainment", date: "07 Feb 2026", amount: 21.90, icon: "music.png" },
  { id: 14, receiver: "Apple Store", type: "Electronics", date: "07 Feb 2026", amount: 3500.00, icon: "apple.png" },
  { id: 15, receiver: "Supermercado Guanabara", type: "Shopping", date: "08 Feb 2026", amount: 450.00, icon: "cart.png" },
  { id: 16, receiver: "Uber", type: "Transport", date: "08 Feb 2026", amount: 12.00, icon: "car.png" },
  { id: 17, receiver: "Hortifruti", type: "Food & Drink", date: "09 Feb 2026", amount: 85.00, icon: "fruit.png" },
  { id: 18, receiver: "SmartFit", type: "Health", date: "09 Feb 2026", amount: 110.00, icon: "gym.png" },
  { id: 19, receiver: "Cinema", type: "Entertainment", date: "10 Feb 2026", amount: 40.00, icon: "movie.png" },
  { id: 20, receiver: "Uber", type: "Transport", date: "10 Feb 2026", amount: 35.00, icon: "car.png" },
  { id: 21, receiver: "Starbucks", type: "Food & Drink", date: "11 Feb 2026", amount: 18.00, icon: "coffee.png" },
  { id: 22, receiver: "Mercado Livre", type: "Shopping", date: "11 Feb 2026", amount: 200.00, icon: "box.png" },
  { id: 23, receiver: "99Pop", type: "Transport", date: "12 Feb 2026", amount: 15.00, icon: "car.png" },
  { id: 24, receiver: "Pharmacy", type: "Health", date: "12 Feb 2026", amount: 22.00, icon: "pill.png" },
  { id: 25, receiver: "Pizza Hut", type: "Food & Drink", date: "13 Feb 2026", amount: 55.00, icon: "pizza.png" },
  { id: 26, receiver: "Youtube Premium", type: "Entertainment", date: "13 Feb 2026", amount: 24.90, icon: "video.png" },
  { id: 27, receiver: "Uber", type: "Transport", date: "14 Feb 2026", amount: 20.00, icon: "car.png" },
  { id: 28, receiver: "Nike", type: "Shopping", date: "14 Feb 2026", amount: 400.00, icon: "shoes.png" },
  { id: 29, receiver: "Dentista", type: "Health", date: "15 Feb 2026", amount: 250.00, icon: "health.png" },
  { id: 30, receiver: "Bakery", type: "Food & Drink", date: "15 Feb 2026", amount: 12.00, icon: "bread.png" },
  { id: 31, receiver: "Uber", type: "Transport", date: "16 Feb 2026", amount: 28.00, icon: "car.png" },
  { id: 32, receiver: "Adobe Creative Cloud", type: "Electronics", date: "16 Feb 2026", amount: 120.00, icon: "software.png" },
  { id: 33, receiver: "Steam", type: "Entertainment", date: "17 Feb 2026", amount: 30.00, icon: "games.png" },
  { id: 34, receiver: "Sushi Bar", type: "Food & Drink", date: "17 Feb 2026", amount: 95.00, icon: "sushi.png" },
  { id: 35, receiver: "Uber", type: "Transport", date: "18 Feb 2026", amount: 10.00, icon: "car.png" },
  { id: 36, receiver: "Amazon", type: "Shopping", date: "18 Feb 2026", amount: 60.00, icon: "bag.png" },
  { id: 37, receiver: "Exame de Sangue", type: "Health", date: "19 Feb 2026", amount: 80.00, icon: "health.png" },
  { id: 38, receiver: "Pet Shop", type: "Shopping", date: "19 Feb 2026", amount: 130.00, icon: "dog.png" },
  { id: 39, receiver: "Burger King", type: "Food & Drink", date: "20 Feb 2026", amount: 40.00, icon: "burger.png" },
  { id: 40, receiver: "Uber", type: "Transport", date: "20 Feb 2026", amount: 22.00, icon: "car.png" }
];

const CATEGORY_COLORS: Record<string, string> = {
  "Food & Drink": "#FF9500", 
  "Transport": "#34C759",    
  "Shopping": "#AF52DE",     
  "Entertainment": "#5856D6", 
  "Health": "#FF3B30",        
  "Electronics": "#007AFF",   
  "default": "#8E8E93"        
};
        
const Statistic = ({data} : {data: historyInfoProps[]}) => {

    const statistcs = data.reduce<Record<string, number>>((acc, item) => {
        const category = item.type;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {})

    const totalItems =  data.length;
''
    return(
       <>
        {Object.keys(statistcs).map((categoryName) => {
            const count = statistcs[categoryName];
            const percentage = Math.round(count/totalItems * 100);

            const barColor = CATEGORY_COLORS[categoryName] || CATEGORY_COLORS.default;

            return (
                <div className="statistic" key={categoryName}>
                    <div className="statistic__group">
                        <Bar percentage={percentage} color={barColor}/>
                        <p className="statistic__label">{categoryName}</p>
                    </div>  
                    <p className="statistic__percentage">{`${percentage}%`}</p>
                </div>
            )
        })}
       </>
    )
}

const OutcomeStatistics = () => {
    return(
        <div className="outcome-statistics">
                <p className="outcome-statistics__title">Outcome Statistics</p>
                <div className="outcome-statistics__container">
                    <Statistic data={historyInfo}/>      
                </div> 
        </div>
    )
}

export default OutcomeStatistics;