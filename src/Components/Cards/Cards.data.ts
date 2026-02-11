import { CardData } from "./Cards.type";

export const userCards: CardData[] = [
  {
    id: 1,
    bankName: 'Nubank',
    typeCard: 'credit',
    cardNumber: '5105 **** **** 4567',
    name: 'João Araújo',
    deadline: '06/32',
    weeklyLimit: 4000,
    weeklyUsed: 3500.6,
    currentBalance: 2000.00,
    income: 2500.00,
    outcome: 500.00,
    color: '#8A05BE'
  },
  {
    id: 2,
    bankName: 'Santander Select',
    typeCard: 'credit',
    cardNumber: '4532 **** **** 1234',
    name: 'João Araújo',
    deadline: '11/30',
    weeklyLimit: 2500,
    weeklyUsed: 1200.00,
    currentBalance: 1045550.50,
    income: 5200.00,
    outcome: 1800.00,
    color: '#CC0000'
  },
  {
    id: 3,
    bankName: 'Mercado Pago',
    typeCard: 'debit',
    cardNumber: '6034 **** **** 8890',
    name: 'João Araújo',
    deadline: '02/28',
    weeklyLimit: 1000,
    weeklyUsed: 850.25,
    currentBalance: 450.10,
    income: 1200.00,
    outcome: 1450.00,
    color: '#000'
  },
  {
    id: 4,
    bankName: 'Inter',
    typeCard: 'credit',
    cardNumber: '5411 **** **** 9921',
    name: 'João Araújo',
    deadline: '08/29',
    weeklyLimit: 6000,
    weeklyUsed: 500.00,
    currentBalance: 1520.00,
    income: 3000.00,
    outcome: 2500.00,
    color: '#FF7A00'
  }
];