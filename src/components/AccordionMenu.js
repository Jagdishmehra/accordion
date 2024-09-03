

const AccordionMenu = ({id, question, answer, onToggle, show}) => {
    // const [show, setshow]=useState(false);
    
    // const handleaccordion=()=>{
    //         setshow(!show)
    //lifting the state up.!
    
  return (
    <div className='bg-red-200 flex flex-col mt-[2%] w-1/3 mx-auto pb-4 pt-2 px-2 rounded-xl shadow-xl border-gray-800'>
      <div className='flex justify-between items-center cursor-pointer' onClick={()=>{onToggle(id)}}>
    <span className='text-lg px-1 text-black'>{question}</span>
      <span className='text-2xl' >{show ?'˄':'˅'}</span>
      </div>
      {show && (<div className='my-2'>
        <p className='px-1 text-lg font-thin text-black'>
            {answer}
        </p>
</div>)}
      </div>
  )
}

export default AccordionMenu;