import middy from '@middy/core'
import { APIGatewayProxyEvent } from 'aws-lambda'
import cors from '@middy/http-cors'
import httpJsonBodyParser from '@middy/http-json-body-parser'

import { useFormatResponse, useFormatError } from '.'

type Handler = (event: APIGatewayProxyEvent, context: any) => any

export const createHandler = (func: Handler) => middy(func)
	.use(cors({ credentials: true, origin: `*`, headers: `*` }))
	.use(httpJsonBodyParser())
	.use(useFormatResponse)
	.use(useFormatError)