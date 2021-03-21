import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
declare type Handler = (event: APIGatewayProxyEvent, context: any) => any;
interface Config {
    origin?: string;
    credentials?: boolean;
    headers?: string;
}
export declare const createHandler: (func: Handler, config?: Config | undefined) => middy.Middy<APIGatewayProxyEvent, unknown, import("aws-lambda").Context>;
export {};
