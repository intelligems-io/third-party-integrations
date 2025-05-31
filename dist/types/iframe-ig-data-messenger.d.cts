import { MessengerPayload } from '../core/iframe-messenger/types.cjs';

type IframeIgDataMessengerType = MessengerPayload<{
    path: string;
    payload?: object;
}>;
type OnMessageType<T extends object = object, M = any> = (event: T, messenger: M) => void;

export type { IframeIgDataMessengerType, OnMessageType };
