import { Button, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import "./navbar.css"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo2 from "../../assets/logo2.png"
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from '../ContactForm/ContactForm';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WindowIcon from '@mui/icons-material/Window';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
const NavigationBar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeDrawer = () => {
    setMenuOpen(false)
    handleScrollToTop()
  }
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeIconComponent = (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
  return (
    <>
      <HideOnScroll>
        <nav className=" px-8 py-4 flex justify-between items-cente sticky top-0 z-50 shadow-2xl bg-white">
          <a className="text-3xl font-bold leading-none cursor-pointer">
            {/* <img src={logo2} alt="" style={{ width: "60px" }} /> */}
            Logo
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={toggleMenu}>
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isNavbarActive ? 'active-navbar' : ''}`}>
            <li> <Button onClick={handleScrollToTop} className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" to="/" component={Link}>Home</Button></li>
            <li> <Button onClick={handleScrollToTop} className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" to="/about" component={Link}>About</Button></li>
            <li> <Button onClick={handleScrollToTop} className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" to="/services" component={Link}>Services</Button></li>
            <li> <Button onClick={handleScrollToTop} className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" to="/contact" component={Link}>Contact</Button></li>
          </ul>
          <Button variant="contained" sx={{ background: "var(--color-pink)", display: "none", '@media (min-width: 1024px)': { display: 'inline-block', }, fontWeight: "bold", textTransform: 'capitalize', borderColor: 'var(--color-pink)', color: '#fff', '&:hover': { borderColor: 'var(--color-pink)', color: 'var(--color-pink)', background: "none" }, }} onClick={handleOpen}>Contact</Button>
        </nav>
      </HideOnScroll>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-menu relative z-50 ">
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={closeDrawer}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <List gap={2} style={{ padding: "10px" }}>
              <ListItem sx={{ padding: "0px", }}>
                <ListItemButton onClick={closeDrawer} sx={{ "&:hover": { color: "#279d85", background: "RGB(217 240 240)", borderRadius: "7px" }, }} component={Link} to="/">
                  <ListItemIcon style={{ padding: "10px", }}>
                    <WindowIcon />
                  </ListItemIcon>
                  <ListItemText style={{ margin: " 10px 10px 10px -10px" }} >
                    <Typography className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" style={{ fontSize: "1.05rem", fontWeight: "500" }} >Home</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ padding: "0px", }}>
                <ListItemButton onClick={closeDrawer} sx={{ "&:hover": { color: "#279d85", background: "RGB(217 240 240)", borderRadius: "7px" }, }} component={Link} to="/technologies">
                  <ListItemIcon style={{ padding: "10px", }}>
                    <MilitaryTechIcon />
                  </ListItemIcon>
                  <ListItemText style={{ margin: " 10px 10px 10px -10px" }} >
                    <Typography className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" style={{ fontSize: "1.05rem", fontWeight: "500" }} >About</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ padding: "0px", }}>
                <ListItemButton onClick={closeDrawer} sx={{ "&:hover": { color: "#279d85", background: "RGB(217 240 240)", borderRadius: "7px" }, }} component={Link} to="/services">
                  <ListItemIcon style={{ padding: "10px", }}>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  <ListItemText style={{ margin: " 10px 10px 10px -10px" }} >
                    <Typography className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" style={{ fontSize: "1.05rem", fontWeight: "500" }} >Services</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ padding: "0px", }}>
                <ListItemButton onClick={closeDrawer} sx={{ "&:hover": { color: "#279d85", background: "RGB(217 240 240)", borderRadius: "7px", }, }} component={Link} to="/aboutus">
                  <ListItemIcon style={{ padding: "10px", }}>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText style={{ margin: " 10px 10px 10px -10px" }} >
                    <Typography className='text-md text-gray-400  nav-link cursor-pointer' color="inherit" style={{ fontSize: "1.05rem", fontWeight: "500" }} >Contact </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
             
              <ListItem >
                <Button variant="contained" sx={{ background: "var(--color-pink)", fontWeight: "bold", textTransform: 'capitalize', borderColor: 'var(--color-pink)', color: '#fff', '&:hover': { borderColor: 'var(--color-pink)', color: 'var(--color-pink)', background: "none" }, }} onClick={handleOpen}>Quick Contact</Button>
              </ListItem>
            </List>
          </nav>
        </div>
      )}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: "10px", width: '90%', maxWidth: '600px', }}>
          <Container>
            <ContactForm closeIcon={closeIconComponent} />
          </Container>
        </div>
      </Modal>
    </>
  );
};
export default NavigationBar;

