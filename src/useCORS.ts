import { Config } from './createHandler'

export const useCORS = (config?: Config) => ({
	after: async (handler: any) => {
		handler.response = handler.response || {}
		handler.response.headers = handler.response.headers || {}
		if (config && config.cors) {
			if (config.cors.credentials) handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials
			if (config.cors.origin) handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin
		}
	},
	onError: async (handler: any) => {
		handler.response = handler.response || {}
		handler.response.headers = handler.response.headers || {}
		if (config && config.cors) {
			if (config.cors.credentials) handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials
			if (config.cors.origin) handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin
		}
	}
})