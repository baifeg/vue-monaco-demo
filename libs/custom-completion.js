// custom-completion.js
/* eslint-disable no-template-curly-in-string
  API 文档地址
  https://microsoft.github.io/monaco-editor/api/enums/monaco.languages.completionitemkind.html#snippet
 */
export default [  
 /**   * 内置函数   */  
 {    
    label: '_ABS(val:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_ABS(${1:val})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回指定参数的绝对值'
  },  {    
    label: '_COS(val:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_COS(${1:val})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '求指定角度的余弦值'
  },  {
    label: '_MAX(list)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MAX(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回列表中的最大值'
  },  {
    label: '_MIN(list)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MIN(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回列表中的最小值'
  },  {
    label: '_MOD(x:number, y:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MOD(${1:x}, ${2:y})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '求 x / y 的余数'
  },  {
    label: '_PI()',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_PI()',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回圆周率3.1415...'
  },  {
    label: '_ROUND(val:number, x:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_ROUND(${1:val}, ${2:x})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '对val四舍五入取值，x为小数点后的保留位数'
  }, {
    label: '_SQRT(val:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_SQRT(${1:val})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '求val的开平方'
  },  {
    label: '_COUNT(list)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_COUNT(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '统计列表个数'
  },  {
    label: '_SUM(list)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_SUM(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '求列表数值总和'
  }, {
    label: '_STARTSWITH(text:string, start_exp:string)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_STARTSWITH(${1:text}, ${2:start_exp})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '判断字符串text是否以字符串start_exp开头'
  }, {
    label: '_CONTAINS(list, element)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_CONTAINS(${1:list}, ${2:element})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '判断列表或字符串list中是否包含element'
  }, {
    label: '_LEFT(text:string[, index:number]) ',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_LEFT(${1:text}[, ${2:index}])',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '从文本字符串的第一个字符开始返回指定个数的字符，text为字符串，index为指定个数，若不填则取默认值1'
  }, {
    label: '_LEN(list)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_LEN(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回列表或字符串长度'
  }, {
    label: '_REPLACE(old_text:string, start_index:number, count:number, new_text:string)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_REPLACE(${1:old_text}, ${2:start_index}, ${3:count}, ${4:new_text})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '使用其他文本字符串并根据所指定的字符数替换某文本字符串中的部分文本，old_text为某文本字符串，start_index为要替换的起始位置编号，count为要替换的字符个数，new_text为替换后的字符串'
  }, {
    label: '_SUBSTITUTE(text:string, old_text:string, new_text:string, times:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_SUBSTITUTE(${1:text}, ${2:old_text}, ${3:new_text}, ${4:times})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '将目标字符串中某个字符替换成指定字符，text为需要替换的目标字符串，old_text是目标字符串中需要被替换的字符，new_text为替换后的字符，times为需要替换的次数'
  }, {
    label: '_RIGHT(text:string, index:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_RIGHT(${1:text}[, ${2:index}])',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '从文本字符串的最后一个字符开始返回指定个数的字符，text为文本字符串，index为指定个数，若不填则返回text文本字符串'
  }, {
    label: '_LOWER(text:string)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_LOWER(${1:text})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '将文本字符串text中所有大写字母转换为小写'
  }, {
    label: '_UPPER(text:string)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_UPPER(${1:text})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '将文本字符串text中所有小写字母转换为大写'
  }, {
    label: '_TRIM(text:string)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_TRIM(${1:text})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '去掉文本字符串text中的首尾空格'
  }, {
    label: '_NOW()',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_NOW()',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回当前时间，yyyy-MM-dd hh:mm:ss'
  }, {
    label: '_YEAR(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_YEAR(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date的年份'
  }, {
    label: '_MONTH(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MONTH(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date的月份，1~12'
  }, {
    label: '_HOUR(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_HOUR(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date的小时部分'
  }, {
    label: '_MINUTE(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MINUTE(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date的分钟部分'
  }, {
    label: '_QUARTER(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_QUARTER(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date所属季度，1~4'
  }, {
    label: '_TODAY()',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_TODAY()',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回今天的日期，yyyy-MM-dd'
  }, {
    label: '_WEEKDAY(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_WEEKDAY(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date为星期几'
  }, {
    label: '_WEEKNUM(date)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_WEEKNUM(${1:date})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回date为一年中的第几周'
  }, {
    label: '_ADDDAY(date, days:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_ADDDAY(${1:date}, ${2:days})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回指定日期date加上/减去指定天数days之后的日期'
  }, {
    label: '_ADDYEAR(date, years:number)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_ADDYEAR(${1:date}, ${2:years})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '返回指定日期date加上/减去指定年数years之后的日期'
  }, {
    label: 'invokeCustomInterface(url)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'invokeCustomInterface(${1:url})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '调用内部接口'
  }, {
    label: 'invokExternalInterface(url)',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'invokExternalInterface(${1:url})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '调用外部接口'
  }, 
  /**   * SqlBuilder   */  
  {
    label: 'select-where-list',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'SqlBuilder.select().columns(${1:col1}, ${2:col2}, ${3:col3})',
      '\t.from(${4:table})',
      '\t.where(${6:left}, ${7:compare}, ${8:right})',
      '\t.list()'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: '带条件查询，返回JSONArray',
  }, 
]