import { Inject, Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/input/create-user.input";
import { User } from "./models/user";

import {v4 as uuidv4} from "uuid";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { GetUserArgs } from "./dto/args/get-user.args";
import { DeleteUserInput } from "./dto/input/delete-user.input";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class UsersService {
    private users: User[] = [];

    constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy){}

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData
        }

        this.users.push(user);
        return user; 
    }
    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(u => u.userId === updateUserData.userId);
        Object.assign(user, updateUserData);
        return user;
    }
    public getUser(getUserArg: GetUserArgs): User {
        return this.users.find(u => u.userId === getUserArg.userId);
    }
    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        // const pattern = 'sum';
        // const payload = [1, 2, 3];
        // let x = this.client.emit<number>(pattern, payload)
        // console.log('x', x)
        // let y = this.client.send({ cmd: 'get_analytics' }, {});
        // console.log('y', y)
        return getUsersArgs.userIds.map(userId => this.getUser({ userId }));
    }
    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);
        const user = this.users[userIndex];
        this.users.splice(userIndex);
        return user;
    }
}