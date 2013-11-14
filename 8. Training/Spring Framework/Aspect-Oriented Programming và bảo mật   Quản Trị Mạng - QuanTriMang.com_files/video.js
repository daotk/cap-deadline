var _video_index = 0;
function video(flv){
		_video_index++;
		document.write('<p id=qtm_video'+_video_index+' name=qtm_video'+_video_index+'></p>');
		var sFlashPlayer= new SWFObject("/java/mediaplayer.swf","qtm_playlist"+_video_index,"450","320","0");
		sFlashPlayer.addParam("allowfullscreen","true");
		sFlashPlayer.addParam("allowfullscreen","true");
		sFlashPlayer.addVariable("file",flv);
		sFlashPlayer.addVariable("displayheight","300");
		sFlashPlayer.addVariable("width","450");
		sFlashPlayer.addVariable("height","320");
		sFlashPlayer.addVariable("backcolor","0xcc0000");
		sFlashPlayer.addVariable("frontcolor","0xCCCCCC");
		sFlashPlayer.addVariable("lightcolor","0x557722");
		sFlashPlayer.addVariable("shuffle","false");
		sFlashPlayer.addVariable("repeat","list");
		sFlashPlayer.write('qtm_video'+_video_index);
}
