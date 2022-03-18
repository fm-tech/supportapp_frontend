import Link from 'next/link'

export default function Home() {
  return (
   <section>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Welcome to the Blend Supply Support Page ✈️</p>
          <Link href='/inquire'>
            <a href="#">
            <button className="btn btn-primary">Get Started</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
   </section>
  )
}


