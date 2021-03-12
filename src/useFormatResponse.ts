export const useFormatResponse = {
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
			handler.response.body = body
		}
	}
}