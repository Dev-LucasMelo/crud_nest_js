import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDto } from './validations/login.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService { 
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}
    
    async login(dados: loginDto) {
        // autenticação
        const {name, password} = dados

        let user = await this.userService.findUnique(name)

        if(!user || !(await compare(password, user.password))){
            throw new UnauthorizedException('Credenciais inválidas');
        }

        //autorização
        const payload = {id: user.id, name: user.name}

        //jwt 
        return {
            token: await this.jwtService.signAsync(payload)
        }
    }
}
