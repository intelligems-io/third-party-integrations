import { CandyRackToIntelligemsMessenger } from '../../integrations/candy-rack/candy-rack.cjs';
import '../../core/iframe-messenger/iframe.cjs';
import '../../core/iframe-messenger/base-messenger.cjs';
import '../../core/iframe-messenger/types.cjs';
import '../../types/iframe-ig-data-messenger.cjs';

declare function connectToIntelligems(parentOrigin: string): CandyRackToIntelligemsMessenger | undefined;

export { connectToIntelligems };
