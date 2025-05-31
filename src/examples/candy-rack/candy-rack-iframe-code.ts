import {CandyRackToIntelligemsMessenger} from "@src/integrations/candy-rack/candy-rack";
import {IframeIgDataMessengerType} from "@src/types/iframe-ig-data-messenger";

const ORIGIN = 'https://www.example.com'

export function connectToIntelligems(parentOrigin: string) {
  if (!window.igData) {
    return;
  }

  return new CandyRackToIntelligemsMessenger(parentOrigin, (event: IframeIgDataMessengerType, messenger: CandyRackToIntelligemsMessenger) => {
    console.log('hi');
    // Example: messenger.postMessage({ type: "CANDY_RACK_TO_INTELLIGEMS", data: { path: "some.path", payload: {} } });
  });
}

function example() {
  const messenger = connectToIntelligems(ORIGIN);
  if (!messenger) {
    return;
  }
  messenger.postMessage({type: "CANDY_RACK_TO_INTELLIGEMS", data: {path: "user.getExperiences"}});
}