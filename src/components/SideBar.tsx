import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButton,Typography } from "@mui/material";
import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeleteIcon from '@mui/icons-material/Delete';
import { Routes, Route, Link, NavLink } from "react-router-dom";

const ARRICON = [<LightbulbIcon sx={{ color: 'white'}}/>,<DeleteIcon sx={{ color: 'white'}} />]
const ARRPAGES:Array<string>= ['/','/delete']

export default function SideBar({toggle,open,setPages}) {
 
  let activeStyle = {
    color:'white',
    textDecoration: "underline"
  };

  let noActiveStyle = {
    textDecoration: "none",
    color:'white'
  };
 
  return (
  <>
  
    <Drawer anchor="left" open={open}  onClose={toggle(false)} >
    <Box
      sx={{ width: 'auto',backgroundColor: 'primary.dark',height:'100%'}}
      role="presentation"
      onClick={toggle(false)}
      onKeyDown={toggle(false)}
     
    >
      
      <List >
      {['Заметки','Корзина'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <NavLink 
            to={ARRPAGES[index]} 
            style={({ isActive }) =>
              isActive ? activeStyle : noActiveStyle
            }
            onClick={()=>{setPages(ARRPAGES[index])}}
                >
            <ListItemButton>
              <ListItemIcon>
                {ARRICON[index]}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
    </Drawer>
    </>
    
  );
}
