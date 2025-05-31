declare global {
  interface Window {
    igData: any
    igCandyRack?: {
      iFrameQuerySelector: string
      origin: string
    }
  }
}