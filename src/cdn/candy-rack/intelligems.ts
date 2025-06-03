import {IntelligemsToCandyRackMessenger} from "@src/integrations/candy-rack/intelligems";


function connectToCandyRack() {
  const igCandyRack = window.igCandyRack;
  if (!igCandyRack) {
    return;
  }
  return new IntelligemsToCandyRackMessenger(igCandyRack.iFrameQuerySelector, igCandyRack.origin);
}

connectToCandyRack();