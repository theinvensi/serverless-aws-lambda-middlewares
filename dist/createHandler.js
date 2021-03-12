"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHandler = void 0;
const core_1 = __importDefault(require("@middy/core"));
const http_cors_1 = __importDefault(require("@middy/http-cors"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const _1 = require(".");
const createHandler = (func) => core_1.default(func)
    .use(http_cors_1.default({ credentials: true, origin: `*`, headers: `*` }))
    .use(http_json_body_parser_1.default())
    .use(_1.useFormatResponse)
    .use(_1.useFormatError);
exports.createHandler = createHandler;
