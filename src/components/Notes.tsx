import { Accordion, AccordionDetails, AccordionSummary, Button, Container, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import NotesCard from './NotesCard.tsx'
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import Context from "../context/context";
import UpdateCard from './UpdateCard.tsx';



export default function Notes({setNotes,deleteNote,page,filterNotes,checked}) {
  const notes = useContext(Context)
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const [numCard,setNumCard]=useState(0)
  const [updTitle,setUpdTitle] = useState('')
  const [updText,setUpdText] = useState('')
  
  
  const [updateOpen,setUpdateOpen]=useState(false)
  
  
  let addNote=()=>{
    if(title.length || text.length){
      setNotes(()=>{
        return [...notes,{title:title,text:text}]
      })
    }
    
   setTitle('')
   setText('')
  
  }

  

  let updateCardOpen=(num)=>{
    setUpdateOpen(true)
    setNumCard(num)
    setUpdTitle( notes[num].title )
    setUpdText( notes[num].text )
     
  } 
  const handleCloseCard = () =>{
    notes[numCard].title =updTitle
    notes[numCard].text =updText
    setUpdateOpen(false);
  } 
  
  return (
    <Container sx={{mt: 5}}>
      <UpdateCard 
      updateOpen={updateOpen} 
      handleClose={handleCloseCard}
      updTitle={updTitle}
      setUpdTitle={setUpdTitle}
      updText={updText}
      setUpdText={setUpdText}
      />
      <Box sx={{maxWidth:500,mx:'auto'}}>
       <Accordion >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add a note</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField onChange={(e)=>setTitle(e.target.value)} 
        label="Заголовок" 
        id="headline" 
        value={title} 
        variant="standard"/>
        <TextField 
        onChange={(e)=>setText(e.target.value)}
        value={text} 
         sx={{mt:2}} 
         fullWidth
         multiline 
         label="Заметка..." 
         id="notes" 
         variant="standard" 
         rows={4}/>
        <Button sx={{mt:2}} variant="contained" onClick={()=>addNote()}>add</Button>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:5,
        mt:5}}
        style={checked?{flexDirection: 'row'}:{flexDirection: 'column'}}>
      <NotesCard 
      notes={notes} 
      deleteNote={deleteNote} 
      updateCardOpen={updateCardOpen}
      page={page}
      filterNotes={filterNotes}/>
      </Box>
      
    </Container>
  )
}
