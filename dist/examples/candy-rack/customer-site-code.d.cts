import { IntelligemsToCandyRackMessenger } from '../../integrations/candy-rack/intelligems.cjs';
import '../../core/iframe-messenger/intelligems.cjs';
import '../../core/iframe-messenger/base-messenger.cjs';
import '../../core/iframe-messenger/types.cjs';
import '../../types/iframe-ig-data-messenger.cjs';

/**
 * Usage:
 *   const messenger = connectToCandyRack();
 *   messenger?.postMessage({ type: "INTELLIGEMS_TO_CANDY_RACK", data: { path: "some.path", payload: {} } });
 *
 * Requires window.igCandyRack = { iFrameQuerySelector: string, origin: string }
 */
declare function connectToCandyRack(): IntelligemsToCandyRackMessenger | undefined;

export { connectToCandyRack };
