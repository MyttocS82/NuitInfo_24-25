import React from "react";
import VideoBackground from "../ressources/coral-reef-destroyed-by-fish-net-free-video.mp4";

function Défi() {
    return (
        <section className="bg-blue-50 min-h-screen flex flex-col items-center justify-start px-2 relative">
            {/* Vidéo en arrière-plan */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={VideoBackground}
                autoPlay
                loop
                muted
            />

        </section>
    );
}

export default Défi;
