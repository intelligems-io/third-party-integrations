import {BaseMessenger} from "@src/core/iframe-messenger/base-messenger";
import {IframeIgDataMessengerType, OnMessageType} from "@src/types/iframe-ig-data-messenger";

export abstract class IntelligemsToIframeMessenger<
  T extends IframeIgDataMessengerType
> extends BaseMessenger<T> {
  protected iframe: HTMLIFrameElement | null;
  protected readonly targetOrigin: string;

  protected constructor(
    frameQuerySelector: string,
    targetOrigin: string,
    allowedDataTypes: string[],
    onMessage: OnMessageType<T>
  ) {
    super(targetOrigin, onMessage, allowedDataTypes);
    this.iframe = document.querySelector(frameQuerySelector) as HTMLIFrameElement | null;
    this.targetOrigin = targetOrigin;
    if (!this.iframe) {
      console.warn(`Iframe not found for selector: ${frameQuerySelector}`);
    }
  }

  public postMessage(message: T) {
    if (!this.iframe || !this.iframe.contentWindow) {
      console.warn("Iframe or its contentWindow is not available");
      return;
    }
    this.iframe.contentWindow.postMessage(message, this.targetOrigin);
  }
}
