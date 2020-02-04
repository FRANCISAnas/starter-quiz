import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  private quiz: Quiz;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
  ) {}

  ngOnInit() {
    this.idFromURL();
  }

  private idFromURL(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.quizzes$
      .subscribe(quizes => this.quiz = quizes[id]);
  }
}
