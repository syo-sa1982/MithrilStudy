/**
 * Model
 */
var Todo = (function () {
    function Todo(description) {
        this.description = m.prop(description);
        this.done = m.prop(false);
    }
    return Todo;
}());
