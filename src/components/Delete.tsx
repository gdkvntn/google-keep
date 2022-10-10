import { Container } from '@mui/material'
import React from 'react'
import NotesCard from './NotesCard.tsx'

export default function Delete({deleteForever,deleteNotes,returnNote,filterNotes,checked}) {

  
  const updateCardOpen=()=>{}

  return (
    <Container 
    sx={{
      mt: 5,
      gap:5,
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',}}
       style={checked?{flexDirection: 'row'}:{flexDirection: 'column'}}>
      <NotesCard 
      notes={deleteNotes} 
      deleteNote={deleteForever} 
      updateCardOpen={updateCardOpen}
       returnNote={returnNote}
       filterNotes={filterNotes}/>
    </Container>
  )
}
