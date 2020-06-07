<template>
  <div class="home-blog">
    <div class="postList">
      <PostCard v-for="(post,index) in post" :key="index" :post="post"></PostCard>
    </div>
  </div>
</template>

<script>

import PostCard from "./PostCard";

export default {
  components: {
    PostCard
  },
  computed:{
    post(){
      return this.$recoPosts;
    }
  }
};
</script>

<style scoped>

@import url('./style/iconfont.css');

</style>