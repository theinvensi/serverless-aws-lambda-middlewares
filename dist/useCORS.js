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
exports.useCORS = void 0;
const useCORS = (config) => ({
    after: (handler) => __awaiter(void 0, void 0, void 0, function* () {
        handler.response = handler.response || {};
        handler.response.headers = handler.response.headers || {};
        if (config && config.cors) {
            if (config.cors.credentials)
                handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials;
            if (config.cors.origin)
                handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin;
        }
    }),
    onError: (handler) => __awaiter(void 0, void 0, void 0, function* () {
        handler.response = handler.response || {};
        handler.response.headers = handler.response.headers || {};
        if (config && config.cors) {
            if (config.cors.credentials)
                handler.response.headers[`Access-Control-Allow-Credentials`] = config.cors.credentials;
            if (config.cors.origin)
                handler.response.headers[`Access-Control-Allow-Origin`] = config.cors.origin;
        }
    })
});
exports.useCORS = useCORS;
