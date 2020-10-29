import VueLib from 'vue'
import * as Sentry from '@sentry/browser'

import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {"dsn":"https:\u002F\u002F2b7e433fe9e940c8ab342f1e0a0ed063@o139930.ingest.sentry.io\u002F5301786","environment":"development","release":"6a3bbc5d5433438f559a7ad44080645f1df2f5f5"}
  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":true}})
  ]
  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
