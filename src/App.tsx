
import React ,{useEffect, useState} from "react";
import SideBar from "./components/SideBar.tsx";
import Header from "./components/Header.tsx";
import { Routes, Route} from "react-router-dom";
import Notes from "./components/Notes.tsx";
import Delete from "./components/Delete.tsx";
import Context from "./context/context";

function App() {

  let [page,setPages]=useState('')

  const [searchVal,setSearchVal]=useState('')
  const [checked, setChecked] = useState(true);
  const [notes,setNotes]=useState(()=>{
    
      const saved =localStorage.getItem('notes')
      const initialValue = JSON.parse(saved);
      return initialValue || []
    
  })
  const [deleteNotes,setDeleteNotes]=useState(()=>{
    
    const saved =localStorage.getItem('deleteNotes')
    const initialValue = JSON.parse(saved);
    return initialValue || []
  
})
  const[openBar,setOpenBar]=useState(false)

  const toggleSideBar =
  ( open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
   
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    
    setOpenBar(open);
};
    let deleteNote=(id)=>{
     
      setDeleteNotes(()=>{
      return  [...deleteNotes,notes.find((el,i)=>i===id)]
      })
       setNotes(notes.filter((el,i)=>i!==id))
       
      
    }

    let deleteForever=(id)=>{
      setDeleteNotes(deleteNotes.filter((el,i)=>i!==id))
    }

    let returnNote =(id)=>{
      setNotes(()=>{
        return [...notes,{title:deleteNotes[id].title,text:deleteNotes[id].text}]
      })
      deleteForever(id)
    }

    useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
    useEffect(()=>{
      localStorage.setItem('deleteNotes',JSON.stringify(deleteNotes))
    },[deleteNotes])

  const filterNotes =(arr)=>{
   return  arr.filter(el=>{
      return el.title.toLowerCase().includes(searchVal.toLowerCase())
    })
  }
      
  return (
    <Context.Provider value={notes}>
    <div className="App">

        <Header 
        toggle={toggleSideBar} 
        open={openBar}
        searchVal={searchVal}
        setSearchVal={ setSearchVal}
        checked={checked}
        setChecked={setChecked}
        />
        <SideBar toggle={toggleSideBar} open={openBar} setPages={setPages}/>
        <Routes>
                <Route path="/" element={<Notes 
                setNotes={setNotes} 
                deleteNote={deleteNote}
                page={page}
                filterNotes={filterNotes}
                checked={checked} />} />
                <Route path="/delete" element={<Delete 
                deleteNotes={deleteNotes} 
                deleteForever={deleteForever} 
                returnNote={returnNote}
                filterNotes={filterNotes}
                checked={checked} />} />
        </Routes> 

    </div>
    </Context.Provider>
  );
}

export default App;
