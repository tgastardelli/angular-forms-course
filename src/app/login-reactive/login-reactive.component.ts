import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

  }


  form = this.fb.group({
    email: this.fb.nonNullable.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  get email(): FormControl {
    return this.form.controls['email'];
  }

  get password(): FormControl {
    return this.form.controls['password'];
  }

  public reset(): void {
    this.form.reset();

    console.log(this.form.value);
  }



}
