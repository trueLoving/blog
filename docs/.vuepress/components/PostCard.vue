<template>
  <article class="post">
    <div class="post-thumb">
      <a href="#">
        <img
          class="lazyload"
          src="https://2heng.xin/wp-content/uploads//2017/12/｡･：＊：･✿-PID65231071-by-hakusai-1024x602.jpg"
        />
      </a>
    </div>
    <div class="post-content-wrap">
      <div class="post-content">
        <div class="post-date">
          <i class="iconfont reco-date time"></i>发布于 {{publish_time}}
        </div>
        <a href="#" class="post-title">
          <h3>{{title}}</h3>
        </a>
        <div class="float-content">
          <p>{{content}}</p>
          <div class="post-bottom">
            <a href="#" class="button-normal">
              <i class="iconfont icon-moreread more"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    publish_time:{
      type:String,
      default:'2019-09-10'
    },
    title:{
      type:String,
      default:'Docker 部署 Zabbix + Grafana'
    },
    content:{
      type:String,
      default:'MySQL + Grafana + Zabbix-Server + Zabbix-Agent 一键部署。'
    }
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

.time{
  margin-right: 4px;
}

.post-bottom{
  font-size: 2rem;
}

.post {
  display: flex;
  width: 45rem;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem gray;
  margin: 4rem auto;
  border-radius: 1rem;
  height: 20rem;
}

.post-thumb {
  flex: 6;
  overflow: hidden;
}
.post-content-wrap {
  flex: 4;
  padding: 1.5rem;
}
</style>