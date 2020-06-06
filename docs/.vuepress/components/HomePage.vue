<template>
  <div class="home-blog">
    <div class="postList">
      <PostCard></PostCard>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard";

export default {
  components: {
    PostCard
  }
};
</script>

<style scoped>

@import url('./style/iconfont.css');

</style>