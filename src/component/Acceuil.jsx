import React from 'react'
import Jumbotron from './comm/Jumbotron'
import Carrousel from './comm/Carrousel' 
import Propos from './Propos'

export default function Acceuil() {
  return (
    <div>
   <Jumbotron />
   <Carrousel />
   <Propos />
    </div>
  )
}
