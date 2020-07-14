import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import * as monaco from 'monaco-editor'
// import language as vLang from 'monaco-editor/esm/vs/basic-languages/javascript/javascript'
import vCompletion from './libs/custom-completion'

// 注册自定义语言
// monaco.languages.register({ id: 'jjs' });
// 为该自定义语言基本的Token
// monaco.languages.setMonarchTokensProvider('jjs', vLang);
// 为该语言注册一个语言提示器--联想
monaco.languages.registerCompletionItemProvider('javascript', {
	provideCompletionItems: () => {
		return { suggestions: vCompletion };
	}
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
})
