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
//ビュー・モデルは表示されているTodoのリストを管理し、
//作成が完了する前のTodoの説明を格納したり、
//作成が可能かどうかを判定するロジックや、
//Todoが追加された後にテキスト入力をクリアする責務を持つ
namespace;
//# sourceMappingURL=app.js.map