'use client';

import { Alert, Box, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BadAlert = ({ message, open, setOpen }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default BadAlert;
