import KoaBody from 'koa-body'

class Bodyparser {
  constructor (opt) {
    this.name = 'bodyparser'
    this.isLono = true
    this.config = opt
  }
  install (app) {
    app.use(KoaBody(app.$config?.body))
    return async (ctx, next) => {
      ctx.params = ctx.request.body
      await next()
    }
  }
}

export default function (...arg) {
  return new Bodyparser(...arg)
}
