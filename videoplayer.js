var player = videojs('videoPlayer',{
    autoplay:'muted',
    controls:true,
    loop:false,
    Plugin:{
        hotKeys:{
            enableModifiersForNumbers:false,
            seekStep:30
        }
    
    }

});
player.thumbnails({

    0:{
        src:'video2.mp4'
    }:
});
player.playlist([
    {
        sources:[
        {
            src:'video2.mp4',type:'video/mp4'
        }
        ],
    }
    
    
]);
player.playlist.autoadvance(0)