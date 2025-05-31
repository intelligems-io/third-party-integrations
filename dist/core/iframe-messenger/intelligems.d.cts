import { BaseMessenger } from './base-messenger.cjs';
import { IframeIgDataMessengerType, OnMessageType } from '../../types/iframe-ig-data-messenger.cjs';
import './types.cjs';

declare abstract class IntelligemsToIframeMessenger<T extends IframeIgDataMessengerType> extends BaseMessenger<T> {
    protected iframe: HTMLIFrameElement | null;
    protected readonly targetOrigin: string;
    protected constructor(frameQuerySelector: string, targetOrigin: string, allowedDataTypes: string[], onMessage: OnMessageType<T>);
    postMessage(message: T): void;
}

export { IntelligemsToIframeMessenger };
