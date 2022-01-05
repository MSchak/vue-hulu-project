<template>
  <div class="high-em-content high-em-img row align-content-end p-0">
      <div class="col-4 m-5">
        <high-em-content-block></high-em-content-block>
      </div>
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
