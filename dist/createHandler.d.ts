import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
declare type Handler = (event: APIGatewayProxyEvent, context: any) => any;
export interface Config {
    cors?: {
        origin?: string;
        credentials?: string;
    };
}
export declare const createHandler: (func: Handler, config?: Config | undefined) => middy.Middy<APIGatewayProxyEvent, unknown, import("aws-lambda").Context>;
export {};
