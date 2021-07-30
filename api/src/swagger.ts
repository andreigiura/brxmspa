
import { getInsurancePackage, selectPackage } from './swagger/compare.swagger';
import { getBirthday, saveBirthday } from './swagger/calculator.swagger';
import { login, getPersonalData } from './swagger/auth.swagger';

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'your description here',
        termsOfService: '',
        contact: {
            name: 'Tran Son hoang',
            email: 'son.hoang01@gmail.com',
            url: 'https://hoangtran.co'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },

    servers: [
        {
            url: 'http://localhost:5000/v1',
            description: 'Local server'
        }
    ],

    paths: {
        "/calculator/birthday": {
            "post": saveBirthday,
            "get": getBirthday,
            
        },

        "/compare/package": {
            "get": getInsurancePackage,
            "post": selectPackage
            
        },

        "/auth/login": {
            "post": login
        },

        "/auth/personalData": {
            "get": getPersonalData
        }
        
    }
}

export default swaggerDocument;