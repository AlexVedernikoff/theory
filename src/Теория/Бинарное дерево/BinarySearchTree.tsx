import React from "react";
import s from "./BinarySearchTree.module.scss";

class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: Node | null;
  constructor() {
    this.root = null; // по умолчанию создаётся дерево с пустым родительским узлом.
  }
  add(value: number) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode; // ecли root node === null, записываем в него value.
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.value === currentNode.value) return;
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  preOrder(node, callback) {}
  traverseDFS(callback, method) {
    if (method === "preOrder") {
    }
  }
  traverseBFS() {}
}

export const BinarySearchTree = () => {
  const myTree = new BinaryTree();
  const Values = [8, 7, 9, 5, 10, 20, 5, 2, 11];
  Values.forEach((value) => {
    myTree.add(value);
  });
  // console.log("myTree = ", myTree);
  return (
    <>
      <h1>Бинарное дерево</h1>
      <VisualTree tree={myTree} />
    </>
  );
};

interface IProps {
  tree: BinaryTree;
}

interface IDrawNodeProps {
  node: Node | null;
}

function DrawNode({ node }: IDrawNodeProps) {
  const { value, left, right } = node || {};
  console.log("value, left, right = ", value, left, right);
  return (
    <>
      <div>{value}</div>
      {left && <DrawNode node={left} />}
      {right && <DrawNode node={right} />}
    </>
  );
}

function VisualTree({ tree }: IProps) {
  console.log("Дерево, которое мы передаём в компонент  VisualTree = ", tree);
  const { value, left, right } = tree.root || {};
  return (
    <>
      <DrawNode node={tree.root} />
      <div className={`${s.nodeContainer}`}>
        <div className={`${s.node}`}>{value}</div>
        {left && (
          <>
            <svg className={`${s.svgLeft}`} viewBox="-150 0 150 200">
              <path
                className={`${s.path}`}
                d="M 0,0 C0,100 -150,100 -150,200"
                fill="transparent"
                stroke="black"
              />
            </svg>
            <div className={`${s.node}`}>{left.value}</div>
          </>
        )}
        {right && (
          <>
            <svg className={`${s.svgRight}`} viewBox="0 0 150 200">
              <path
                className={`${s.path}`}
                d="M 0,0 C0,100 150,100 150,200"
                fill="transparent"
                stroke="black"
              />
            </svg>
            <div className={`${s.node}`}>{right.value}</div>
          </>
        )}
      </div>
    </>
  );
}
