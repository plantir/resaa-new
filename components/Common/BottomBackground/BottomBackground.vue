<template>
  <div class="bottom-background"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom-background {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(270deg, #13d1f3, #35d6c1);
  -webkit-clip-path: ellipse(100% 100% at 50% 100%);
  clip-path: ellipse(100% 100% at 50% 100%);
  z-index: -1;
  @media only screen and (max-width: 599px) {
    -webkit-clip-path: ellipse(200% 100% at 50% 100%);
    clip-path: ellipse(200% 100% at 50% 100%);
  }
}
</style>
