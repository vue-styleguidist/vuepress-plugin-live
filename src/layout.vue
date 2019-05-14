<template functional>
  <div class="preview-code">
    <div class="preview">
      <slot name="preview"></slot>
    </div>
    <div class="editor">
      <slot name="editor"></slot>
    </div>
  </div>
</template>
<style scoped>
.preview-code {
  display: flex;
  flex-direction: row-reverse;
  border-radius: 6px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.editor {
  width: 100%;
}

.preview {
  width: 100%;
  padding: 12px;
  background-color: #fff;
  text-align: center;
}

@media only screen and (max-width: 568px) {
  .preview-code {
    display: block;
  }

  .preview-code > div {
    width: auto;
  }
}

@media only screen and (max-width: 419px) {
  .preview-code {
    margin: 0.85rem -1.5rem;
    border-radius: 0;
  }
}
</style>

<style>
.content .preview-code .editor pre {
  border-radius: 0;
  margin: 0;
}
</style>