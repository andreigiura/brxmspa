import * as express from 'express'
import { Request, Response } from 'express'
import { getInsurancePrices } from '../services/insurance.provider'
import IControllerBase from '../interfaces/IControllerBase.interface'


class CompareController implements IControllerBase {
    private path = '/compare'
    private router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(`${this.path}/package`, this.getInsurancePackage);
        this.router.post(`${this.path}/package`, this.selectInsurancePackage);
    }

    private getInsurancePackage(req: any, res: Response) {
        res.json({
            "actionType": "updateModel",
            "data": req.session.insurancePrices[req.query.packageId]
        })
    }

    private selectInsurancePackage(req: any, res: Response) {
        req.session.selectedInsurance = req.body.productId;
        let url = "inslogin";
        if(req.session.isAuthenticated) 
            url = 'personaldata';
        res.json({
            "actionType": "navigateTo",
            "data": {
                url
            }
        })

    }
}

export default CompareController