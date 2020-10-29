import VueLib from 'vue'
import * as Sentry from '@sentry/browser'

import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {"dsn":"https:\u002F\u002F2b7e433fe9e940c8ab342f1e0a0ed063@o139930.ingest.sentry.io\u002F5301786","environment":"production","release":"26c50bfbdf6c6f56c80d95ea01eb6297b86e59e0"}
  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":false}})
  ]
  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
