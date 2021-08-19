exports.ids = [4];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=24b904c4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\">"+((_vm.errors)?("<ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(key,value){return ((_vm._ssrList((key),function(item,index){return ("<li>"+_vm._ssrEscape("\n            "+_vm._s(value)+"："+_vm._s(item)+"\n          ")+"</li>")})))}))+"</ul>"):"<!---->")+" <div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset"+(_vm._ssrAttr("disabled",_vm.disabled))+"><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\" required=\"required\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" required=\"required\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tags)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=24b904c4&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'Editor',

  data() {
    return {
      disabled: false,
      errors: null,
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    };
  },

  computed: {
    tags: {
      get() {
        return this.article.tagList ? this.article.tagList.toString() : '';
      },

      set(val) {
        this.article.tagList = val.split(',');
      }

    }
  },

  async asyncData({
    params: {
      slug
    } = {}
  }) {
    let newArticle = {};

    if (slug && slug.toString() !== '0') {
      const {
        data: {
          article
        } = {}
      } = await Object(api_article["e" /* getArticle */])(slug);
      newArticle = { ...newArticle,
        ...article
      };
    }

    return {
      article: newArticle
    };
  },

  methods: {
    /**创建&更新 */
    async onSubmit() {
      this.disabled = true;

      try {
        const {
          slug = 0,
          tagList = []
        } = this.article;
        const currentArticles = slug && slug.toString() !== '0' ? Object(api_article["i" /* updateArticles */])(slug) // 使用函数柯理化
        : api_article["b" /* createArticles */];
        const {
          data: {
            article: {
              slug: newSlug
            } = {}
          } = {}
        } = await currentArticles({
          article: { ...this.article,
            tagList: tagList && tagList.length ? tagList.filter(item => item) : []
          }
        });
        window.history.length > 1 ? this.$router.go(-1) : this.$router.replace({
          name: 'article',
          params: {
            slug: newSlug
          }
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }

      this.disabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0ea3aba2"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map