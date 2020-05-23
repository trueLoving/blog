<template>
  <Common class="books-wrapper">
    <ModuleTransition delay="0.5">
      <Content v-show="recoShowModule"/>
    </ModuleTransition >
  </Common>
</template>

<script>

import Common from "@theme/components/Common";
import ModuleTransition from "@theme/components/ModuleTransition";
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  name: "BookList",
  data(){
    books:[]
  },
  mixins:[moduleTransitonMixin],
  components: { Common, ModuleTransition },
  mounted(){
    // 获取书籍数据
    console.log(this.$bookList);
  }
};
</script>
// <style src="@theme/styles/theme.styl" lang="stylus"></style>
// <style src="prismjs/themes/prism-tomorrow.css"></style>
// <style lang="stylus" scoped>
// @require '@theme/styles/mode.styl'
// </style>
<style  scoped>
.books-wrapper {
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
}
</style>