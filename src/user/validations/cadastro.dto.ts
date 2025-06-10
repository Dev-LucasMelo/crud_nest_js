import { IsDefined, IsNotEmpty, Length } from "class-validator"

export class CadastroUserDto {
    @IsDefined({ message: "O campo name é obrigatório" })
    @IsNotEmpty({ message: "O campo name não pode ser vazio" })
    name: string

    @Length(8, 10, { message: "O campo password deve conter entre 8 e 10 caracteres" })
    @IsDefined({ message: "O campo password é obrigatório" })
    @IsNotEmpty({ message: "O campo password não pode ser vazio" })
    password: string
}