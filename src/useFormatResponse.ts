import { Config } from './createHandler'

export const useFormatResponse = (config?: Config) => ({
	after: async (handler: any) => {
		if (!handler.response) handler.response = {}
		if (!handler.response.statusCode) {
			const body = JSON.stringify(handler.response)
			handler.response = {}
			handler.response.statusCode = 200
			handler.response.headers = {
				...(handler.response.headers || {}),
				...(handler.context.headers || {}),
				'Content-Type': 'application/json'
			}
			if (config && config.cors) {
				if (config.cors.credentials) handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials
				if (config.cors.origin) handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin
			}
			handler.response.body = body
		}
	}
})