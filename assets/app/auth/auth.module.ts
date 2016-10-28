import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {  CommonModule } from '@angular/common';

import { authRouting } from './auth.routing';

import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        LogoutComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        authRouting
    ]
})

export class AuthModule {

}