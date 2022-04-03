import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    imports: [        
        ClientsModule.register([
            {
                name: 'MATH_SERVICE',
                transport: Transport.TCP,
                options: {
    port: 8800,
    host: '127.0.0.1'
  }
            },
        ]),
    ],
    providers: [UsersService, UsersResolver]
})
export class UsersModule{}