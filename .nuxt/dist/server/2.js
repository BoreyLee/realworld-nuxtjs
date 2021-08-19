exports.ids = [2];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=584f8956&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(this.article.title))+"</h1> "),_c('article-mate',{attrs:{"article":_vm.article,"user":_vm.user}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> "+((_vm.article.tagList && _vm.article.tagList.length)?("<ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,idx){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n          "+_vm._s(tag)+"\n        ")+"</li>")}))+"</ul>"):"<!---->")+" <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-mate',{attrs:{"article":_vm.article,"user":_vm.user}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_c('article-comment',{attrs:{"article":_vm.article,"user":_vm.user}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=584f8956&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=268102ed&
var article_metavue_type_template_id_268102ed_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" "),(_vm.user && _vm.user.username === _vm.article.author.username)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{ name: 'editor', params: { slug: _vm.article.slug } }}},[_c('i',{staticClass:"ion-edit"}),_vm._v("Edit Article\n    ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.disabledDelete))+(_vm._ssrClass("btn btn-outline-danger btn-sm",{
        disabled: _vm.disabledDelete,
      }))+"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")]:_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.disabledFollow))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
        active: _vm.article.author.following,
        disabled: _vm.disabledFollow,
      }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n        Follow "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.disabledFavorite))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
        active: _vm.article.favorited,
        disabled: _vm.disabledFavorite,
      }))+"><i class=\"ion-heart\"></i>\n        Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_268102ed_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=268102ed&

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
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
      disabledDelete: false,
      disabledFavorite: false,
      disabledFollow: false
    };
  },

  methods: {
    /**收藏&取消收藏文章 */
    async onHandleFavorite() {
      if (!this.user) return this.$router.push('/login');
      this.disabledFavorite = true;
      const {
        favorited,
        slug
      } = this.article;
      const currentFavorite = favorited ? api_article["d" /* deleteFavorite */] : api_article["a" /* addFavorite */];
      await currentFavorite(slug);
      this.article.favorited = !this.article.favorited;
      this.article.favoritesCount += this.article.favorited ? 1 : -1;
      this.disabledFavorite = false;
    },

    /**关注&取关用户 */
    async onHandleFollow() {
      if (!this.user) return this.$router.push('/login');
      this.disabledFollow = true;
      const {
        author: {
          following,
          username
        } = {}
      } = this.article;
      const currentFollow = following ? profile["b" /* deleteFollow */] : profile["a" /* addFollow */];
      await currentFollow(username);
      this.article.author.following = !this.article.author.following;
      this.disabledFollow = false;
    },

    /**删除文章*/
    async onHandleDelete() {
      this.disabledDelete = true;
      await Object(api_article["c" /* deleteArticles */])(this.article.slug);
      this.disabledDelete = false;
      this.$router.replace('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_268102ed_render,
  article_metavue_type_template_id_268102ed_staticRenderFns,
  false,
  null,
  null,
  "751bb08c"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=6271359a&
var article_commentvue_type_template_id_6271359a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 col-md-8 offset-md-2"},[(_vm.user)?[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><fieldset"+(_vm._ssrAttr("disabled",_vm.disabled))+"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment.body))+"</textarea></fieldset></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n          Post Comment\n        </button></div></form> "),_vm._l((_vm.comments),function(item,index){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n          "+_vm._s(item.body)+"\n        ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: { username: item.author.username },
          }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n         \n        "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
            name: 'profile',
            params: {
              username: item.author.username,
            },
          }}},[_vm._v("\n          "+_vm._s(item.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt)))+"</span> "+((_vm.user && _vm.user.username === item.author.username)?("<span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})]:_vm._ssrNode("<p style=\"display: inherit;\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode(" or\n    "),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("sign up")]),_vm._ssrNode(" to add comments on this\n    article.\n  ")],2)],2)}
var article_commentvue_type_template_id_6271359a_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=6271359a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'ArticleComment',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
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
      disabled: false,
      comment: {
        body: ''
      },
      comments: []
    };
  },

  mounted() {
    this.getCommentsData();
  },

  methods: {
    /**
     * 获取评论数据
     */
    async getCommentsData() {
      try {
        const {
          data: {
            comments = []
          } = {}
        } = await Object(api_article["g" /* getComments */])(this.article.slug);
        this.comments = comments;
      } catch (error) {}
    },

    /**删除评论 */
    async onHandleDelete(id) {
      this.comments = this.comments.filter(item => {
        return item.id !== id;
      }); // await deleteComments(this.article.slug, id);
    },

    /**提交评论 */
    async onSubmit() {
      if (!this.comment.body) return;
      this.disabled = true;
      this.comments.unshift({
        id: 100000 * Math.random(),
        createdAt: new Date(),
        updatedAt: new Date(),
        body: this.comment.body,
        author: { ...this.user
        }
      }); // const { data } = await addComments(this.article.slug, {
      //   comment: this.comment,
      // });

      this.disabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue





/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_6271359a_render,
  article_commentvue_type_template_id_6271359a_staticRenderFns,
  false,
  null,
  null,
  "4cb3a28c"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'Article',
  components: {
    ArticleMate: article_meta,
    ArticleComment: article_comment
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async asyncData({
    params: {
      slug
    } = {}
  }) {
    const {
      data: {
        article
      } = {}
    } = await Object(api_article["e" /* getArticle */])(slug);
    const md = new external_markdown_it_default.a();
    return {
      article: { ...article,
        body: md.render(article.body)
      }
    };
  },

  head() {
    const {
      title,
      description
    } = this.article;
    return {
      title: `${title}-RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e728c712"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map