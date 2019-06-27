<template functional>
  <div class="preview-code">
    <div class="preview block">
      <slot name="preview"></slot>
    </div>
    <div class="editor block">
      <slot name="editor"></slot>
    </div>
  </div>
</template>

<style scoped>
.preview-code {
  border: 3px dashed green;
}
</style>