import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[LoginComponent,SignupComponent],
    imports: [CommonModule, FormsModule,RouterModule]
})

export class AuthModule{}