import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    public data = [
        {
            id: 1,
            name: 'azha'
        },
        {
            id: 2,
            name: 'wa'
        },
        {
            id: 3,
            name: 'sunai'
        },
        {
            id: 4,
            name: 'mang'
        }
    ]
    constructor() {
    }

    async getAll(): Promise<object[]> {
        try {
            const result = this.data;
            return result
        } catch (error) {
            console.log("error :", error)
        }
    }


    async getData(id: number): Promise<object> {
        try {
            const result = this.data.find(val => val.id == id)
            return result
        } catch (error) {
            console.log("error :", error)
        }
    }

    async addData(body): Promise<object> {
        try {
            console.log("body:", body)

            this.data.push(body)
            return { status: 200, results: this.data }
        } catch (error) {
            console.log("error :", error)
        }
    }

    async updateData(id:number,body): Promise<object> {
        try {
            this.data = this.data.map(val=>{
                if(val.id==id){
                    val.id = body.id,
                    val.name = body.name
                }
                return val
            })
           return {status:200,results:this.data}
        } catch (error) {
            console.log("error :", error)
            return {status:400}
        }
    }

}
