import middy from '@middy/core';
import { APIGatewayProxyEvent } from 'aws-lambda';
declare type Handler = (event: APIGatewayProxyEvent, context: any) => any;
export declare const createHandler: (func: Handler) => middy.Middy<APIGatewayProxyEvent, unknown, import("aws-lambda").Context>;
export {};
