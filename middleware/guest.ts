import { Middleware } from '@nuxt/types'

const guestMiddleware: Middleware = (context: any) => {
  if (context.$auth.loggedIn) {
    return context.redirect('/')
  }
}

export default guestMiddleware
