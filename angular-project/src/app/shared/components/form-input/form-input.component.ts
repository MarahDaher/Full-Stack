import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input()
  label!: string;

  @Input()
  errorMessage!: string;

  @Input()
  type!: 'text' | 'email' | 'password';

  @Input() control!: AbstractControl;

  get controlAsFormControl() {
    return this.control as FormControl;
  }
}
