exports.ids = [3];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=973e3306&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"exact":"","to":{ name: 'home', query: { tab: 'your_feed' } }}},[_vm._v("\n                Your Feed\n              ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"exact":"","to":{ name: 'home', query: { tab: 'global_feed' } }}},[_vm._v("\n                Global Feed\n              ")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tag' },attrs:{"exact":"","to":{ name: 'home', qurey: { tab: 'tag', tag: _vm.tag } }}},[_vm._v("\n                #"+_vm._s(_vm.tag)+"\n              ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item,index){return [_c('list-item',{key:("article" + index),attrs:{"user":_vm.user,"data":item},on:{"change":_vm.onChangeItem}})]})],2),_vm._ssrNode(" "),(_vm.totalPage)?_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",[_vm._l((_vm.totalPage),function(item){return [_vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  name: 'home',
                  query: { page: item, tab: _vm.tab, tag: _vm.$route.query.tag },
                }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])],1)]})],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.tags && _vm.tags.length)?_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",[_vm._l((_vm.tags),function(item,index){return [_c('nuxt-link',{key:("tag" + index),staticClass:"tag-pill tag-default",attrs:{"to":{ name: 'home', query: { tab: 'tag', tag: item } }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])]})],2)],2)]):_vm._e()],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=973e3306&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tags.js

/**
 * 获取标签列表
 * @param {*} params 
 * @returns 
 */

const getTags = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags',
    params
  });
};
// EXTERNAL MODULE: ./pages/home/components/list-item.vue + 4 modules
var list_item = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var homevue_type_script_lang_js_ = ({
  components: {
    ListItem: list_item["a" /* default */]
  },
  name: 'Home',
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query: {
      page = 1,
      tab = 'global_feed',
      tag
    } = {},
    store: {
      state: {
        user
      } = {}
    } = {}
  }) {
    const limit = 10;
    const curretArticles = user && tab === 'your_feed' ? article["h" /* getFeedArticles */] : article["f" /* getArticles */];
    const [articlesRes = {}, tagsRes = {}] = await Promise.all([curretArticles({
      limit,
      offset: (Number.parseInt(page) - 1) * limit,
      tag
    }), getTags()]);
    const {
      data: {
        articles = [],
        articlesCount = 0
      } = {}
    } = articlesRes;
    const {
      data: {
        tags
      } = {}
    } = tagsRes;
    return {
      articles,
      articlesCount,
      limit,
      page: Number.parseInt(page),
      tags,
      tab,
      tag
    };
  },

  methods: {
    onChangeItem(obj) {
      const idx = this.articles.findIndex(item => {
        return item.slug === obj.slug;
      });
      this.$set(this.articles, idx, { ...obj
      });
    }

  },

  head() {
    return {
      title: `RealWorld`
    };
  }

});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f3db31d8"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map