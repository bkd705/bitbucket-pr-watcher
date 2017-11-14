export class WebsocketController {
  public static handleWebhook(event: string, body: object) {
    switch (event) {
      case 'pullrequest:created':
        this.pullRequestCreated(body)
        break
      case 'pullrequest:approved':
        this.pullRequestApproved(body)
        break
      case 'pullrequest:fulfilled':
        this.pullRequestMerged(body)
        break
      case 'pullrequest:rejected':
        this.pullRequestDeclined(body)
        break
      default:
        break
    }
  }

  public static pullRequestCreated(body: object) {}

  public static pullRequestApproved(body: object) {}

  public static pullRequestMerged(body: object) {}

  public static pullRequestDeclined(body: object) {}
}
