/// <reference path='../mithril.d.ts' />
import MithrilProperty = _mithril.MithrilProperty;
import MithrilVirtualElement = _mithril.MithrilVirtualElement;
import MithrilController = _mithril.MithrilController;
import MithrilBasicProperty = _mithril.MithrilBasicProperty;

/**
 * Model
 */
class Todo {
  description: MithrilProperty<string>;
  done: MithrilBasicProperty<boolean>;

  constructor(description: string) {
    this.description = m.prop<string>(description);
    this.done = m.prop<boolean>(false);
  }
}
// ビュー・モデルは表示されているTodoのリストを管理し、
// 作成が完了する前のTodoの説明を格納したり、
// 作成が可能かどうかを判定するロジックや、
// Todoが追加された後にテキスト入力をクリアする責務を持つ
namespace todoVM {
  export var description: MithrilBasicProperty<string>;
  export var todoList: MithrilProperty<Todo[]>;
  // export var done: MithrilProperty<boolean>;
  /**
   * 初期化
   */
  export function init () {
    todoVM.todoList = m.prop<Todo[]>([]);
    todoVM.description = m.prop<string>('');
      // todoVM.done = m.prop<boolean>(false);
  }

  /**
   * Todoの追加をしてdescriptionをクリア
   */
  export function add () {
    if (description()) {
      todoVM.todoList().push(new Todo(description()));
      todoVM.description('');
    }
  }
}

/**
 * Controller
 * コントローラは、モデルの中のどの部分が、現在のページと関連するのかを定義している
 * この場合は１つのビュー・モデルですべてを取り仕切っている
 */
function controller<T>(): T {
  todoVM.init();
  return null;
}

/**
 * View
 * @returns {aniy}
 */
 var view = (ctrl: MithrilController): MithrilVirtualElement<string> => {
   return m('html', [
     m('body', [
       m('input', {onchange: m.withAttr('value', todoVM.description), value: todoVM.description()}),
       m('button', {onclick: todoVM.add}, '追加'),
       m('table', [
         todoVM.todoList().map((task: Todo, index: number) => {
           return m('tr', [
             m('td', [
               m('input[type=checkbox]', {onclick: m.withAttr('checked', task.done), checked: task.done()})
             ]),
             m('td', {style: {textDecoration: task.done() ? 'line-through' : 'none'}}, task.description()),
           ]);
         })
       ])
     ])
   ]);
 };
 window.onload = () => {
  m.mount(document.getElementById('root'),  {controller: controller, view: view});
};
