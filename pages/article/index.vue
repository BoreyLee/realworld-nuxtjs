<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ this.article.title }}</h1>
        <article-mate :article="article" :user="user" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>
      <ul class="tag-list" v-if="article.tagList && article.tagList.length">
        <template v-for="(tag, idx) in article.tagList">
          <li class="tag-default tag-pill tag-outline" :key="`tag${idx}`">
            {{ tag }}
          </li>
        </template>
      </ul>

      <hr />
      <div class="article-actions">
        <article-mate :article="article" :user="user" />
      </div>

      <div class="row">
        <article-comment :article="article" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/article';
import { mapState } from 'vuex';
import MarkdownIt from 'markdown-it';
import ArticleMate from './components/article-meta.vue';
import ArticleComment from './components/article-comment.vue';
export default {
  name: 'Article',
  components: {
    ArticleMate,
    ArticleComment,
  },
  computed: {
    ...mapState(['user']),
  },
  async asyncData({ params: { slug } = {} }) {
    const { data: { article } = {} } = await getArticle(slug);
    const md = new MarkdownIt();
    return {
      article: {
        ...article,
        body: md.render(article.body),
      },
    };
  },
  head() {
    const { title, description } = this.article;
    return {
      title: `${title}-RealWorld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
      ],
    };
  },
};
</script>
