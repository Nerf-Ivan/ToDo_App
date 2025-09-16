import '@fontsource/rubik-bubbles';
import '@fontsource/lobster';
import { CiCirclePlus } from "react-icons/ci";

function AddTask(){
    return (
        <main>
            <h1 
              style={{fontFamily: 'Lobster, sans-serif'}} 
              className="text-center mt-10 mb-10 text-2xl"
            >
              Your To Do Items
            </h1>
            
            <div className="flex items-center w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl gap-2">
              <input
  type="text"
  placeholder="Add new task"
   className="
    w-full 
    border-0 
    border-b-2 
    border-gray-400 
    focus:border-gray-300 
    focus:outline-none 
    focus:ring-0 
    placeholder-gray-400 
    placeholder:p-1
    placeholder: italic
    text-lg
    bg-transparent
    px-0
    py-2
    transition-colors 
    duration-300
  "
/>
              <button
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center"
              >
                <CiCirclePlus className="text-gray-400 transition-colors duration-300 hover:text-white" size={40}/>
              </button>
            </div>
        </main>
    )
}

export default AddTask;
