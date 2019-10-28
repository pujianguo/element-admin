// quillEditor工具栏
export const editorToolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }], // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
  [{ 'direction': 'rtl' }], // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image', 'video'],
  ['clean'] // remove formatting button
]

// codemirror配置
export const codemirrorEditorOption = {
  tabSize: 2,
  styleActiveLine: true,
  line: true,
  mode: 'text/x-nginx-conf',
  lineNumbers: true, // 显示行号
  theme: 'solarized', // 设置主题
  keyMap: 'sublime', // 绑定sublime
  fullScreen: false, // 全屏模式
  matchBrackets: true, // 括号匹配
  indentWithTabs: true,
  readOnly: false,
  lineWrapping: true // 代码折行，false时，代码超出宽度会出现x轴滚动条
}
