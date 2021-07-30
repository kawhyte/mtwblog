export default function PostTitle({ children }) {
  return (
    <h1 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl  font-semibold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h1>
  )
}
