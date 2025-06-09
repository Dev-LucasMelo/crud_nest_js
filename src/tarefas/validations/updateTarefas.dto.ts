import {IsDefined, IsNotEmpty, IsInt } from "class-validator";

export class updateTarefasDto {

    @IsNotEmpty({message: "O id não pode ser vazio"})
    @IsDefined({message: "O id é obrigatório"})
    @IsInt({message: "O id deve ser um número"})
    id: number

    @IsNotEmpty({message: "O nome não pode ser vazio"})
    @IsDefined({message: "O nome é obrigatório"})
    nome: string

    @IsDefined({message: "O id é obrigatório"})
    descricao: string

}