import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import NavigationBar from "./component/navbar/NavigationBar"
import { Typography } from '@mui/material';
import Home from './component/home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Service />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/career' element={<Career />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/webdevelopment' element={<WebDevelopment />} />
          <Route path='/ios' element={<IosAppDevelopment />} />
          <Route path='/androiddevelopment' element={<AndroidDevelopment />} />
          <Route path='/graphicdesign' element={<GraphicDesigne />} />
          <Route path='/uxdesign' element={<UxDesigne />} />
          <Route path='/seo' element={<Seo />} />
          <Route path='/digitalmarketing' element={<DigitalMarketing />} />
          <Route path='/rantalobject' element={<RantalObject />} />
          <Route path='/shopify' element={<Shopify />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} /> */}
          <Route path='/*' element={<Typography sx={{ textAlign: "center", height: "100vh", alignItems: "center", justifyContent: "center", }} variant='h1'> 404 Page not Found </Typography >} />
        </Routes>
        {/* <WhatsApp /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
