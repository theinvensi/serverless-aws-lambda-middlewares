import middy from '@middy/core'
import { APIGatewayProxyEvent } from 'aws-lambda'
import httpJsonBodyParser from '@middy/http-json-body-parser'

import { useFormatResponse, useFormatError } from '.'

type Handler = (event: APIGatewayProxyEvent, context: any) => any

export interface Config {
	cors?: {
		origin?: string,
		credentials?: boolean
	}
}

export const createHandler = (func: Handler, config?: Config) => middy(func)
	.use(httpJsonBodyParser())
	.use(useFormatResponse(config))
	.use(useFormatError)