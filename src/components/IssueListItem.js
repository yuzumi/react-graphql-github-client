import React, { useState } from "react";
import { Dialog, DialogContent, ListItem, ListItemText } from "@material-ui/core";

const IssueListItem = ({ title, bodyHTML }) => {
  const [dialogOpened, setDialodOpened] = useState(false);

  const showDialog = () => setDialodOpened(true);

  const hideDialog = () => setDialodOpened(false);

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
        open={dialogOpened}
        onClose={hideDialog}
      >
        <DialogContent>
          <div dangerouslySetInnerHTML={{__html: bodyHTML}} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default IssueListItem;
