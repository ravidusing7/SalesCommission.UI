import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CorrelationIdService } from '../../../core/services/correlationId.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router, private toastr: ToastrService,
    private correlationIdService: CorrelationIdService
  ) {

    this.loginForm = this.fb.group({

      email: [
        '',

        [Validators.required,
        Validators.email]
      ],

      password: [
        '',
        Validators.required
      ],

      rememberMe: [
        false
      ]

    });

  }

  togglePassword() {
    this.showPassword =
      !this.showPassword;
  }
  onLogin() {

    if (this.loginForm.invalid)
      return;

    const request = this.loginForm.value;

    this.authService.login(request)
      .subscribe({

        next: (response) => {

          console.log(response);

          // Store JWT Token

          localStorage.setItem(
            'accessToken',
            response.accessToken);

          localStorage.setItem(
            'refreshToken',
            response.refreshToken);

          // Generate correlation ID
          this.correlationIdService.generate();

          // Navigate

          this.router.navigate(
            ['/dashboard']);

        },

        error: (error) => {

          console.log(error);

          if (error.status === 401) {

            this.toastr.error(
              'Invalid username or password.',
              'Unauthorized'
            );

          }
          else {

            this.toastr.error(
              'Something went wrong. Please try again.',
              'Error'
            );
          }
        }

      });

  }


}
