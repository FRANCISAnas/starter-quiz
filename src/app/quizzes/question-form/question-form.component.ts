import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Answer } from '../../../models/question.model';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  private questionForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.initialiseQuestionForm();
   }

  ngOnInit() {
  }

  private initialiseQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label:  [''],
      answer : this.formBuilder.array([])
    });
  }

  get Answers() {
    return this.questionForm.get('answers') as  FormArray;
  }

  /*AddAnswer(answer: Answer): void {
    this.formBuilder.array;
  }*/
}
