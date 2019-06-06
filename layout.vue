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

<style>
.preview-code {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.preview-code .editor pre {
  margin: 0;
  outline: none;
  border-radius: 0;
  overflow-wrap: break-word;
  overflow: auto;
  tab-size: 2;
}

.preview-code .preview {
  padding: 12px;
  background-color: rgb(249, 245, 245);
}
</style>
