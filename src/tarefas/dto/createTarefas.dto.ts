import { IsString, IsBoolean, IsOptional } from "class-validator";

export class createTarefasDto {
    @IsString()
    nome: string;

    @IsOptional()
    @IsString()
    descricao: string;

    @IsBoolean()
    realizada: boolean;
}