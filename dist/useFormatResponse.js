"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormatResponse = void 0;
const useFormatResponse = (config) => ({
    after: (handler) => __awaiter(void 0, void 0, void 0, function* () {
        if (!handler.response)
            handler.response = {};
        if (!handler.response.statusCode) {
            const body = JSON.stringify(handler.response);
            handler.response = {};
            handler.response.statusCode = 200;
            handler.response.headers = Object.assign(Object.assign(Object.assign({}, (handler.response.headers || {})), (handler.context.headers || {})), { 'Content-Type': 'application/json' });
            if (config && config.cors) {
                if (config.cors.credentials)
                    handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials;
                if (config.cors.origin)
                    handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin;
            }
            handler.response.body = body;
        }
    })
});
exports.useFormatResponse = useFormatResponse;
