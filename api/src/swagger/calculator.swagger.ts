export const saveBirthday = {
    tags: ['Claculator'],
    description: "Saves the birthday on session and responds with navigate to compare page",
    operationId: 'calculator/saveBirthday',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
            description: "Saves the birthday on session and responds with navigate to compare page",
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
              "day": {
                "type": "string",
                example: "10"
              },
              "month": {
                "type": "string",
                example: "10"
              },
              "year": {
                "type": "string",
                example: "2000"
              }
            },
            "required": ["day", "month", "year"]
          }
        }
      ]
}


export const getBirthday = {
    tags: ['Claculator'],
    description: "Gets the birthday from session",
    operationId: 'calculator/getBirthday',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        "200": {
            description: "Gets the birthday from session and responds with prefill form action",
        }
    }
} 