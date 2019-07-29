import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import StyleWbnPlayer from '../styles/StyledWbnPlayer'

const theme = {
    bgcolor: "#333",
    bgcolorItem: "#444",
    bgcolorItemActive: "#405C63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayer: "none",
    color: "white"
}

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #333",
    borderPlayer: "none",
    color: "#333"
}

const videos = {
    playlistId: "wbn_rdx",
    playlist: [
        { num: 1, title: "Blind Ivy - Godless", id: "ghI-1", duration: "10:51", video: "hhttps://www.youtube.com/watch?v=zP5Eq4n-4U0" },
        { num: 2, title: "Jinjer - Cloud Factory", id: "ej-2", duration: "13:27", video: "https://www.youtube.com/watch?v=LgFvXLbJMSE" },
        { num: 3, title: "THE AGONIST - Panophobia", id: "4t-3", duration: "17:35", video: "https://www.youtube.com/watch?v=EdT7M4f2L9A" },
        { num: 4, title: "INFECTED RAIN - Passerby", id: "Jh-4", duration: "08:34", video: "ps://www.youtube.com/watch?v=Nhw7pFWNZV4" },
        { num: 5, title: "Connecting the Home Page", id: "zt-5", duration: "13:42", video: "https://www.youtube.com/embed/ztHLpdVv9Vc" },
        { num: 6, title: "Quick Recap", id: "iV-6", duration: "05:50", video: "https://www.youtube.com/embed/iV5GDHY_cJk" },
        { num: 7, title: "Completing the App", id: "XM-7", duration: "16:33", video: "https://www.youtube.com/embed/XMmSM0TqQ2k" },
        { num: 8, title: "BONUS - Persist the state in sessionStorage", id: "r5-8", duration: "10:06", video: "https://www.youtube.com/embed/r5fLW4PUrSQ" },
        { num: 9, title: "BONUS - Higher order functions", id: "L8-9", duration: "06:09", video: "https://www.youtube.com/embed/L89dt9sHNJ0" },
    ]
}

const WbnPlayer = ({ match, history, location }) => {


    // const videos = JSON.parse(document.querySelector('[name = "videos"]').value)

    // console.log("VIDEOS", videos)


    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[3],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    })

    // :FIXME to gix tis
    useEffect(() => {

        const routeVideoId = match.params.activeVideo
        console.log('match.params.activeVideo', match.params.activeVideo);
        console.log('VIDEOS', state.videos)
        if (routeVideoId !== undefined) {
            const videos = state.videos
            const newActiveVideo = videos.findIndex(varijabla => varijabla.id === routeVideoId,
                console.log('VIDEO ID', routeVideoId),
                )
            console.log('NEW ACTIVE VIDEO', newActiveVideo)
            
            setState(prevState => ({
                ...prevState,
                activeVideo: prevState.videos[newActiveVideo],
                autoplay: location.autoplay
            }))
        } 
        else {
            history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false
            })
        }
    }

        , [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos])


    const nightModeCallback = () => {

    }

    const endCallback = () => {

    }

    const progressCallback = () => {

    }

    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.video !== null ?
                <StyleWbnPlayer>
                    <Video
                        active={state.activeVideo}
                        autoplay={state.autoplay}
                        endCallback={endCallback}
                        progressCallback={progressCallback}
                    />
                    <Playlist
                        videos={state.videos}
                        active={state.activeVideo}
                        nightModeCallback={nightModeCallback}
                        nightMode={state.nightMode}
                    />
                </StyleWbnPlayer> : null}
        </ThemeProvider>
    );
};

export default WbnPlayer;