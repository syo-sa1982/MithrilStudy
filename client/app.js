/**
 * Model
 */
var Todo = (function () {
    function Todo(description) {
        this.description = m.prop(description);
        this.done = m.prop(false);
    }
    return Todo;
})();
// ビュー・モデルは表示されているTodoのリストを管理し、
// 作成が完了する前のTodoの説明を格納したり、
// 作成が可能かどうかを判定するロジックや、
// Todoが追加された後にテキスト入力をクリアする責務を持つ
var todoVM;
(function (todoVM) {
    // export var done: MithrilProperty<boolean>;
    /**
     * 初期化
     */
    function init() {
        todoVM.todoList = m.prop([]);
        todoVM.description = m.prop('');
        // todoVM.done = m.prop<boolean>(false);
    }
    todoVM.init = init;
    /**
     * Todoの追加をしてdescriptionをクリア
     */
    function add() {
        if (todoVM.description()) {
            todoVM.todoList().push(new Todo(todoVM.description()));
            todoVM.description('');
        }
    }
    todoVM.add = add;
})(todoVM || (todoVM = {}));
/**
 * Controller
 * コントローラは、モデルの中のどの部分が、現在のページと関連するのかを定義している
 * この場合は１つのビュー・モデルですべてを取り仕切っている
 */
function controller() {
    todoVM.init();
    return null;
}
/**
 * View
 * @returns {aniy}
 */
var view = function (ctrl) {
    return m('html', [
        m('body', [
            m('input', { onchange: m.withAttr('value', todoVM.description), value: todoVM.description() }),
            m('button', { onclick: todoVM.add }, '追加'),
            m('table', [
                todoVM.todoList().map(function (task, index) {
                    return m('tr', [
                        m('td', [
                            m('input[type=checkbox]', { onclick: m.withAttr('checked', task.done), checked: task.done() })
                        ]),
                        m('td', { style: { textDecoration: task.done() ? 'line-through' : 'none' } }, task.description()),
                    ]);
                })
            ])
        ])
    ]);
};
window.onload = function () {
    m.mount(document.getElementById('root'), { controller: controller, view: view });
};
