import * as express from 'express'
import { Request, Response } from 'express'
import { getInsurancePrices } from '../services/insurance.provider'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { login, getPersonalData as authPersonalData} from '../services/auth.service'


class AuthController implements IControllerBase {
    private path = '/auth'
    private router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.post(`${this.path}/login`, login, this.login);
        this.router.get(`${this.path}/personalData`, this.getPersonalData);

    }

    private login(req: any, res: Response) {
        req.session.isAuthenticated = true;
        res.json({
            "actionType": "navigateTo",
            "data": {
                url: '/personaldata'
            }
        })  
    }

    private getPersonalData(req: any, res: Response) {
        console.log();
        
        res.json({
            "actionType": "prefillForm",
            "data": authPersonalData(req, res)
          }) 
    }

}

export default AuthController