import React from "react";
import { Typography } from "@material-ui/core";
import { useLocation, useParams } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import Login from "../components/login";
import '../App.css'
import AppsIcon from '@mui/icons-material/Apps';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import App from "../App";
import { Link } from "react-router-dom";



function Dashboard(){
    const params = useParams();
    const location = useLocation();
    console.log(params);
    console.log(location);
    
        const [state, setState] = React.useState({
          
          left: false,
         
        });
      
            

        const toggleDrawer = (anchor, open) => (event) => {
          if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
          ) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
        };
      
        const list = (anchor) => (
          <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
            
      
            <ul>
            
            <Link to="/signup" className="lnk">DASHBOARD</Link>
          
         <li>
            <Link to="/home" className="lnk">Home</Link>
          </li>
          <li>
            <Link to="/login" className="lnk">LogIn</Link>
          </li>
          <li>
            <Link to="/login" className="lnk">SignOut</Link>  
          </li>
         
        </ul>
              {[].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
           
          </Box>
        );
      
        return (
          <div>
              <AppsIcon ></AppsIcon>
            {['DASHBOARD'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}

                  <div className="drw">
                  <Typography>Profile id = {params.id}</Typography>
                    <Typography variant="h3">Name = {location.state.email}</Typography>
                    <Link to="/login" className="lnks">SignOut</Link><br /> 
                    <img src={require('../chart.png')}  alt="chart" className="pic"/><br /> 
                    
                   
                    
                  </div>
          </div>
          
          
        );
      }



   
    
      




// </>
//     );






        
      
    
export default Dashboard;