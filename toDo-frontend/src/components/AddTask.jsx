import '@fontsource/rubik-bubbles';
function AddTask(){
    return (
        <main>
            <h1 style={{fontFamily: 'Rubik Bubbles, sans-serif'}} className="text-center mt-10 mb-10 text-2xl">Your To Do Items</h1>
            
            <div className="flex items-center relative w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl">
  <input
    className="border p-4 w-full focus:outline-none focus:ring-0 placeholder-gray-500 text-lg sm:p-8 md:p-10 lg:p-12"
    placeholder="Add new task"
  />
  <button
    className="absolute right-2 sm:right-3 md:right-4 text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-blue-200 border rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transform -translate-y-1/2 top-1/2"
  >
    +
  </button>
  <hr className="absolute bottom-7 left-0 w-full border-2 border-gray-500 rounded" />
</div>
            
        </main>
    )
}
export default AddTask