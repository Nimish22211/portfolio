import React, { useEffect, useState } from 'react'
import './Youtube.css'
function Youtube() {
    const [videos, setVideos] = useState([])
    // const api = process.env.REACT_APP_YTKEY
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3CTmybHAhwECpq5FCtJeiQ&order=date&key=' + process.env.REACT_APP_YTKEY)
                .then(response => response.json())
            setVideos(res)
        }
        fetchData()

    }, [])
    const subscribeMe = () => {
        window.open('https://www.youtube.com/channel/UC3CTmybHAhwECpq5FCtJeiQ?sub_confirmation=1', '_blank')
    }
    return (
        <div className='youtube' id="youtube">
            <h1>Youtube Section</h1>
            {videos.length !== 0 && <iframe src={`https://www.youtube.com/embed/${videos.items[0].id.videoId}`} allowFullScreen frameBorder="0" title='latest youtube video' />}
            <p className="video-caption">My Latest Youtube Video 👆</p>
            <div className="videos">
                <h3>My 5 Latest Videos</h3>
                <div>
                    <ul>
                        {videos.length !== 0 && videos.items.map((item, i) => <li key={i}>
                            {item.snippet.title}
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className="subscribe-me">
                <p>Subscribe My Youtube Channel</p>
                <button className="subs" onClick={subscribeMe}>Subscribe</button>
            </div>
        </div>
    )
}

export default Youtube
