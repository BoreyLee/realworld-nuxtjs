<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
      }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        class="author"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <template v-if="user && user.username === article.author.username">
      <nuxt-link
        class="btn btn-outline-secondary btn-sm"
        :to="{ name: 'editor', params: { slug: article.slug } }"
      >
        <i class="ion-edit"></i>Edit Article
      </nuxt-link>
      <button
        class="btn btn-outline-danger btn-sm"
        :class="{
          disabled: disabledDelete,
        }"
        :disabled="disabledDelete"
        @click="onHandleDelete"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following,
          disabled: disabledFollow,
        }"
        :disabled="disabledFollow"
        @click="onHandleFollow"
      >
        <i class="ion-plus-round"></i>
        &nbsp; Follow {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited,
          disabled: disabledFavorite,
        }"
        :disabled="disabledFavorite"
        @click="onHandleFavorite"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite, deleteArticles } from '@/api/article';
import { addFollow, deleteFollow } from '@/api/profile';
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    user: {
      type: [Object, null],
      required: true,
      default: null,
    },
  },
  data() {
    return {
      disabledDelete: false,
      disabledFavorite: false,
      disabledFollow: false,
    };
  },
  methods: {
    /**收藏&取消收藏文章 */
    async onHandleFavorite() {
      if (!this.user) return this.$router.push('/login');
      this.disabledFavorite = true;

      const { favorited, slug } = this.article;
      const currentFavorite = favorited ? deleteFavorite : addFavorite;
      await currentFavorite(slug);

      this.article.favorited = !this.article.favorited;
      this.article.favoritesCount += this.article.favorited ? 1 : -1;
      this.disabledFavorite = false;
    },

    /**关注&取关用户 */
    async onHandleFollow() {
      if (!this.user) return this.$router.push('/login');
      this.disabledFollow = true;

      const { author: { following, username } = {} } = this.article;
      const currentFollow = following ? deleteFollow : addFollow;
      await currentFollow(username);

      this.article.author.following = !this.article.author.following;
      this.disabledFollow = false;
    },

    /**删除文章*/
    async onHandleDelete() {
      this.disabledDelete = true;

      await deleteArticles(this.article.slug);

      this.disabledDelete = false;

      this.$router.replace('/');
    },
  },
};
</script>
