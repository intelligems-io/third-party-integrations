import {BaseMessenger} from "@src/core/iframe-messenger/base-messenger";
import {IframeIgDataMessengerType, OnMessageType} from "@src/types/iframe-ig-data-messenger";

export abstract class IframeToIntelligemsMessenger<
  T extends IframeIgDataMessengerType = IframeIgDataMessengerType,
> extends BaseMessenger<T> {
  
  protected constructor(parentOrigin: string, onMessage: OnMessageType<T>, allowedDataTypes: string[]) {
    super(parentOrigin, onMessage, allowedDataTypes);
  }

  public postMessage(message: T) {
    window.parent.postMessage(message, this.parentOrigin);
  }
}
