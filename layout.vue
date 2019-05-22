<template>
  <div class="preview-code">
    <div class="preview block">
      <slot name="preview"></slot>
    </div>
    <div class="editor block">
      <slot name="editor"></slot>
    </div>
  </div>
</template>

<style>
.no-focus {
  outline: none !important;
}

.preview-code {
  display: flex;
  flex-flow: row-reverse wrap;
  border-radius: 6px;
  border: 1px solid rgb(247, 247, 247);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important;
}

.preview-code .editor {
  background-color: #2d2d2d;
  overflow: hidden;
}

.preview-code .block {
  flex-grow: 1;
  padding: 12px;
}

.preview-code .preview {
  background-color: rgb(249, 245, 245);
  text-align: center;
  min-width: 40%;
}
</style>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      document.querySelectorAll('pre').forEach(e => e.classList.add('no-focus'))
    }, 100)
  }
}
</script>
