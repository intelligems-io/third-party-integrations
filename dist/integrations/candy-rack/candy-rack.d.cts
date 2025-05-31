import { IframeToIntelligemsMessenger } from '../../core/iframe-messenger/iframe.cjs';
import { OnMessageType } from '../../types/iframe-ig-data-messenger.cjs';
import '../../core/iframe-messenger/base-messenger.cjs';
import '../../core/iframe-messenger/types.cjs';

declare class CandyRackToIntelligemsMessenger extends IframeToIntelligemsMessenger {
    constructor(parentOrigin: string, onMessage: OnMessageType);
}

export { CandyRackToIntelligemsMessenger };
