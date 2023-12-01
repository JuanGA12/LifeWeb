import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import styled from '@emotion/styled';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageDialog({ open, setOpen, image }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="z-50 left-0 fadingElement" onClose={handleClose}>
          <div className="w-full h-full flex justify-center items-center overflow-hidden">
            <CloseIcon
              className="absolute top-3 right-3 cursor-pointer"
              onClick={handleClose}
            />
            <div className="m-2 md:m-5 w-full md:w-2/5">
              <img src={image} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
