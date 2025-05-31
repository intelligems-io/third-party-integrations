import { BaseMessenger } from './base-messenger.cjs';
import { IframeIgDataMessengerType, OnMessageType } from '../../types/iframe-ig-data-messenger.cjs';
import './types.cjs';

declare abstract class IframeToIntelligemsMessenger<T extends IframeIgDataMessengerType = IframeIgDataMessengerType> extends BaseMessenger<T> {
    protected constructor(parentOrigin: string, onMessage: OnMessageType<T>, allowedDataTypes: string[]);
    postMessage(message: T): void;
}

export { IframeToIntelligemsMessenger };
