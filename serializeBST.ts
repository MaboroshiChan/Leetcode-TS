import { Tree } from "istanbul-lib-report";
import { Children } from "react";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    var res: number[] = [];

    const helper = (root: TreeNode | null)=>{
        if(root == null){
            res.push(null);
            return;
        }
        else{
            res.push(root.val);
            helper(root.left);
            helper(root.right);
        }
    }
    helper(root);
    return res.toString();
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
   let arr: number[] = eval(data);
   const construct = (i : number): [TreeNode | null, number] => {
       if(i >= arr.length){
           return [null, i + 1];
       }
       if(arr[i] == null){
           return [null, i + 1];
       }
       else{
           let [left, lidx] = construct(i + 1);
           console.log(lidx);
           let [right, ridx] = construct(lidx + 1);
           return [new TreeNode(arr[i], left, right), ridx + 1]
       }
   }
   let [res, _] = construct(0);
   return res;
};

function verticalOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let queue: [TreeNode, number][] = [[root, 100]]; 
    let dict : {[a : number]: Array<number>} = {};
    while(queue.length > 0){
        queue = queue.flatMap(tuple=>{
            let node = tuple[0];
            let index = tuple[1];
            let out: [TreeNode, number][] = [];
            if(index in dict){
                dict[index].push(node.val);
            }
            else{
                dict[index] = [node.val];
            }
            if(node.left != null){
                out.push([node.left, index - 1]);
            }
            if(node.right != null){
                out.push([node.right, index + 1]);
            }
            return out;
        });
    }
    return Object.values(dict);
};

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let res: number[][] = [];
    let queue: TreeNode[] = [root];
    while(queue.length > 0){
        res.push(queue.map(node=>node.val));
        queue = queue.flatMap(node=>[node.left, node.right]
            .filter(x=>x==null));
    }
    return res;
};




console.log(deserialize("[1,2,null,null,3,null,null]"));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */