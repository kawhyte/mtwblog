export default function PostTitle({ children }) {
  return (
    <>
   
    <h1 className="absolute bg-white p-2 md:p-4 mx-6 my-9 rounded-xl  z-10 font-playfair-display text-2xl md:text-3xl lg:text-5xl  font-semibold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
      
    </h1>
    </>
  )
}
