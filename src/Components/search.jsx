import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FetchRecept } from "../service/api";
import Modal from './modal'
const Search = () => {
  const [inputText, setInputText] = useState();
  const [text, setText] = useState();
    const [open , setOpen] =useState(false)
    const [recipe , setRecipe] = useState()
  const { isLoading, data, isSucces, isError } = useQuery({
    queryFn: () => FetchRecept(text),
    queryKey: [text, "fetchRecept"],
    staleTime:300000
  });
 
  return (
    <div>
      <div className="flex items-center w-full justify-center mt-24">
        <input
          className="border w-96 h-12"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="text-white bg-lime-500 h-12 w-44 text-xl rounded-lg"
          onClick={() => {
            if (inputText) {
              setText(inputText);
            }
          }}
        >
          Search
        </button>
      </div>
      
      { open ?
            <Modal img={recipe.recipe.image} idigrients={[recipe.recipe.ingredientLines]} setOpen={setOpen} />
           : null }
      <div className="flex flex-wrap items-center justify-center">
   
    { isLoading ?
    <div className="w-screen h-sreen flex items-center justify-center"> 

    
        <div role="status">
    <svg aria-hidden="true" className="inline w-48 h-48 mt-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div> 
</div> : isError ? <h1> Error Please restart page</h1> :
      data.hits.map((item) => {
        return (
           <React.Fragment key={item.recipe.calories} >
          
           
          <div key={item.calories} className="flex h-full   py-10 justify-center px-4">
            <div className=" overflow-hidden rounded-xl w-64  bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
              
                src={item.recipe.image}
                alt="plant"
                className="h-auto w-full"
              />
              <div className="p-5">
                <p className="text-medium mb-5 text-gray-700">
                 {item.recipe.label}
                </p>
                <button onClick={() => {
                    setRecipe(item)
                    setOpen(true)}} className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
                  See More
                </button>
              </div>
            </div>
          </div>
          </React.Fragment>
        );
      })}
      </div>
      </div>
    
  );
};
export default Search;
