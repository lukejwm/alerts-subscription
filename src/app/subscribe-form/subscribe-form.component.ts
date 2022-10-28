import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  formData: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formData = formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      comment: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  onSubmit(formValues: any): void {
    console.log(formValues)
  }
}
