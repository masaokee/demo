import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
    @Get()
    async getData(): Promise<object[]> {
        try {
            const result = await this.userService.getAll();
            return result;
            // return
        } catch (error) {
            console.log("error :", error)
        }
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<object> {
        try {
            const result = await this.userService.getData(id);
            return result
        } catch (error) {
            console.log("error :", error)
        }
    }

    @Post()
    async insertData(@Body() body: object) {
        try {
            const result = await this.userService.addData(body)
            return result
        } catch (error) {
            console.log("error :", error)
        }
    }

    @Put(':id')
    async update(@Body() body: object, @Param('id') id: number) {
        try {
            const results = await this.userService.updateData(id,body)
            return results
        } catch (error) {
            console.log("err:", error)
        }
    }

}
