export const getInsurancePackage = {
  tags: ['Compare'],
  description: "Get the insurance package",
  operationId: 'compare/getInsurancePackage',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    "200": {
      description: "Get insurance package",
    }
  },
  parameters: [
    { name: "packageId", required: true, in: "query" }
  ]
}

export const selectPackage = {
  tags: ['Compare'],
  description: "Selected the package",
  operationId: 'compare/selectInsurancePackage',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    "200": {
      description: "Selected the package",
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
          "packageId": {
            "type": "string",
            example: "10"
          },
          "required": ["packageId"]
        }
      }
    }
  ]
}
