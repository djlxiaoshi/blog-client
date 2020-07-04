import VueLib from 'vue'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  const opts = Object.assign({}, {"dsn":"https:\u002F\u002F2b7e433fe9e940c8ab342f1e0a0ed063@o139930.ingest.sentry.io\u002F5301786","environment":"production"}, {
    integrations: [
      new Dedupe({}),
      new ExtraErrorData({}),
      new ReportingObserver({}),
      new RewriteFrames({}),
      new Vue({Vue: VueLib, ...{"attachProps":true}})
    ]
  })

  // Initialize sentry
  Sentry.init(opts)

  // Inject Sentry to the context as $sentry
  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
