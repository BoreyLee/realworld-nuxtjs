<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <template v-if="user">
      <form class="card comment-form" @submit.prevent="onSubmit">
        <div class="card-block">
          <fieldset :disabled="disabled">
            <textarea
              class="form-control"
              placeholder="Write a comment..."
              rows="3"
              v-model="comment.body"
            ></textarea>
          </fieldset>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary">
            Post Comment
          </button>
        </div>
      </form>
      <div class="card" v-for="(item, index) in comments" :key="`card${index}`">
        <div class="card-block">
          <p class="card-text">
            {{ item.body }}
          </p>
        </div>
        <div class="card-footer">
          <nuxt-link
            :to="{
              name: 'profile',
              params: { username: item.author.username },
            }"
            class="comment-author"
          >
            <img :src="item.author.image" class="comment-author-img" />
          </nuxt-link>
          &nbsp;
          <nuxt-link
            :to="{
              name: 'profile',
              params: {
                username: item.author.username,
              },
            }"
            class="comment-author"
          >
            {{ item.author.username }}
          </nuxt-link>
          <span class="date-posted">{{ item.createdAt | date }}</span>
          <span
            class="mod-options"
            v-if="user && user.username === item.author.username"
            @click="onHandleDelete(item.id)"
          >
            <i class="ion-trash-a"></i>
          </span>
        </div>
      </div>
    </template>
    <p v-else style="display: inherit;">
      <nuxt-link to="/login">Sign in</nuxt-link> or
      <nuxt-link to="/register">sign up</nuxt-link> to add comments on this
      article.
    </p>
  </div>
</template>

<script>
import { getComments, addComments, deleteComments } from '@/api/article';

export default {
  name: 'ArticleComment',
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
      disabled: false,
      comment: {
        body: '',
      },
      comments: [],
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
        const { data: { comments = [] } = {} } = await getComments(
          this.article.slug,
        );
        this.comments = comments;
      } catch (error) {}
    },

    /**删除评论 */
    async onHandleDelete(id) {
      this.comments = this.comments.filter((item) => {
        return item.id !== id;
      });
      // await deleteComments(this.article.slug, id);
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
        author: {
          ...this.user,
        },
      });
      // const { data } = await addComments(this.article.slug, {
      //   comment: this.comment,
      // });
      this.disabled = false;
    },
  },
};
</script>
