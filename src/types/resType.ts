export interface ResMessage {
  message: string;
}
export type GetSignType = (loginId: string) => Promise<ResMessage>;
