import middy from '@middy/core'
import { APIGatewayProxyEvent } from 'aws-lambda'
import httpJsonBodyParser from '@middy/http-json-body-parser'

import { useFormatResponse, useCORS, useFormatError } from '.'

type Handler = (event: APIGatewayProxyEvent, context: any) => any

export interface Config {
	cors?: {
		origin?: string,
		credentials?: string
	}
}

export const createHandler = (func: Handler, config?: Config) => middy(func)
	.use(useCORS(config))
	.use(httpJsonBodyParser())
	.use(useFormatResponse)
	.use(useFormatError)