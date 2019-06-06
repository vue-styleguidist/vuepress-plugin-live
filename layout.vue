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
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.preview-code .block {
  width: 100%;
  min-height: 150px;
}

.editor {
  background-color: #282c34;
}

.preview-code .editor pre {
  margin: 0;
  outline: none !important;
  border-radius: 0;
  overflow-wrap: break-word;
  overflow: auto;
  tab-size: 2;
  height: min-content;
}

.preview-code .preview {
  background-color: rgb(249, 245, 245);
  text-align: center;
  box-sizing: border-box;
  padding: 12px;
}
</style>
