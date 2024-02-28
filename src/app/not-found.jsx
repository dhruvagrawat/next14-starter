import Link from "next/link"

const Notfound = () => {
  return (
  <div className="">
      <h2>Page Not Found</h2>
      <p>Sorry, I forgot to make this page </p>
      <Link href="/">Go To Home</Link>
  </div>
  )
}

export default Notfound