export default function PostTitle({ children }) {
  return (
    <h1 className="font-playfair-display text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
