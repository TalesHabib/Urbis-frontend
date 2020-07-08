import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../app/core/LocalStorage/localStorage.service'
import { LoginHttpService } from './services/login-http.service';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  message = "Não possui cadastro?";
  constructor(private formbuilder: FormBuilder, private localStorageService: LocalStorageService, private loginHttpService: LoginHttpService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  login(): void {
    this.loginHttpService.login(this.formData).subscribe(console.log)
  }

  private get formData():LoginModel {
    return this.form.getRawValue() as LoginModel
  }

  private buildForm() :void {
    this.form = this.formbuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }
}
