import { ReactNode } from "react";

export interface GoalsContainerProps {
  goals: GoalsProps[];
}

export interface GoalsProps {
    id: number;
    cost: string;
    date: string; 
    img: string;
    name: string;
}