import React, {useState, useEffect} from 'react'
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

const WbnPlayer = ({ match, history, location}) => {
    
    
    const videos = JSON.parse(document.querySelector('[name = "videos"]').value)
    
    const [state, setState] = useState({
        videos: videos.playlist,
        activeVideo: videos.playlist[0],
        nightMode: true,
        playlistId: videos.playlistId,
        autoplay: false
    })
    

    const nightModeCallback = () => {

    }

    const endCallback = () => {

    }

    const progressCallback = () => {
        
    }

    return (
        <ThemeProvider theme = {state.nightMode ? theme : themeLight}>
            {state.video !== null ? 
            <StyleWbnPlayer>
                <Video 
                    active = {state.activeVideo}
                    autoplay = {state.autoplay}
                    endCallback = {endCallback}
                    progressCallback = {progressCallback}
                    
                    />
                <Playlist
                    videos = {state.videos}
                    active = {state.activeVideo}
                    nightModeCallback = {nightModeCallback}
                    nightMode = {state.nightMode}
                />
            </StyleWbnPlayer> :null }
        </ThemeProvider>
    );
};

export default WbnPlayer;