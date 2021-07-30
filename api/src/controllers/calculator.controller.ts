import * as express from 'express'
import { Request, Response } from 'express'
import { getInsurancePrices } from '../services/insurance.provider'
import IControllerBase from '../interfaces/IControllerBase.interface'


class ClaculatorController implements IControllerBase {
    private path = '/calculator'
    private router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.post(`${this.path}/birthday`, this.saveBirthday);
        this.router.get(`${this.path}/birthday`, this.getBirthday);

    }

    private saveBirthday(req: any, res: Response) {
        const sess = req.session;
        sess.birthday = req.body;
        
        getInsurancePrices(req, res);

        res.json({
            "actionType": "navigateTo",
            "data": {
                url: '/compare'
            }
        })
    }

    private getBirthday (req: any, res: Response) {
        if(req.session.birthday) {

            let response = {
                "actionType": "prefillForm",
                "data": []
              }
            for(let key in req.session.birthday) {
                response.data.push({key: key, value: req.session.birthday[key]})
            }
            res.json(response)
        }else {
            res.send({success: "ok"});
        }
        
    }

}

export default ClaculatorController