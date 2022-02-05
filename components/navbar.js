import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Nav</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/sub/test">Sub</Link>
    </nav>
  )
}

export default Navbar
