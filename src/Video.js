
import Video1 from './Songs/Echos.mp4'
import Video2 from './Songs/Woods.mp4'
function Video(){
    return(
        <div className='Video-Holder'>
            <video controls>
                <source src={Video1} type = "video/mp4"></source>
                
            </video>
            <video controls>
                <source src={Video2} type = "video/mp4"></source>
            </video>
        </div>
    );
}

export default Video;