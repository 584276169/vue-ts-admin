<template>
        <div class="container">
              <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
        </div>
</template>
    
<script setup lang='ts'>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' 

const editorRef = shallowRef()
const toolbarConfig =ref({})
const editorConfig = { placeholder: '请输入内容...' }
const mode='default'
const valueHtml = ref('<p>hello</p>')
const handleCreated = (editor:any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    const editorInit = () => {

    }
onMounted(() => {
        editorInit()
})
onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })
</script>
    
<style lang="scss" scoped>
</style>