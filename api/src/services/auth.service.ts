import { Response } from "express";

const user = {
    email: "andrei.giura@1and1.ro",
    password: "123456",
    personalData: [
        {key: "firstName", value: "Andrei"},
        {key: "lastName", value: "Giura"},
        {key: "email", value: "andrei.giura@1and1.ro"}
    ]
}


export function login(req: any, res: Response, next: Function) {
    if(!req.body.email || req.body.email !== user.email) {
        res.end();
    }

    if(!req.body.password || req.body.password !== user.password) {
        res.end();
    }

    next();
}

export function getPersonalData(req: any, res: Response) {

    if(req.session.isAuthenticated) {
        return user.personalData;
    }else{
        return [];
    }

}