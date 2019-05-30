/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from "@angular/forms";

  // Inner
  import { IdentityModel } from '../../models/identity.model';

  // Definition
  @Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
  })

/* Export */
  export class FormRegisterComponent implements OnInit, OnChanges {

    /* 
    Config.
    */
      // Input/Output
      @Input() resetFormData: Boolean
      @Output() sendFormData = new EventEmitter();

      // Declaration
      public form: FormGroup;
      public formData: IdentityModel;
      public passwordError: Boolean = false;

      // Instanciation
      constructor(
        private FormBuilder: FormBuilder
      ) { };
    //


    /* 
    Methods
    */
      // Reset form
      private resetForm = () => {
        // Set validator
        this.form = this.FormBuilder.group({
          firstname: [undefined, Validators.required],
          lastname: [undefined, Validators.required],
          email: [undefined, Validators.required],
          password: [undefined, Validators.required],
          securePassword: [undefined, Validators.required]
        });

        // Set form data object
        this.formData = {
          firstname: undefined,
          lastname: undefined,
          email: undefined,
          password: undefined,
          securePassword: undefined
        };
      };

      // Submit form
      public submitForm = () => {
        // Check passwords
        if(this.form.value.password !== this.form.value.securePassword){ this.passwordError = true } 
        else{
          // Set login data
          this.formData = {
            firstname: this.form.value.firstname,
            lastname: this.form.value.lastname,
            email: this.form.value.email,
            password: this.form.value.password,
          }

          // Use event emmiter
          this.sendFormData.emit(this.formData);
        };
      };
    //

    /* 
    Hooks
    */
      ngOnInit() {
        this.resetForm();
      };

      ngOnChanges(changes){
        // Reset form data when user is registed
        if( !changes.resetFormData.firstChange && changes.resetFormData.currentValue ){
          this.resetForm();
        };
      };
    //
  };
//