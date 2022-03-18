
const Result = () => {

    const bgIMG = { "backgroundImage": "url(https://api.lorem.space/image/fashion?w=1000&h=800)"}

    return(
        <section>
            <div className="hero min-h-screen" style={bgIMG}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Awesome!</h1>
                <p className="mb-5">You Submited a ticket! ✋ </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Result