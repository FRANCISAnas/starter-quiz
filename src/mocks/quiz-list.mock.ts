import { Quiz, Theme } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Leonel Messy joue avec le club de ...',
    answers: [
        {
            value: 'Bercelon',
            isCorrect: true
        },
        {
            value: 'Manshester',
            isCorrect: false
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [

    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: Theme.Acteur,
        questions: [QUESTION_ACTOR],
        date: new Date()
    },
    {
        name: 'Les Acteurs',
        theme: Theme.Les_Sports,
        questions: [QUESTION_SPORT],        
        date: new Date()

    }
];
