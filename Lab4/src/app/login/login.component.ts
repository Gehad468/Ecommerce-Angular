import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string='gehad@gmail.com'
  password:string=''
  handleSubmitForm(form :any)
  {
    console.log(form)
    console.log(form.value)

  }
}
