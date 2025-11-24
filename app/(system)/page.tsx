import Caption from "../modules/components/caption";
import { CorinthiansCarousel } from "../modules/components/carousel";
import { Collections } from "../modules/components/collections";
import { Footer } from "../modules/components/footer";
import { Navbar } from "../modules/components/navbar";
import { Teams } from "../modules/components/teams";
import { Us } from "../modules/components/us";

export default function Page() {


    return (
        <div className=" font-bold h-screen bg-white">
            <Navbar />
            <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src="/videos/video-metcon-10-desk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Caption />
            <Collections />
            <Teams />
            <CorinthiansCarousel />
            <Us />
            <Footer />
        </div>
    )
}