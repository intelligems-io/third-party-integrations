import {IframeToIntelligemsMessenger} from "@src/core/iframe-messenger/iframe";
import {OnMessageType} from "@src/types/iframe-ig-data-messenger";

export class CandyRackToIntelligemsMessenger extends IframeToIntelligemsMessenger {
  constructor(parentOrigin: string, onMessage: OnMessageType) {
    super(parentOrigin, onMessage, ["CANDY_RACK_TO_INTELLIGEMS"]);
  }
}