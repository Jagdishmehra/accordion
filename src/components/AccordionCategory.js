import React, { useState } from 'react'
import AccordianData from './AccordianData';
import AccordionMenu from './AccordionMenu';
const AccordionCategory = () => {
    const [open, setopen]=useState(null);
    const data= AccordianData();
    if(data.length===0) return null;
   
    const handletoggle=(id)=>{
        setopen(open===id ? null:id)
    }

  return (
    data.map((d)=>(<AccordionMenu key={d.id} id={d.id} question={d.question} answer={d.answer}
    onToggle={handletoggle} show={open===d.id}
    />))
  )
};

export default AccordionCategory;
