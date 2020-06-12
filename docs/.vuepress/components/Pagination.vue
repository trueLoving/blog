<template>
  <div class="pagination-container">
    <div style="display:inline-block">
      <div v-if="pages > 5">

        <span
          v-if="currentPage<5"
          v-for="item in 5"
          :key="item"
          class="pagination-item"
          :class="item==currentPage?'active':''"
          @click="clickItem($event)"
        >{{item}}</span>

        <span
          v-if="currentPage>=5"
          class="pagination-item"
          :class="1==currentPage?'active':''"
          @click="clickItem($event)"
        >1</span>
        <span class="pagination-item" v-if="currentPage>=5">...</span>
        <span
          v-if="currentPage>=5&&pages-currentPage>=5"
          v-for="item in showPages"
          :key="item"
          class="pagination-item"
          @click="clickItem($event)"
          :class="item-1==currentPage?'active':''"
        >{{item-1}}</span>



        <span
          v-if="pages-currentPage<5"
          v-for="item in 4"
          :key="item"
          class="pagination-item"
          @click="clickItem($event)"
          :class="pages+item-5==currentPage?'active':''"
        >
          {{pages+item-5}}
        </span>
        <span class="pagination-item" v-if="pages-currentPage>5">...</span>
        <span
          class="pagination-item"
          :class="pages==currentPage?'active':''"
          @click="clickItem"
        >{{pages}}</span>
      </div>

      <div v-else>
        <span
          class="pagination-item"
          v-for="item in pages"
          :key="item"
          :class="item==currentPage?'active':''"
          @click="clickItem"
        >{{item}}</span>
      </div>
    </div>

    <div class="operation-container">
      <div class="prev" @click="clickPrev">
        <div class="prev-direction"></div>
      </div>
      <div class="next" @click="clickNext">
        <div class="next-direction"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    pages() {
      return Math.ceil(this.total / this.limit);
    },
    showPages() {
      const currentPage = this.currentPage;
      let result = [];

      for (let i = 1; i <= 5; i++) {
        if (currentPage * 1 + i < this.pages + 1) {
          result.push(currentPage * 1 + i);
        }
      }

      return result;
    }
  },
  data() {
    return {
      total: 21,
      limit: 10,
      currentPage: 1
    };
  },
  methods: {
    pagination() {
      this.$emit("pagination", this.currentPage, this.limit);
    },
    clickItem(event) {
      const clickPage = event.target.innerHTML;
      this.currentPage = clickPage;
    },
    clickPrev() {
      if(this.currentPage===1){
        alert('已到达第一页');
        return;
      }
      this.currentPage--;
    },
    clickNext() {
      if(this.currentPage===this.pages){
        alert('已到达最后一页');
        return;
      }
      this.currentPage++;

    }
  }
};
</script>


<style scoped>
.pagination-container {
  width: 80%;
  margin: 100px auto;
  font-family: "PingFang SC", "å¾®è½¯é›…é»‘", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
  transform: scale(0.8);
}

.pagination-item {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  height: 36.4px;
  line-height: 36.4px;
  width: 32px;
  color: #0dce9e;
  background-color: rgb(244, 245, 246);
  padding: 7px 15px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 6px;
  margin-right: 5px;
  transition: 0.8 all ease-in-out;
}

.active,
.pagination-item:hover,
.prev:hover,
.next:hover {
  background: #0dce9e;
  color: #fff;
}

.operation-container {
  display: flex;
  float: right;
}

.prev {
  width: 32px;
  height: 36.4px;
  padding: 7px 15px;
  background-color: rgb(244, 245, 246);
  margin-right: 5px;
  line-height: 36.4px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 6px;
  position: relative;
}

.prev-direction {
  height: 10px;
  width: 10px;
  border-top: 4px solid rgba(128, 128, 128, 0.336);
  border-right: 4px solid rgba(128, 128, 128, 0.336);
  position: absolute;
  top: 50%;
  left: 56%;
  transform: translate(-50%, -50%) rotate(-135deg);
  transition: 0.8 all ease-in-out;
}

.prev:hover .prev-direction {
  border-top: 5px solid white;
  border-right: 5px solid white;
}

.next {
  width: 32px;
  height: 36.4px;
  padding: 7px 15px;
  background-color: rgb(244, 245, 246);
  line-height: 36.4px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 6px;
  position: relative;
}

.next-direction {
  height: 10px;
  width: 10px;
  border-top: 4px solid rgba(128, 128, 128, 0.336);
  border-right: 4px solid rgba(128, 128, 128, 0.336);
  position: absolute;
  top: 50%;
  right: 33%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.8 all ease-in-out;
}

.next:hover .next-direction {
  border-top: 5px solid white;
  border-right: 5px solid white;
}
</style>