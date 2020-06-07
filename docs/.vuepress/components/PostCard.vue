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
        <hr class="hr">
        <a :href="post.path" class="post-title">
          <span>{{post.title}}...</span>
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
  computed: {
    categoryUrl() {
      const category = this.post.frontmatter.categories[0];
      const path = this.$categories._metaMap[category].path;
      return path;
    },
    tagUrl() {
      const tag = this.post.frontmatter.tags[0];
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

a {
  color: #504e4e;
  font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif",
    source-han-serif-sc, "PT Serif", "SongTi SC", "MicroSoft Yahei", Georgia,
    serif;
}

a:hover {
  color: #dd3333;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s;
}

img:hover {
  transform: scale(1.1);
}

.hr{
  border-bottom: 2px solid rgba(128, 128, 128, 0.425);
  margin-top: 14px;
}

.post {
  display: flex;
  width: 40rem;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem gray;
  margin: 2rem auto;
  border-radius: 1rem;
  height: 15rem;
  overflow: hidden;
  color: #888;
  font-size: 12px;
  /* text-shadow: 0 0 1px rgba(0,0,0,.1); */
  text-align: center;
}

.post-thumb {
  flex: 0.65;
}

.post-content-wrap {
  flex: 0.4;
  padding: 1.5rem;
  position: relative;
}


.post-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-60%);
}

.post-title span {
  font-weight: bold; 
  font-size: 1.2rem;
  display: block;
  width: 10rem;
}

.post-date .time {
  color: #888;
  font-size: 12px;
}

.post-meta {
  color: #888;
  font-size: 1.2em;
  position: absolute;
  bottom: 1.6rem;
  left: 2rem;
}

.more {
  position: absolute;
  font-size: 2rem;
  bottom: 1rem;
  right: 1rem;
}

.more:hover {
  color: #dd3333;
}
</style>