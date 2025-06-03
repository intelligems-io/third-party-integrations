import {MessengerPayload} from "@src/core/iframe-messenger/types";
import {OnMessageType} from "@src/types/iframe-ig-data-messenger";

export abstract class BaseMessenger<T extends MessengerPayload> {
  protected allowedDataTypes: string[];
  protected readonly parentOrigin: string;

  protected onMessage: OnMessageType<T>;
  private readonly _listener: (event: MessageEvent<T>) => void;

  protected constructor(parentOrigin: string, onMessage: OnMessageType<T>, allowedDataTypes: string[]) {
    this.parentOrigin = parentOrigin;
    this.onMessage = onMessage;
    this.allowedDataTypes = allowedDataTypes;
    this._listener = (event: MessageEvent<T>) => {
      if (event.origin !== this.parentOrigin) {
        console.warn("Message from untrusted origin:", event.origin);
        return;
      }
      // Validate event.data shape
      if (!event.data || typeof event.data !== "object" || typeof (event.data as any).type !== "string") {
        // console.warn("Invalid message data shape", event.data);
        return;
      }
      // Optionally, subclasses should check event.source
      if (this.allowedDataTypes.includes((event.data as any).type)) {
        try {
          this.onMessage(event as any, this);
        } catch (err) {
          console.error("Error in onMessage callback", err);
        }
      }
    };
    this.setupListener();
  }

  private setupListener(): void {
    window.addEventListener("message", this._listener);
  }

  public dispose(): void {
    window.removeEventListener("message", this._listener);
  }

  public abstract postMessage(message: T): void;
}
