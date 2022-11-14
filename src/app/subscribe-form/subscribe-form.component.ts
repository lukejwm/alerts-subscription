import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  formData: FormGroup;
  country: any;
  projectList: any;

  constructor(formBuilder: FormBuilder, private alertService: AlertsService) {
    this.formData = formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      comment: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
    this.alertService.GetCountryList().subscribe((data) => {
      console.log(data);
      this.country = data;
    });

    this.alertService.GetProjectsList().subscribe((data) => {
      console.log(data);
      this.projectList = data;
    });
    // this.alertService.GetCountry().subscribe((data) => {
    //   console.log(data);
    //   this.character = data;
    // })
  }

  onSubmit(formValues: any): void {
    console.log(formValues)
  }
}
