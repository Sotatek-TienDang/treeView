import { useId } from "react";
import { UPLCItem } from "../interface";
import { StyledTreeItem } from "./styles";

interface Props {
  name: string;
  body?: UPLCItem | UPLCItem[];
}

function TreeNode({ name, body }: Props) {
  const id = Math.floor(Math.random() * 100000).toString()
  return body ? (
    <StyledTreeItem label={name} nodeId={id}>
      {Array.isArray(body) ? (
        <>
          {body.map((it, idx) => (
            <TreeNode name={it.name} body={it.body} key={idx} />
          ))}
        </>
      ) : (
        <TreeNode
          name={(body as UPLCItem).name}
          body={(body as UPLCItem).body}
        />
      )}
    </StyledTreeItem>
  ) : (
    <StyledTreeItem label={name} nodeId={id} />
  );
}

export default TreeNode;
