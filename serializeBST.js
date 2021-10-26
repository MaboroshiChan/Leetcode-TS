var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
/*
 * Encodes a tree to a single string.
 */
function serialize(root) {
    return JSON.stringify(root);
}
;
/*
 * Decodes your encoded data to tree.
 */
function deserialize(data) {
    var arr = eval(data);
    var construct = function (i) {
        if (i >= arr.length) {
            return [null, i + 1];
        }
        if (arr[i] == null) {
            return [null, i + 1];
        }
        else {
            var _a = construct(i + 1), left = _a[0], lidx = _a[1];
            console.log(lidx);
            var _b = construct(lidx + 1), right = _b[0], ridx = _b[1];
            return [new TreeNode(arr[i], left, right), ridx + 1];
        }
    };
    var _a = construct(0), res = _a[0], _ = _a[1];
    return res;
}
;
var t = new TreeNode(12, new TreeNode(1), new TreeNode(32));
console.log(serialize(t));
console.log(deserialize("[1,2,null,null,3,null,null]"));
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */ 
