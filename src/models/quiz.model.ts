import { Question } from './question.model';
export enum Theme {
    Acteur = 'Acteur',
    Les_Sports = 'Les Sports'
}
export interface Quiz {
    name: string;
    theme: Theme;
    questions: Question[];
    date: Date;
    id: string;
}
