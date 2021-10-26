class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

class BSTIterator {
    node : TreeNode;
    constructor(root: TreeNode | null) {
        this.node = root;
    }

    next(): number {
       return 0;
    }

    hasNext(): boolean {
       if(this.node == null){
           return false;
       }
       else if(this.node.right != null){
           this.node = this.node.right;
       }
       else{
           
       }
    }
}
