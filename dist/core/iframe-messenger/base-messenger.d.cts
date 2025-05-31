import { MessengerPayload } from './types.cjs';
import { OnMessageType } from '../../types/iframe-ig-data-messenger.cjs';

declare abstract class BaseMessenger<T extends MessengerPayload> {
    protected allowedDataTypes: string[];
    protected readonly parentOrigin: string;
    protected onMessage: OnMessageType<T>;
    private readonly _listener;
    protected constructor(parentOrigin: string, onMessage: OnMessageType<T>, allowedDataTypes: string[]);
    private setupListener;
    dispose(): void;
    abstract postMessage(message: T): void;
}

export { BaseMessenger };
