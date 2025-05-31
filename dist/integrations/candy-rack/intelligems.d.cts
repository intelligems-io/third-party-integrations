import { IntelligemsToIframeMessenger } from '../../core/iframe-messenger/intelligems.cjs';
import { IframeIgDataMessengerType } from '../../types/iframe-ig-data-messenger.cjs';
import '../../core/iframe-messenger/base-messenger.cjs';
import '../../core/iframe-messenger/types.cjs';

declare class IntelligemsToCandyRackMessenger extends IntelligemsToIframeMessenger<IframeIgDataMessengerType> {
    constructor(frameQuerySelector: string, targetOrigin: string);
    private _onMessage;
}

export { IntelligemsToCandyRackMessenger };
