export default function NavOverlay({isOpen , setIsOpen}){
  return (
    <div onClick={() => setIsOpen(!isOpen)}
     className={`fixed transition-transform duration-300 ease-in-out z-3 w-full h-full ${isOpen ? "backdrop-blur" : "hidden" }`}></div>
  )
}