import { TreeView } from "@mui/x-tree-view/TreeView"
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem"
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as NoExpand } from "./assets/noExpand.svg"
import { ReactComponent as Expand } from "./assets/expand.svg"
import { ReactComponent as Collapse } from "./assets/collapse.svg"

const StyledTreeItem = styled(TreeItem)(() => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed #ffffffde`,
  },
}));


function App() {
  const treeData = [
    {
      id: "root",
      name: "Root",
      children: [
        {
          id: uuidv4(),
          name: "Child - 1",
          children: [
            {
              id: uuidv4(),
              name: "Child - 1-1",
              children: [
                {
                  id: uuidv4(),
                  name: "Child - 2-1",
                },
                {
                  id: uuidv4(),
                  name: "Child - 2-2",
                  children: [
                    {
                      id: uuidv4(),
                      name: "Child - 2-2-1",
                    },
                    {
                      id: uuidv4(),
                      name: "Child - 2-2-2",
                    },
                  ],
                },
              ],
            },
            {
              id: uuidv4(),
              name: "Child - 1-2",
              children: [
                {
                  id: uuidv4(),
                  name: "Child - 2-1",
                },
                {
                  id: uuidv4(),
                  name: "Child - 2-2",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          name: "Child - 2",
          children: [
            {
              id: uuidv4(),
              name: "Child - 2-1",
            },
            {
              id: uuidv4(),
              name: "Child - 2-2",
            },
          ],
        },
        {
          id: uuidv4(),
          name: "Child - 3",
        },
      ],
    },
  ]

  interface item {
    id: string
    name: string
  }
  interface Inodes extends item {
    children?: item[]
  }

  const renderTree = (nodes: Inodes) => (
    <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  )

  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<Collapse />}
        defaultExpandIcon={<Expand />}
        defaultEndIcon={<NoExpand />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        {treeData.map((treeItem) => renderTree(treeItem))}
      </TreeView>
    </>
  )
}

export default App

export const mockData = {
  version: "1.0.0",
  expressions: [
    [
      {
        type: "lambda",
        id: "i_0",
        body: {
          type: "lambda",
          id: "i_1",
          body: {
            type: "lambda",
            id: "i_2",
            body: {
              type: "lambda",
              id: "i_3",
              body: {
                type: "variable",
                id: "i_0",
              },
            },
          },
        },
      },
      {
        type: "delay",
        id: "delay",
        body: {
          type: "lambda",
          id: "i_4",
          body: {
            type: "variable",
            id: "i_4",
          },
        },
      },
    ],
    {
      type: "lambda",
      id: "i_5",
      body: {
        type: "variable",
        id: "i_5",
      },
    },
  ],
}
