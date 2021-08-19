const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const parsed = cookieparser && cookieparser.parse(req.headers.cookie)
      try {
        if (parsed?.user) user = JSON.parse(parsed.user)
      } catch (error) {
        console.log(error)
      }
    }
    commit('setUser', user)
  }
}