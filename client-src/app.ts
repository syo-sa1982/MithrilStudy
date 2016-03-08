/// <reference path="../node_modules/mithril/mithril.d.ts" />
import MithrilProperty = _mithril.MithrilProperty;
import MithrilVirtualElement = _mithril.MithrilVirtualElement;
import MithrilController = _mithril.MithrilController;

/**
 * Model
 */
class Todo {
    description: MithrilProperty<string>;
    done: MithrilProperty<boolean>;

    constructor(description:string) {
        this.description = m.prop<string>(description);
        this.done = m.prop<boolean>(false);
    }
}