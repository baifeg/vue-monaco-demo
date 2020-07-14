<template>
	<div>
		<MonacoEditor class="editor" v-model="code" language="javascript" />
	</div>
</template>

<script>
import MonacoEditor from 'vue-monaco'

export default {
  components: {
    MonacoEditor
  },
  data() {
    return {
      code: 'const noop = () => {}'
    }
  }
};
</script>

<style>
.editor {
  width: 1000px;
  height: 800px;
}
</style>