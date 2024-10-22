import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from'./Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NoticeMarque from './Components/NoticeMarque'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NoticeMarque /> */}
        {/* <Navbar /> */}
        <Routes>
          {/* Routes with Navbar and Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-portal/register" element={<Register />} />
            <Route path="/student-portal/login" element={<Login />} />
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-portal/register" element={<Register />} />
          <Route path="/student-portal/login" element={<Login />} /> */}
          <Route path="/student-portal/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
