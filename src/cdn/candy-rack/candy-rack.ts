import {CandyRackToIntelligemsMessenger} from "@src/integrations/candy-rack/candy-rack";
import {IframeIgDataMessengerType} from "@src/types/iframe-ig-data-messenger";

function connectToIntelligems(parentOrigin: string) {
  return new CandyRackToIntelligemsMessenger(parentOrigin, (event: IframeIgDataMessengerType, messenger: CandyRackToIntelligemsMessenger) => {
    console.log(event);
    // Example: messenger.postMessage({ type: "CANDY_RACK_TO_INTELLIGEMS", data: { path: "some.path", payload: {} } });
  });
}

const ORIGIN = 'http://localhost:8080'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.igMessenger = connectToIntelligems(ORIGIN);