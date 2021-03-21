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
exports.useFormatError = void 0;
exports.useFormatError = {
    onError: (handler) => __awaiter(void 0, void 0, void 0, function* () {
        handler.response = handler.response || {};
        if (handler.error.constructor.name === `Error`
            || handler.error.constructor.name === `String`) {
            handler.response.statusCode = 500;
            handler.response.body = `${handler.error}`;
        }
        else {
            handler.response.statusCode - handler.error.statusCode || 500;
            handler.response.body = `${handler.error.error || handler.error}`;
        }
    })
};
