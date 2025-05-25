import React from 'react'
import  './Propos.css'
import { motion } from 'framer-motion';
import img from '../assets/about.jpeg'

export default function Propos() {
  const imgg = 'https://images.unsplash.com/photo-1558174685-430919a96c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VifGVufDB8fDB8fHww'
  return (
    <>
    <div className=''>
      <main className='main py-5 d-flex justify-content-around align-items-center' style={{backgroundImage: `url(${imgg})`,backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}}>
     <motion.div
  initial={{ x: "" }} className='text-white' style={{lineHeight: '2',padding: '100px 0',textAlign:'center'}}>
       Je suis <strong>lamine kama</strong>, étudiant en licence 2 et passionné par le front-end. <br />
      Ce portfolio regroupe les projets que j’ai réalisés durant ma formation et en auto-apprentissage. <br />
      Je travaille principalement avec React, Vite, HTML, CSS, et un peu de Laravel pour le back-end. <br />
      Je cherche à progresser, à apprendre encore plus, et à intégrer des projets concrets.
      Merci de visiter mon portfolio !
     </motion.div>
     <div> 
     </div>
      </main>
    </div>
    
    
    </>
  )
}
