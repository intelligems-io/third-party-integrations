import {IntelligemsToCandyRackMessenger} from "@src/integrations/candy-rack/intelligems";

/**
 * Usage:
 *   const messenger = connectToCandyRack();
 *   messenger?.postMessage({ type: "INTELLIGEMS_TO_CANDY_RACK", data: { path: "some.path", payload: {} } });
 *
 * Requires window.igCandyRack = { iFrameQuerySelector: string, origin: string }
 */
export function connectToCandyRack() {
  const igCandyRack = window.igCandyRack;
  if (!igCandyRack) {
    return;
  }
  return new IntelligemsToCandyRackMessenger(igCandyRack.iFrameQuerySelector, igCandyRack.origin);
}

// Example HTML snippet for end-users:
// <script type="text/javascript" src="https://cdn.intelligems.io/third-party/candy-rack/intelligems.cjs"></script>

// A real store would have this script added to the head of the theme,
// or injected using the JavaScript injection feature provided by Intelligems

// <script type="javascript" src="https://cdn.intelligems.io/third-party/candy-rack/intelligems.cjs">