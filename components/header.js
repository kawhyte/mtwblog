import Link from 'next/link'

export default function Header() {
  return (
    <h2 className=" sm:mt-32 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20">
      <Link href="/">
        <a className="font- hover:underline">Blog</a>
      </Link>
      .
    </h2>
  )
}
