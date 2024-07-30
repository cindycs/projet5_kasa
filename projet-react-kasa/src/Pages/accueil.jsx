import Home from "../components/home/Home"
import Gallery from "../components/Gallery"
import Carrousel from "../components/Carrousel"

export default function Accueil() {
    return (
        <div className="wrapper">
            <Carrousel />
            <Home />
            <Gallery />
        </div>
    )
}