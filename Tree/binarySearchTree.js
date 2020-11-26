'use strict';






class BinarySearchTree{
    constructor(){
        this._root = null;
    }

    // Insertion
    insert(value){
        let thisNode = {left: null, right: null, value: value};
        if(!this._root){
            this._root = thisNode;
        }else{
            let currentRoot = this._root;
            while(true){
                if(currentRoot.value > value){
                    if(currentRoot.left !== null){
                        currentRoot = currentRoot.left;
                    }else{
                        currentRoot.left = thisNode;
                        break;
                    }
                }else if( currentRoot.value < value){
                    if(currentRoot.right !== null){
                        currentRoot = currentRoot.right;
                    }else{
                        currentRoot.right = thisNode;
                    }
                }else{
                    break;
                }
            }
        }
       
    }

    //    *Tree Traversal*

    //1. Pre Order Traversal
    traversePreOrder(){
        let nodeStack = [], res = [];
        nodeStack.push(this._root);
        while(nodeStack.length){
            let node = nodeStack.pop();
            res.push(node.value);

            if(node.right)
                nodeStack.push(node.right);
            
            if(node.left)
                nodeStack.push(node.left);
        }

        console.log(res)
    }



    //2. In Order Traversal
    traverseInOrder(){
        let current = this._root,
            s = [],
            done = false,
            res = [];

        while(!done){
            if(current !== null){
                s.push(current)
                current = current.left;
            }else{
                if(s.length){
                    current = s.pop();
                    res.push(current.value);
                    current = current.right;
                }else{
                    done = true;
                }
            }
        }
        
        console.log(res);
    }



    //3. Post Order Traversal
    traversePostOrder(){
        let s1 = [],
            s2 = [],
            res = [];
        
        s1.push(this._root);

        while(s1.length){
            let node = s1.pop();
            s2.push(node);

            if(node.left){
                s1.push(node.left);
            }

            if(node.right){
                s1.push(node.right); 
            }
        }

        while(s2.length){
            let node = s2.pop();
            res.push(node.value)
        }

        console.log(res);
    }


    //4. Level Order Traversal
    traverseLevelOrder(){
        let root = this._root,
            queue = [],
            res = [];
        
        if(!root)return;
        queue.push(root);

        while(queue.length){
            let temp = queue.shift();
            res.push(temp.value);

            if(temp.left)queue.push(temp.left);
            
            if(temp.right)queue.push(temp.right);
        }

        console.log(res);
    }


    

};

let BST = new BinarySearchTree()
BST.insert(10);
BST.insert(20);
BST.insert(15);
BST.insert(25);
BST.insert(7);
BST.insert(9);
BST.insert(5);
console.log(BST._root);
console.log(`__________*PreOrederTraversal*___________`);
BST.traversePreOrder();
console.log(`__________*InOrederTraversal*___________`);
BST.traverseInOrder();
console.log(`__________*PostOrederTraversal*___________`);
BST.traversePostOrder();
console.log(`__________*LevelOrederTraversal*___________`);
BST.traverseLevelOrder();