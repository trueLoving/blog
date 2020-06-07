<template>
  <article class="post">
    <div class="post-thumb">
      <a :href="post.path">
        <img class="lazyload" :src="chooseImg()" />
      </a>
    </div>
    <div class="post-content-wrap">
      <div class="post-content">
        <div class="post-date">
          <i class="iconfont reco-date time"></i>
          发布于 {{post.frontmatter.date | dateFormat}}
        </div>
        <a :href="post.path" class="post-title">
          <h3>{{post.title}}</h3>
        </a>
        <div class="post-meta">
          <span>
            <a :href="tagUrl">分类: {{post.frontmatter.categories.join(' ')}}</a>
          </span>
          <span style="margin-left:5px">
            <a :href="tagUrl">标签: {{post.frontmatter.tags.join(' ')}}</a>
          </span>
        </div>
        <div class="float-content">
          <!-- <div v-html="post.excerpt" class="content"></div> -->
          <div class="post-bottom">
            <a :href="post.path" class="button-normal">
              <i class="iconfont icon-moreread more"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>

import { dateFormat, chooseImg } from "./utils/index";

export default {
  name: "PostCard",
  filters: {
    dateFormat
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed:{
    categoryUrl(){
      const category = this.post.frontmatter.categories[0];
      const path = this.$categories._metaMap[category].path;
      return path;
    },
    tagUrl(){
      const tag = this.post.frontmatter.tags[0]
      const path = this.$tags._metaMap[tag].path;
      return path;
    }
  },
  methods: {
    chooseImg
  }
};
</script>

<style scoped>

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s;
}

img:hover {
  transform: scale(1.1);
}

.post {
  display: flex;
  width: 50rem;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem gray;
  margin: 4rem auto;
  border-radius: 1rem;
  height: 20rem;
  overflow: hidden;
}

.post-thumb {
  flex: 5;
  overflow: hidden;
}

.post-content-wrap {
  flex: 5;
  padding: 1.5rem;
  margin-top: 10px;
  position: relative;
}

.post-title h3 {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.post-date .time {
  color: #888;
  font-size: 12px;
}
.post-meta {
  color: #888;
  font-size: 0.8rem;
  position: absolute;
  bottom: 2.5rem;
  left: 2rem;
}

.more {
  font-size: 2rem;
  float: right;
  padding: 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>