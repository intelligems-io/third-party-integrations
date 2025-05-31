import {MessengerPayload} from "@src/core/iframe-messenger/types";

export type IframeIgDataMessengerType = MessengerPayload<{ path: string; payload?: object }>;

export type OnMessageType<T extends object = object, M = any> = (event: T, messenger: M) => void;