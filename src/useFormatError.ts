export const useFormatError = {
	onError: async (handler: any) => {
		if (
			handler.error.constructor.name === `Error`
			|| handler.error.constructor.name === `String`
		) {
			handler.response = { statusCode: 500, body: `${handler.error}` } as any
		} else {
			handler.response = { statusCode: (handler.error as any).statusCode || 500, body: `${(handler.error as any).error}` } as any
		}
	}
}