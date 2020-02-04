import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  private urlAPI = ' https://api.myjson.com/bins/13ajhy';  // URL to web api
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(private http: HttpClient) {
    this.quizzes$.subscribe();
    this.setQuizzesFromUrl(this.urlAPI);
  }

  addQuiz(quiz: Quiz): void {
    const stringId = this.quizzes.length + 1;
    quiz.id = stringId.toString();
    this.quizzes.push(quiz);

    this.quizzes$.next(this.quizzes);




    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }


  deleteQuiz(quiz: Quiz): void {
    let i: number;
    i = this.quizzes.indexOf(quiz);
    this.quizzes.splice(i, 1);
    this.quizzes$.next(this.quizzes);
    console.log('deleted!');
  }

  setQuizzesFromUrl(url: string): void {
    const mySubscription = this.http.get< { quizzes: Quiz[ ] }>(url).subscribe(
      (quizes) => {
        this.quizzes = quizes.quizzes;
        this.quizzes$.next(this.quizzes);
    });
  }
}
