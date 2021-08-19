<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' }"
                  :to="{ name: 'home', query: { tab: 'your_feed' } }"
                >
                  Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  :to="{ name: 'home', query: { tab: 'global_feed' } }"
                >
                  Global Feed
                </nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{ active: tab === 'tag' }"
                  :to="{ name: 'home', qurey: { tab: 'tag', tag: tag } }"
                >
                  #{{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <template v-for="(item, index) in articles">
            <list-item
              :user="user"
              :data="item"
              :key="`article${index}`"
              @change="onChangeItem"
            />
          </template>
        </div>
        <nav v-if="totalPage">
          <ul class="pagination">
            <template v-for="item in totalPage">
              <li
                class="page-item"
                :class="{ active: item === page }"
                :key="`page${item}`"
              >
                <nuxt-link
                  class="page-link ng-binding"
                  :to="{
                    name: 'home',
                    query: { page: item, tab: tab, tag: $route.query.tag },
                  }"
                >
                  {{ item }}
                </nuxt-link>
              </li>
            </template>
          </ul>
        </nav>
        <div class="col-md-3" v-if="tags && tags.length">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <template v-for="(item, index) in tags">
                <nuxt-link
                  :to="{ name: 'home', query: { tab: 'tag', tag: item } }"
                  class="tag-pill tag-default"
                  :key="`tag${index}`"
                >
                  {{ item }}
                </nuxt-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getArticles, getFeedArticles } from '@/api/article';
import { getTags } from '@/api/tags';
import ListItem from './components/list-item.vue';
export default {
  components: { ListItem },
  name: 'Home',
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData({
    query: { page = 1, tab = 'global_feed', tag } = {},
    store: { state: { user } = {} } = {},
  }) {
    const limit = 10;
    const curretArticles =
      user && tab === 'your_feed' ? getFeedArticles : getArticles;
    const [articlesRes = {}, tagsRes = {}] = await Promise.all([
      curretArticles({
        limit,
        offset: (Number.parseInt(page) - 1) * limit,
        tag,
      }),
      getTags(),
    ]);

    const { data: { articles = [], articlesCount = 0 } = {} } = articlesRes;
    const { data: { tags } = {} } = tagsRes;

    return {
      articles,
      articlesCount,
      limit,
      page: Number.parseInt(page),
      tags,
      tab,
      tag,
    };
  },
  methods: {
    onChangeItem(obj) {
      const idx = this.articles.findIndex((item) => {
        return item.slug === obj.slug;
      });
      this.$set(this.articles, idx, { ...obj });
    },
  },
  head() {
    return {
      title: `RealWorld`,
    };
  },
};
</script>
