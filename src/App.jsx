
import './App.css'
import Acceuil from './component/Acceuil';
import Contact from './component/Contact';
import Competences from './component/Competences';
import Navbar from './component/Navbar'
import Propos from './component/Propos';
import Projects from './component/Projects';
import {BrowserRouter as Router,Routes, Route,Link,} from 'react-router-dom';
import Layout from './component/Layout';
import NotFound from './component/NotFound';

function App() {
 

  return (
    <>
     {/* <Navbar/> */}
     <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Acceuil />} />
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
