const { Tree } = antd;

const { TreeNode } = Tree;

const json = [
  {
    title: 'parent 1',
    key: "0-0",
    children: [
        {
          title: 'parent 1-0',
          key: "0-0-0",
          children: [
            {
                title: 'parent 1-0-1',
                key: "0-0-0-1",
                children: []
            },
            {
                title: 'parent 1-0-2',
                key: "0-0-0-2",
                children: []
            }
          ]
        },
        {
          title: 'parent 1-1',
          key: "0-0-1",
          children: [
              {
                title: 'parent 1-1-1',
                key: "0-0-1-0",
                children: []
              }
          ]
        }
    ]
  }
]
class Demo extends React.Component {

  dfs = (node) => {
    return <TreeNode title={node.title} key={node.key}>
        { node.children.map(this.dfs) }
      </TreeNode>
  }
  render() {
    return (
      <Tree defaultExpandAll>
        { json.map(this.dfs) }
      </Tree>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);