import { IsEmail, IsNotEmpty, Matches } from "class-validator";

export class UserRegisterDto {
  firstName: string
  lastName: string

  @IsNotEmpty({
    message: 'Email is required'
  })
  @IsEmail()
  email: string

  // Passwords will contain at least 1 upper case letter
  // Passwords will contain at least 1 lower case letter
  // Passwords will contain at least 1 number or special character
  // There is no length validation (min, max) in this regex!
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is weak.'
  })
  password: string
}