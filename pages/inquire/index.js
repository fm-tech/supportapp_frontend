import Question from "../../components/Question"
import { useRouter } from 'next/router'

const Result = () => {
    const router = useRouter()
    console.log(router)

    const bgIMG = { "backgroundImage": "url(https://images.unsplash.com/photo-1495427513693-3f40da04b3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)"}

    return(
        <section>
            <div className="hero min-h-screen" style={bgIMG}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center">
                <Question />
            </div>
            </div>
        </section>
    )
}

export default Result