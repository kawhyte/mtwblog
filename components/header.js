import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="  sm:mt-32 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20">
      <Link href="/" className=" hidden font- hover:underline">
        Blog
      </Link>
     
    </h2>
  );
}
