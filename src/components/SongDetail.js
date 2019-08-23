import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component{
    
    render(){
        if(!this.props.song){
            return (<div>No item selected</div>);
        }else {
            return (
            <div>
                <h3>Detail For :</h3>
                <p>Title: {this.props.song.title}<br/>
                Duration: {this.props.song.duration}</p>
            </div>)
        }
    }
}

const mapStateToProps = (state)=>{
    return {song:state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);