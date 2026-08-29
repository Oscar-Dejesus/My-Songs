
import Video1 from './Songs/Echos.mp4'
import Video2 from './Songs/Woods.mp4'
function Video(){
    return(
        <>
            
        <div className='Video-Holder'>
            <div className="song-vid">
                <h1>
                    <a href="https://youtu.be/KeJBAL30oas?si=AHPISn-kayEl1NM5">
                        Echos
                    </a>
                </h1>

                <video controls>
                    <source src={Video1} type="video/mp4" />
                </video>
            </div>
            <div className="song-vid">
            <h1>
                <a href="https://youtu.be/MIECpZ10PNs?si=y0TMj6i3VgWLhWEP">Woods</a>
            </h1>
            <video controls>
                <source src={Video2} type = "video/mp4"></source>
            </video>

            </div>
        </div>
        </>
    );
}

export default Video;