



const Modal = ({img , idigrients , setOpen}) => {
    console.log(idigrients)
    return(
         <div className="fixed flex items-center justify-center top-0 bottom-0  z-10  w-screen h-screen" style={{background:'rgba(18,15,16,0.2)'}}>
            
            <div className="bg-white flex flex-col items-center justify-center lg:py-5 "  >
                
                
            <div className="flex flex-col items-center justify-center lg:flex-row">

           
                <div>
                <img src={img} className="lg:pt-10 lg:px-10 " alt='food'/>
            </div>
            <div>
                {idigrients.map(item => (
                    <div key={item} className="w-96 px-10">
                    <p className="pt-6 lg:text-lg">{item}</p><br/>
                    </div>
                ))}
            </div>
            </div>
          <button className='bg-gray-700 text-white text-xl  py-6 my-6 w-96 rounded-xl' onClick={() => setOpen(false)}>Close</button>
            </div>
            
        </div>
    ) 
   
}
export default Modal