exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* unused harmony export addComments */
/* unused harmony export deleteComments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticles; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * 获取所以文章列表
 * @param {*} params 
 * @returns 
 */

const getArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
/**
 * 获取个人文章列表
 * @param {*} params 
 * @returns 
 */

const getFeedArticles = params => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
/**
 * 收藏
 * @param {*} slug 
 * @returns 
 */

const addFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * 取消收藏
 * @param {*} slug 
 * @returns 
 */

const deleteFavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
/**
 * 文章详情
 * @param {*} slug 
 * @returns 
 */

const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
/**
 * 获取评论列表
 * @param {*} slug 
 * @returns 
 */

const getComments = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
/**
 * 添加评论
 * @param {*} slug 
 * @param {*} data 
 * @returns 
 */

const addComments = (slug, data) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};
/**
 * 删除评论
 * @param {*} slug 
 * @param {*} data 
 * @returns 
 */

const deleteComments = (slug, id) => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};
/**
 * 创建文章
 */

const createArticles = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
/**
 * 更新文章
 * @param {*} data 
 * @returns 
 */

const updateArticles = slug => {
  return function (data) {
    return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: 'PUT',
      url: `/api/articles/${slug}`,
      data
    });
  };
};
/**
 * 删除文章
 */

const deleteArticles = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFollow; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * 获取个人信息
 * @param {*} username 
 * @returns 
 */

const getProfile = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
/**
 * 关注
 * @param {*} username 
 * @returns 
 */

const addFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
/**
 * 取消关注
 * @param {*} username 
 * @returns 
 */

const deleteFollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/components/list-item.vue?vue&type=template&id=3fa82bd2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-preview"},[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'profile', params: { username: _vm.data.author.username } }}},[_c('img',{attrs:{"src":_vm.data.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{ name: 'profile', params: { username: _vm.data.author.username } }}},[_vm._v("\n        "+_vm._s(_vm.data.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.data.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: _vm.data.favorited, disabled: _vm.disabled }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(_vm._s(_vm.data.favoritesCount)+"\n    ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: _vm.data.slug } }}},[_c('h1',[_vm._v(_vm._s(_vm.data.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.data.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),(_vm.data.tagList && _vm.data.tagList.length)?_c('ul',{staticClass:"tag-list"},[_vm._l((_vm.data.tagList),function(tag,idx){return [_c('li',{key:("tag" + idx),staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])]})],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/components/list-item.vue?vue&type=template&id=3fa82bd2&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/components/list-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var list_itemvue_type_script_lang_js_ = ({
  name: 'ListItem',
  props: {
    data: {
      type: Object,
      required: true,
      defalut: () => {
        return {};
      }
    },
    user: {
      type: [Object, null],
      required: true,
      default: null
    }
  },

  data() {
    return {
      disabled: false
    };
  },

  methods: {
    async onFavorite() {
      if (!this.user) return this.$router.push('/login');
      this.disabled = true;
      const {
        slug,
        favorited,
        favoritesCount
      } = this.data; // const currentFavorite = favorited ? deleteFavorite : addFavorite;
      // await currentFavorite(slug);

      this.$emit('change', { ...this.data,
        favorited: !favorited,
        favoritesCount: favorited ? favoritesCount - 1 : favoritesCount + 1
      });
      this.disabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/components/list-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_list_itemvue_type_script_lang_js_ = (list_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/components/list-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_list_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c7b0b57"
  
)

/* harmony default export */ var list_item = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=1b91ea4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "),(_vm.profile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":{ name: 'setting' }}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v("\n            Edit Profile Settings\n          ")]):_c('button',{staticClass:"btn btn-sm action-btn ng-binding btn-outline-secondary",class:{
              disabled: _vm.disabledFollow,
              'btn-outline-secondary': !_vm.profile.following,
              'btn-secondary': _vm.profile.following,
            },attrs:{"disabled":_vm.disabledFollow},on:{"click":_vm.onHandleFollow}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n              Follow "+_vm._s(_vm.profile.username)+"\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'author' },attrs:{"exact":"","to":{ name: 'profile', query: { tab: 'author' } }}},[_vm._v("\n                My Articles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'favorited' },attrs:{"exact":"","to":{ name: 'profile', query: { tab: 'favorited' } }}},[_vm._v("\n                Favorited Articles\n              ")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item,index){return [_c('list-item',{key:("article" + index),attrs:{"user":_vm.user,"data":item},on:{"change":_vm.onChangeItem}})]}),_vm._ssrNode(" "),(_vm.totalPage)?_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",[_vm._l((_vm.totalPage),function(item){return [_vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                    name: 'profile',
                    query: { page: item, tab: _vm.tab },
                  }}},[_vm._v("\n                  "+_vm._s(item)+"\n                ")])],1)]})],2)]):_vm._e()],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=1b91ea4e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/profile.js
var api_profile = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: ./pages/home/components/list-item.vue + 4 modules
var list_item = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'Profile',
  components: {
    ListItem: list_item["a" /* default */]
  },
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },

  data() {
    return {
      disabledFollow: false
    };
  },

  watchQuery: ['page', 'tab'],

  async asyncData({
    params: {
      username
    } = {},
    query: {
      page = 1,
      tab = 'author'
    } = {}
  }) {
    const limit = 2;
    const [profileRes, articlesRes] = await Promise.all([Object(api_profile["c" /* getProfile */])(username), Object(article["f" /* getArticles */])({
      limit,
      offset: (Number.parseInt(page) - 1) * limit,
      [tab]: username
    })]);
    const {
      data: {
        profile
      } = {}
    } = profileRes;
    const {
      data: {
        articles = [],
        articlesCount = 0
      } = {}
    } = articlesRes;
    return {
      profile,
      articles,
      articlesCount,
      limit,
      page: Number.parseInt(page),
      tab
    };
  },

  methods: {
    /**关注&取关用户 */
    async onHandleFollow() {
      this.disabledFollow = true;
      const {
        following,
        username
      } = this.profile;
      const currentFollow = following ? api_profile["b" /* deleteFollow */] : api_profile["a" /* addFollow */];
      await currentFollow(username);
      this.profile.following = !this.profile.following;
      this.disabledFollow = false;
    },

    onChangeItem(obj) {
      const idx = this.articles.findIndex(item => {
        return item.slug === obj.slug;
      });
      this.$set(this.articles, idx, { ...obj
      });
    }

  },

  head() {
    const {
      username,
      bio
    } = this.profile;
    return {
      title: `@${username}-RealWorld`,
      meta: [{
        hid: `profile-${username}`,
        name: `profile-${username}`,
        content: `${username}-${bio}`
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "768f556a"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map