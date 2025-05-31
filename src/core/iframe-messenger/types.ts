export type MessageType =
  | "INTELLIGEMS_TO_CANDY_RACK"
  | "CANDY_RACK_TO_INTELLIGEMS";

export type MessengerPayload<T extends object = object> = {
  type: MessageType;
  data: T;
};
