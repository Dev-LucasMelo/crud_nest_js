import { IsString, IsDefined, IsNotEmpty, IsOptional } from "class-validator";
export class createTarefasDto {

    @IsDefined({message: "O Campo nome é obrigatório"})
    @IsNotEmpty({message: "O campo nome não pode ser vazio"})
    @IsString({message: "O campo nome não deve ser númerico"})
    nome: string;
    
    @IsString({message: "O campo descricao não deve ser númerico"})
    @IsDefined({message: "O Campo descricao é obrigatório"})
    descricao: string;

    @IsDefined({message: "O campo user_id é obrigatório"})
    @IsNotEmpty({message: "O campo user_id não pode ser vazio"})
    user_id: number

    @IsOptional()
    realizada: boolean;

}