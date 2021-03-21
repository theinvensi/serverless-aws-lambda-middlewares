export const useFormatError = {
	onError: async (handler: any) => {
		handler.response = handler.response || {}
		if (
			handler.error.constructor.name === `Error`
			|| handler.error.constructor.name === `String`
		) {
			handler.response.statusCode = 500
			handler.response.body = `${handler.error}`
		} else {
			handler.response.statusCode - handler.error.statusCode || 500
			handler.response.body = `${handler.error.error || handler.error}`
		}
	}
}