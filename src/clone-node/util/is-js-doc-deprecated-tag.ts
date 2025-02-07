import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocDeprecatedTag
 */
export function isJsDocDeprecatedTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocDeprecatedTag {
	// TypeScript 4.x
	if (("JSDocDeprecatedTag" in typescript) as never) {
		return typescript.isJSDocDeprecatedTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocDeprecatedTag;
}
