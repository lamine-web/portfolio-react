import React from 'react'
import  './Propos.css'
import { motion } from 'framer-motion';
import img from '../assets/about.jpeg'

export default function Propos() {
  return (
    <>
    <div className='container-fluid about py-5'>
       <motion.h2 className='text-center text-primary' style={{ textDecoration: 'underline'}}>
        A propos 
        </motion.h2> 
        {/* <hr className="my-4" /> */}
      <main className='main py-5 d-flex justify-content-around align-items-center' >
     <motion.div
  initial={{ x: "" }} className='w-50' style={{lineHeight: '2'}}>
       Je suis <strong>lamine kama</strong>, étudiant en licence 2 et passionné par le front-end.
      Ce portfolio regroupe les projets que j’ai réalisés durant ma formation et en auto-apprentissage.
      Je travaille principalement avec React, Vite, HTML, CSS, et un peu de Laravel pour le back-end.
      Je cherche à progresser, à apprendre encore plus, et à intégrer des projets concrets.
      Merci de visiter mon portfolio !
     </motion.div>
     <div> 
      <motion.img src={img} alt="about" style={{width: '500px'}} animate={{ opacity: 10 }}/>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, repellat.</p> */}
     </div>
      </main>
    </div>
    
    
    </>
  )
}
