import { Config } from './createHandler';
export declare const useFormatResponse: (config?: Config | undefined) => {
    after: (handler: any) => Promise<void>;
};
