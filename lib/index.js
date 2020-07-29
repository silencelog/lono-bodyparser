import KoaBodyparser from 'koa-bodyparser'

class LodeBodyparser {
  constructor (opt) {
    this.name = 'bodyparser'
    this.isLode = true
    this.config = opt
  }
  install (lode) {
    lode.use(KoaBodyparser())
    return async (ctx, next) => {
      ctx.params = ctx.request.body
      await next()
    }
  }
}

export default function (...arg) {
  return new LodeBodyparser(...arg)
}
