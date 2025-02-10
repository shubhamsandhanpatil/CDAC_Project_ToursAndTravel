// import React from "react";
// import video2 from "../components/video2.mp4"



// const Video = () =>{
//     return(
//         <div className="main bg-white">
//         <video src={{backgroundImage: `url("https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,backgroundSize:"cover"}}/>
//         <div className="content">
//         <h1>The Mountains Are Calling...</h1>
//         </div>
//         </div>
//     )
// }

// export default Video


import React from "react";
import video2 from "../components/video2.mp4";

const Video = () => {
    return (
        <div className="main bg-white" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Background Video */}
            <video 
                src={video2} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="video-background"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            
            {/* Overlay Content */}
            <div className="content" style={{
                position: "relative",
                zIndex: 1,
                color: "white",
                textAlign: "center",
                top: "50%",
                transform: "translateY(-50%)",
            }}>
                <h1>The Mountains Are Calling...</h1>
            </div>
        </div>
    );
};

export default Video;