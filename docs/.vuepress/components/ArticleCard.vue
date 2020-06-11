<template>
  <div class="container">
    <div class="img-container">
      <a :href="article.path">
        <img :src="chooseImg()" class="img" />
      </a>
      <div class="article-meta-container">
        <span>
          <i class="iconfont icon-eye custom-icon"></i> {{article.frontmatter.readingTimes|| '暂无数据'}}
        </span>
      </div>
    </div>
    <div class="info-container">
      <div class="article-title">
        <a :href="article.path">{{article.frontmatter.title}}</a>
      </div>
      <div class="article-info">
        <span class="article-author">作者: {{article.frontmatter.author || 'Re_Star'}}</span>
        <span>{{article.frontmatter.date | dateFormat }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat, chooseImg } from "./utils/index";

export default {
  name: "ArticleCard",
  filters: {
    dateFormat
  },
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    chooseImg
  }
};
</script>

<style scoped>

.container {
  width: 400px;
  margin: 20px auto;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
  overflow: hidden;
  position: relative;
  transition: 0.4s all ease-in-out;
}

.container:hover {
  transform: translateY(-10px);
}

.img {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.info-container {
  padding: 0;
  margin: 0;
}

.article-title {
  padding: 16px 20px;
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
}

.article-info {
  color: #cccccc;
  padding: 10px 20px 20px;
  display: flex;
  justify-content: space-between;
}

.img-container {
  position: relative;
}

.article-meta-container {
  right: 10px;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  color: white;
  transition: 0.6s all ease;
}

.container:hover .article-meta-container {
  right: 10px;
  transform: translateY(-40px);
  display: block;
}

.container:hover .article-meta-container span {
  background-color: rgba(0, 0, 0, 0.6);
}

.article-meta-container span {
  margin: 5px;
  padding: 5px;
  border-radius: 6px;
}

.custom-icon {
  color: white;
}
</style>