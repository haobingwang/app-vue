<template>
  <nav>
    <ul>
      <li :class="{ active: item.name === selected.name }" v-for="(item, index) of list" :key="index" @click="handleClick(item)">{{item.name}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavList',
  props: {
    selected: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick (item) {
      alert(item.name)
      this.$emit('markActive', item)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  overflow-x: scroll;
  overflow-y: hidden;
  /* fix iOS 滚动不平滑 */
  -webkit-overflow-scrolling : touch;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    white-space: nowrap;/* 不换行 */
    height: 40px;

    li {
      display: inline-block;

      font-size: 1em;
      text-align: center;

      height: 20px;
      line-height: 20px;

      margin: 10px 0;
      padding: 0 1em;

      border-right: 1px solid rgba($color: #979797, $alpha: 0.5);

      &:last-child {
        border-right: none;
      }

      &.active {
        color: #4E93ED;
      }
    }
  }
  border-top: 1px solid rgba($color: #979797, $alpha: 0.5);
  border-bottom: 1px solid rgba($color: #979797, $alpha: 0.5);
}
</style>
