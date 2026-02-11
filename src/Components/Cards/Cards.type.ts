export interface CardData {
    id: number;
    bankName: string;
    cardNumber: string;
    typeCard: string;
    name: string;
    deadline: string;
    weeklyLimit: number;
    weeklyUsed: number;
    currentBalance: number;
    income: number;
    outcome: number;
    color: string;
}

export interface CardsProps {
    cards: CardData[];
}