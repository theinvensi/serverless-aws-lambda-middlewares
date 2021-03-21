import middy from '@middy/core'
import { APIGatewayProxyEvent } from 'aws-lambda'
import cors from '@middy/http-cors'
import httpJsonBodyParser from '@middy/http-json-body-parser'

import { useFormatResponse, useFormatError } from '.'

type Handler = (event: APIGatewayProxyEvent, context: any) => any

interface Config {
	origin: string,
	credentials: boolean,
	headers: string
}

export const createHandler = (func: Handler, config?: Config) => middy(func)
	.use(cors({ credentials: config?.credentials || true, origin: config?.origin || `*`, headers: config?.headers || `*` }))
	.use(httpJsonBodyParser())
	.use(useFormatResponse)
	.use(useFormatError)