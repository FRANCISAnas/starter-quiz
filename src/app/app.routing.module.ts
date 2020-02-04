import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';



const routes: Routes = [
    {path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
    {path: 'quiz-list' , component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent}
];

/*@Component({
    selector: 'router-outlet'
  })*/

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
