import React from "react";
import { Dialog, DialogContent, ListItem, ListItemText } from "@material-ui/core";
import useBoolean from "src/hooks/useBoolean";

const IssueListItem = ({ title, bodyHTML }) => {
  const { value: isDialogOpened, setTrue: showDialog, setFalse: hideDialog } = useBoolean(false);

  return (
    <>
      <ListItem
        button
        onClick={showDialog}
      >
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Dialog
        maxWidth="xl"
        open={isDialogOpened}
        onClose={hideDialog}
      >
        <DialogContent>
          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IssueListItem;
