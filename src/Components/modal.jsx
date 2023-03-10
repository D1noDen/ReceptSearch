



const Modal = ({img , idigrients , setOpen}) => {
 
    return(
         <div className="fixed flex items-center justify-center top-0 bottom-0  z-10  w-screen h-screen" style={{background:'rgba(18,15,16,0.2)'}}>
            
            <div className="bg-white flex flex-col items-center  justify-center lg:py-5 "  >
                
                
            <div className="flex flex-col  items-center justify-center 2xl:flex-row">

           
                <div>
                <img src={img} className="w-36 lg:pt-10 lg:px-10 lg:w-auto " alt='food'/>
            </div>
            <div>
                {idigrients.map(item => (
                    <div key={item} className="w-96 px-10  ">
                    <p className="2xl:pt-6 text-xs 2xl:text-lg">{item}</p><br/>
                    </div>
                ))}
            </div>
            </div>
          <button className='bg-gray-700 text-white  2xl:text-xl  px-6 2xl:py-6 my-6 2xl:w-96 rounded-xl' onClick={() => setOpen(false)}>Close</button>
            </div>
            
        </div>
    ) 
   
}
export default Modal