import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocPrivateTag(node: Mutable<TS.JSDocPrivateTag>, options: CloneNodeVisitorOptions<TS.JSDocPrivateTag>): TS.JSDocPrivateTag {
	const baseNode = options.factory.createJSDocPrivateTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocPrivateTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
