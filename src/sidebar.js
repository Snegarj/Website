
import Header from './common/header';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from './cards/card';
import { useEffect, useState } from 'react';

import "./App.css";
import "./index.css";
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchUsers from './sample/users';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  let [category, setcategory] = useState('');
  const dispatch = useDispatch();
  const storedata = useSelector(data => data);
  const ifcategory = category ? `/category/${category}` : '';
  useEffect(() => {
    let api = `https://fakestoreapi.com/products${ifcategory}`;
 
    fetch(api).then(res => res.json())
      .then(json => {
        dispatch({ type: "ADD_PRODUCT", payload: json });

      });
  }, [category,ifcategory])


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
   
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Header setcategory={setcategory} category={category} />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3 }}>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        {/* HOC EXAMPLE <SearchUsers/> */}
          <h1 className="mx-auto max-w-4xl font-display  font-medium tracking-tight text-slate-900 sm:text-2xl">
            <span className="relative text-4xl whitespace-nowrap text-blue-600">
              Trending Collections
            </span>
            <span className='ml-1 text-4xl '>  Keeping Shopping ...</span></h1>
          {/* <h5 className="mx-auto mt-6 max-w-2xl text- tracking-tight text-slate-700">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</h5>
        */}
        </div>
        {/* React Cards  */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {
              storedata && storedata.product.map((product) => {


                return (
                  <>
                    <Grid item xs={3} key={product.id}  >
                      <Cards product={product}  />

                    </Grid>


                  </>
                )
              })

            }

          </Grid>

        </Box>


      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;