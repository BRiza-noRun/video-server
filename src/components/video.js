import "./video.css";

function Video(){
    return(
        <video controls>
            <source src="https://server-video-public-v1.s3.us-east-2.amazonaws.com/RICE+BALLS.mp4" type="video/mp4"/>
        </video>
    );
}

export default Video;
