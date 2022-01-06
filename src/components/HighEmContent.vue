<template>
  <div class="high-em-content col-4 m-5 align-content-end p-0">
        <high-em-content-block></high-em-content-block>
      </div>
</template>

<script>
import HighEmContentBlock from "./HighEmContentBlock.vue";

export default {
  name: "HighEmContent",
  components: {
    HighEmContentBlock,
  },
};
</script>

<style>
.high-em-img{
    background-image: url(~@/assets/grey.jpeg);
    height: 600px;
    padding: 0;
}
</style>
