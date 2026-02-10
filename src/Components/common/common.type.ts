import { ReactNode } from "react";

export interface BarProps {
    percentage: number;
    color: string;
}

export interface SectionContainerProps {
    title: string; 
    style?: React.CSSProperties; 
    children: ReactNode;
}