<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <ul class="error-messages" v-if="errors">
          <template v-for="(key, value) in errors">
            <li :key="`${key}${index}`" v-for="(item, index) in key">
              {{ value }}：{{ item }}
            </li>
          </template>
        </ul>
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset :disabled="disabled">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, createArticles, updateArticles } from '@/api/article';
export default {
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
        tagList: [],
      },
    };
  },
  computed: {
    tags: {
      get() {
        return this.article.tagList ? this.article.tagList.toString() : '';
      },
      set(val) {
        this.article.tagList = val.split(',');
      },
    },
  },
  async asyncData({ params: { slug } = {} }) {
    let newArticle = {};
    if (slug && slug.toString() !== '0') {
      const { data: { article } = {} } = await getArticle(slug);
      newArticle = {
        ...newArticle,
        ...article,
      };
    }
    return {
      article: newArticle,
    };
  },
  methods: {
    /**创建&更新 */
    async onSubmit() {
      this.disabled = true;
      try {
        const { slug = 0, tagList = [] } = this.article;
        const currentArticles =
          slug && slug.toString() !== '0'
            ? updateArticles(slug) // 使用函数柯理化
            : createArticles;
        const {
          data: { article: { slug: newSlug } = {} } = {},
        } = await currentArticles({
          article: {
            ...this.article,
            tagList:
              tagList && tagList.length ? tagList.filter((item) => item) : [],
          },
        });
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.replace({
              name: 'article',
              params: {
                slug: newSlug,
              },
            });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
      this.disabled = false;
    },
  },
};
</script>
