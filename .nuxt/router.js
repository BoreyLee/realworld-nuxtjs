import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4200a96d = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _f139503c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _562e31da = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))
const _3631cfb0 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _653fecc6 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _23c2b874 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _76ef286d = () => interopDefault(import('../pages/setting' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: ' active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4200a96d,
    children: [{
      path: "",
      component: _f139503c,
      name: "home"
    }, {
      path: "/article/:slug",
      component: _562e31da,
      name: "article"
    }, {
      path: "/editor/:slug",
      component: _3631cfb0,
      name: "editor"
    }, {
      path: "/login",
      component: _653fecc6,
      name: "login"
    }, {
      path: "/register",
      component: _653fecc6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _23c2b874,
      name: "profile"
    }, {
      path: "/setting",
      component: _76ef286d,
      name: "setting"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
