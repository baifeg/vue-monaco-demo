import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import * as monaco from 'monaco-editor'
// import language as vLang from 'monaco-editor/esm/vs/basic-languages/javascript/javascript'
import vCompletion from './libs/custom-completion'
import sqlBuilder from './libs/sqlBuilder'

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

var tips =`
/**
 * 表单数据json字符串
 * @type {String}
 */
var val="";
/**
 * 表单发起用户id
 * @type {String}
 */
var currentUserId="";
/**
 * 表单对象
 * @property {String} value 值
 * @property {String} name 名称
 */
form={
	/**
	 * 值
	 * @type {String}
	 */
	value: "",
	/**
	 * 名称
	 * @type {String}
	 */
	name: ""
}
`

monaco.languages.typescript.javascriptDefaults.addExtraLib(sqlBuilder, 'sqlBuilder.js');
monaco.languages.typescript.javascriptDefaults.addExtraLib(tips, 'input_param.js');

// monaco.languages.typescript.javascriptDefaults.addExtraLib("var H = 'aaa'", 'sqlBuilder.js');

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
})
