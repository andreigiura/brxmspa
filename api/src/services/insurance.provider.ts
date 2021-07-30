import { Response } from "express";


export function getInsurancePrices(req: any, res: Response) {

    req.session.insurancePrices = {
        packageS: {
            teaserData: {
                teaserPrice: 5
              }
        },

        packageM: {
            teaserData: {
                teaserPrice: 10
              }
        },

        packageL: {
            teaserData: {
                teaserPrice: 15
              }
        }
    }
    req.session.insurancePrices.packageS.teaserData.teaserPrice += (2021 - parseInt(req.session.birthday.year))/10 * 10;
    req.session.insurancePrices.packageM.teaserData.teaserPrice += (2021 - parseInt(req.session.birthday.year))/10 * 10;
    req.session.insurancePrices.packageL.teaserData.teaserPrice += (2021 - parseInt(req.session.birthday.year))/10 * 10;
}