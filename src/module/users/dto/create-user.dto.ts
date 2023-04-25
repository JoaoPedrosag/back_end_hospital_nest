import { IsDate, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly name: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly role: string;
    @IsString()
    readonly status: string;
    @IsDate()
    readonly created_at: Date;
   

}
