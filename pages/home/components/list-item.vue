<template>
  <div class="article-preview">
    <div class="article-meta">
      <nuxt-link
        :to="{ name: 'profile', params: { username: data.author.username } }"
      >
        <img :src="data.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link
          class="author"
          :to="{ name: 'profile', params: { username: data.author.username } }"
        >
          {{ data.author.username }}
        </nuxt-link>
        <span class="date">{{ data.createdAt | date }}</span>
      </div>
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="{ active: data.favorited, disabled: disabled }"
        :disabled="disabled"
        @click="onFavorite"
      >
        <i class="ion-heart"></i>{{ data.favoritesCount }}
      </button>
    </div>
    <nuxt-link
      class="preview-link"
      :to="{ name: 'article', params: { slug: data.slug } }"
    >
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list" v-if="data.tagList && data.tagList.length">
        <template v-for="(tag, idx) in data.tagList">
          <li class="tag-default tag-pill tag-outline" :key="`tag${idx}`">
            {{ tag }}
          </li>
        </template>
      </ul>
    </nuxt-link>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite } from '@/api/article';
export default {
  name: 'ListItem',
  props: {
    data: {
      type: Object,
      required: true,
      defalut: () => {
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
      disabled: false,
    };
  },
  methods: {
    async onFavorite() {
      if (!this.user) return this.$router.push('/login');
      this.disabled = true;

      const { slug, favorited, favoritesCount } = this.data;
      // const currentFavorite = favorited ? deleteFavorite : addFavorite;
      // await currentFavorite(slug);

      this.$emit('change', {
        ...this.data,
        favorited: !favorited,
        favoritesCount: favorited ? favoritesCount - 1 : favoritesCount + 1,
      });

      this.disabled = false;
    },
  },
};
</script>
