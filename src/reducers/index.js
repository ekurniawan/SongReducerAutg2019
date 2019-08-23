import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title:'No Scrub',duration:'4:05'},
        {title:'Macarena',duration:'2:30'},
        {title:'All Start', duration:'3:15'},
        {title:'I want it that way',duration:'3:10'}
    ];
};

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.paylod;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});