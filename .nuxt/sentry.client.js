import VueLib from 'vue'
import * as Sentry from '@sentry/browser'

import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {"dsn":"https:\u002F\u002F2b7e433fe9e940c8ab342f1e0a0ed063@o139930.ingest.sentry.io\u002F5301786","environment":"production","release":"c0559d3698c4c647ccb002931b6748621eeecedd"}
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
