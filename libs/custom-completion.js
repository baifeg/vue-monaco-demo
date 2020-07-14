// custom-completion.js
/* eslint-disable no-template-curly-in-string */
export default [  
 /**   * 内置函数   */  
 {    
    label: '_ABS',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_ABS(${1:number})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '返回指定参数的绝对值'
  },  {    
    label: '_COS',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_COS(${1:number})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '求指定角度的余弦值'
  },  {
    label: '_MAX',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MAX(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '返回列表中的最大值'
  },  {
    label: '_MIN',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '_MIN(${1:list})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '返回列表中的最小值'
  },  {
    label: 'isEmpty',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'isEmpty(${1:str})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '判断str是否为空'
  },  {
    label: 'isEqual',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'isEqual(${1:str1}, ${2: str2})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '判断str是否为空'
  },  {
    label: 'isContain',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'isContain(${1:str})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '判断数据项中是否包含str'
  }, {
    label: 'getJsonInt',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'getJsonInt(${1:path})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '根据path获取JSON数据中作为整数返回的值'
  },  {
    label: 'getJsonDouble',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'getJsonDouble(${1:path})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '根据path获取JSON数据中作为整数返回的值'
  },  {
    label: 'getJsonSize',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'getJsonSize(${1:path})',
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '根据path获取JSON数据中作为数组类型的数据的长度'
  },
  /**   * 语句   */  
  {
    label: 'IF-ELSE',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [      
      'IF ${1:condition} THEN',
      '\t$0',
      'ELSE',
      '\t$0',
      'END'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: 'If-Else Statement'
  },  {
    label: 'WHILE-DO',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'WHILE ${1:condition} DO',
      '\t$0',
      'END'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: 'WHILE-DO Statement'
  }, {
    label: 'select-where-list',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'SqlBuilder.select().columns(${1:col1}, ${2:col2}, ${3:col3})',
      '\t.from(${4:table})',
      '\t.where(${6:left}, ${7:compare}, ${8:right})',
      '\t.list()'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: '带条件查询，返回JSONArray'
  }

]