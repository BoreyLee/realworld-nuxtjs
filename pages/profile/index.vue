<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <nuxt-link
              v-if="profile.username === user.username"
              :to="{ name: 'setting' }"
              class="btn btn-sm btn-outline-secondary action-btn"
            >
              <i class="ion-gear-a"></i>
              Edit Profile Settings
            </nuxt-link>
            <button
              v-else
              class="btn btn-sm action-btn ng-binding btn-outline-secondary"
              :class="{
                disabled: disabledFollow,
                'btn-outline-secondary': !profile.following,
                'btn-secondary': profile.following,
              }"
              :disabled="disabledFollow"
              @click="onHandleFollow"
            >
              <i class="ion-plus-round"></i>
              &nbsp; Follow {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{ active: tab === 'author' }"
                  :to="{ name: 'profile', query: { tab: 'author' } }"
                >
                  My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{ active: tab === 'favorited' }"
                  :to="{ name: 'profile', query: { tab: 'favorited' } }"
                >
                  Favorited Articles
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
                      name: 'profile',
                      query: { page: item, tab: tab },
                    }"
                  >
                    {{ item }}
                  </nuxt-link>
                </li>
              </template>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getProfile, addFollow, deleteFollow } from '@/api/profile';
import { getArticles } from '@/api/article';
import ListItem from '../home/components/list-item.vue';
export default {
  middleware: 'authenticated',
  name: 'Profile',
  components: {
    ListItem,
  },
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  data() {
    return {
      disabledFollow: false,
    };
  },
  watchQuery: ['page', 'tab'],
  async asyncData({
    params: { username } = {},
    query: { page = 1, tab = 'author' } = {},
  }) {
    const limit = 2;
    const [profileRes, articlesRes] = await Promise.all([
      getProfile(username),
      getArticles({
        limit,
        offset: (Number.parseInt(page) - 1) * limit,
        [tab]: username,
      }),
    ]);

    const { data: { profile } = {} } = profileRes;
    const { data: { articles = [], articlesCount = 0 } = {} } = articlesRes;

    return {
      profile,
      articles,
      articlesCount,
      limit,
      page: Number.parseInt(page),
      tab,
    };
  },
  methods: {
    /**关注&取关用户 */
    async onHandleFollow() {
      this.disabledFollow = true;

      const { following, username } = this.profile;
      const currentFollow = following ? deleteFollow : addFollow;
      await currentFollow(username);

      this.profile.following = !this.profile.following;
      this.disabledFollow = false;
    },
    onChangeItem(obj) {
      const idx = this.articles.findIndex((item) => {
        return item.slug === obj.slug;
      });
      this.$set(this.articles, idx, { ...obj });
    },
  },
  head() {
    const { username, bio } = this.profile;
    return {
      title: `@${username}-RealWorld`,
      meta: [
        {
          hid: `profile-${username}`,
          name: `profile-${username}`,
          content: `${username}-${bio}`,
        },
      ],
    };
  },
};
</script>
