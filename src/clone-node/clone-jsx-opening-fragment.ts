import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneJsxOpeningFragment(_node: TS.JsxOpeningFragment, options: CloneNodeVisitorOptions<TS.JsxOpeningFragment>): TS.JsxOpeningFragment {
	return options.factory.createJsxOpeningFragment();
}
