import {IntelligemsToIframeMessenger} from "@src/core/iframe-messenger/intelligems";
import {IframeIgDataMessengerType} from "@src/types/iframe-ig-data-messenger";

export class IntelligemsToCandyRackMessenger extends IntelligemsToIframeMessenger<IframeIgDataMessengerType> {
  constructor(frameQuerySelector: string, targetOrigin: string) {
    super(frameQuerySelector, targetOrigin, ["INTELLIGEMS_TO_CANDY_RACK"], (event: IframeIgDataMessengerType, messenger: IntelligemsToCandyRackMessenger) => {
      messenger._onMessage(event);
    });
  }

  private _onMessage(event: IframeIgDataMessengerType): void {
    let fn: any = window.igData;
    for (const part of event.data.path.split(".")) {
      fn = fn?.[part];
    }
    if (!fn || typeof fn !== "function") {
      console.warn(`No function found at path: ${event.data.path}`);
      return;
    }
    try {
      const result = event.data.payload !== undefined ? fn(event.data.payload) : fn();
      this.postMessage({type: "INTELLIGEMS_TO_CANDY_RACK", data: result});
    } catch (err) {
      console.error("Error calling igData function", err);
      this.postMessage({type: "INTELLIGEMS_TO_CANDY_RACK", data: {path: "error", payload: {message: String(err)}}});
    }
  }
}