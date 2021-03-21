import { Config } from './createHandler';
export declare const useCORS: (config?: Config | undefined) => {
    after: (handler: any) => Promise<void>;
    onError: (handler: any) => Promise<void>;
};
