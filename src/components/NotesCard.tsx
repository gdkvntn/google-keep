import { Button, Card, CardContent, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


export default function NotesCard({deleteNote,updateCardOpen,notes,returnNote,page,filterNotes}) {
  
    
   
  return (<>
  {filterNotes(notes).map((el,i)=>{
   return   ( 
    <Card sx={{ minWidth: 275,position:'relative',cursor:'pointer'}} key={i} >
        <CardContent onClick={()=>updateCardOpen(i)}>
          <Typography variant='h6' color="text.secondary" gutterBottom>
            {el.title}
          </Typography>
          <Typography variant="body1">
           {el.text}
          </Typography>
        </CardContent>
        <CloseIcon sx={{position:'absolute',top:5,right:5}} onClick={()=>deleteNote(i)}/>
        {page==='/'?null:<Button onClick={()=>returnNote(i)}>return</Button>}
        
      </Card>)
    })}
  
  </>    
   
 )
}   
