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
  display: flex;
  flex-flow: row-reverse wrap;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.preview-code .block {
  flex-grow: 1;
  width: 50%;
}

.preview-code .editor .prism-editor-wrapper {
  height: 100%;
}

.preview-code .editor pre {
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  border-radius: 0;
}

.preview-code .preview {
  background-color: rgb(249, 245, 245);
  text-align: center;
  box-sizing: border-box;
  padding: 12px;
}
</style>
