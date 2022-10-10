import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField} from '@mui/material'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  borderRadius:'20px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({updateOpen,handleClose,updTitle,setUpdTitle,updText,setUpdText}) {
  
  
 

    
  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <TextField 
          onChange={(e)=>setUpdTitle(e.target.value)}
            id="headline" 
            value={updTitle}
            variant="standard"/>
            
          </Typography>
          <TextField 
          onChange={(e)=>setUpdText(e.target.value)}
            value={updText}
            sx={{mt:2}} 
            fullWidth
            multiline 
            id="notes" 
            variant="standard" 
            rows={4}/>
        </Box>
      </Modal>
    </div>
  );
}
