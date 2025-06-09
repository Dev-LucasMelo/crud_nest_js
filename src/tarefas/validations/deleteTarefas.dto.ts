import { IsDefined, IsNotEmpty, IsInt } from "class-validator";

export class deleteTarefasDto {
    @IsDefined({ message: "o id deve ser um campo obrigatório" })
    @IsNotEmpty({ message: "O id não pode ser vazio" })
    @IsInt({ message: "O id deve ser um número" })
    id: number
}