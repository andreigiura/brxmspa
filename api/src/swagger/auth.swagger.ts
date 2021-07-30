export const login = {
    tags: ['Auth'],
    description: "Authentication",
    operationId: 'auth/login', 
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
        }
    },
    "parameters": [
        {
          "in": "body",
          "name": "body",
          "required": true,
          "schema": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string",
                example: "andrei.giura@1and1.ro"
              },
              "password": {
                "type": "string",
                example: "123456"
              },
            },
            "required": ["email", "password"]
          }
        }
      ]
}

export const getPersonalData = {
    tags: ['Auth'],
    description: "Get the user data",
    operationId: 'auth/getPersonalData',
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Get personal data",
      }
    }
  }
  