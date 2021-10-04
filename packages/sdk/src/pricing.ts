import {
  createIframeUrl,
  IPublicTheme,
  showWidgetAt,
  showWidgetModal,
} from './utils'
import { IPAPI } from './api'

interface PricingIFrameOptions {
  redirectUrl: string
  highlightText?: string
  planId?: string
}

export default class Pricing {
  api: IPAPI

  /**
   * Use this class to render a Pricing widget for use in public static pages for
   * unauthenticated users. Pricing widget shows all public plans available
   * and redirects to specified redirectUrl.
   *
   * @param api - publicToken required. Private token will be stripped from object
   * to avoid including in any URL.
   */
  constructor(api: IPAPI) {
    if (!api.publicToken) throw Error('Public token required.')
    this.api = api.token ? { ...api, token: undefined } : api
  }

  /**
   * Generate a widget URL that you can insert into an iframe's src
   * attribute to show a Pricing widget that displays public plans on a static page.
   *
   * redirectUrl required in opts.
   *
   * Optionally, pass in planId and highlightText in opts to highlight a plan
   * card that you want to highlight, e.g. to encourage customers to select.
   */
  createWidgetUrl(theme?: IPublicTheme, opts?: PricingIFrameOptions) {
    if (!opts?.redirectUrl) throw Error('redirectUrl required')

    const url = new URL('pricing', this.api.appBaseUrl)
    url.searchParams.set('redirectUrl', opts?.redirectUrl)

    if (opts?.highlightText)
      url.searchParams.set('highlightText', opts.highlightText)
    if (opts?.planId) url.searchParams.set('planId', opts.planId)

    return createIframeUrl({
      theme,
      publicToken: this.api.publicToken,
      url,
    })
  }

  /**
   * Renders a prebuilt UI widget for Pricing Plan cards.
   *
   * Pass `elOrSelector` to render the widget as a child of the element, or
   * first element that matches.  Omit to render the widget as a full-sized
   * modal.
   */
  showWidget(
    theme?: IPublicTheme,
    elOrSelector?: string | Element,
    opts?: PricingIFrameOptions
  ) {
    const url = this.createWidgetUrl(theme, opts)
    if (elOrSelector) {
      showWidgetAt(url, elOrSelector)
      return () => {
        /* noop */
      }
    }
    return showWidgetModal(url)
  }
}
