import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';

interface Props {
  show: boolean;
  onClose: () => void;
  title: string;
  subTitle: string | undefined;
  onAgree: () => void;
  reason: string;
  reasonError:boolean;
  onChangeReason: (e: string) => void;
}

export default function ConfirmAlertDialog(props: Props) {
  const { show, onClose, title, subTitle, onAgree , onChangeReason , reason , reasonError} = props;

  return (
    <div>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {subTitle}
          </DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            value={reason}
            error={reasonError}
            id='name'
            label='Reason'
            type='text'
            fullWidth
            variant='standard'
            onChange={(e) => onChangeReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
