/*
 * Properties of the object "init"
 */

 /*
  *Default url
  * http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap&SRS=EPSG:42304&BBOX=-2750564.75,-936638.5,3583872.5,4673125&WIDTH=500&HEIGHT=500&LAYERS=wa_15m&STYLES=&FORMAT=GIF
  */

//global variable pointing to location holding object of this class
var initializeBuildURL = null;
var myUrl = "";

/*
 * Method creates WMSURL parameter
 * Parameter WMSURL passed down
 */
initt.prototype.wmsurl = function(url){
	try{
		if(url.length <1 ) {
			myUrl+="http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap"
		}else {
			//build url from the argument passed down
			myUrl+= url;
			console.log(url);
		}
	}
	catch(ex){console.log("wmsurl function " + ex);}
}

/*
 * Method creates SRS parameter
 * Parameter SRS passed down
 */
initt.prototype.srs = function(srs){
	try{
		if(srs.length <1 ) {		
			myUrl+="&SRS=EPSG:42304"
		}else {
			//build srs from the argument passed down
			myUrl+= srs;
			console.log(srs);
		}
	}
	catch(ex){console.log("srs function " + ex);}
}

/*
 * Method creates bounding box parameter
 * Parameter bounding box passed down
 */
initt.prototype.bbox = function(bbox){
	try{
		if(bbox.length <1 ) {		
			myUrl+="&BBOX=-2750564.75,-936638.5,3583872.5,4673125"
		}else {
			//build bbox from the argument passed down
			myUrl+= bbox;
			console.log(bbox);
		}
	}
	catch(ex){console.log("bbox function " + ex);}
}

/*
 * Method creates width parameter
 * Parameter width passed down
 */
initt.prototype.width = function(width){
	try{
		if(width.length <1 ) {		
			myUrl+="&WIDTH=500"
		}else {
			//build width from the argument passed down
			myUrl+= width;
			console.log(width);
		}
	}
	catch(ex){console.log("width function " + ex);}
}

/*
 * Method creates height parameter
 * Parameter height passed down
 */
initt.prototype.height = function(height){
	try{
		if(height.length <1 ) {		
			myUrl+="&HEIGHT=500";
		}else {
			//build width from the argument passed down
			myUrl+= height;
			console.log(height);
		}
	}
	catch(ex){console.log("height function " + ex);}
}

/*
 * Method creates layers parameter
 * Parameter layers passed down
 */
initt.prototype.layers = function(layers){

	try{
		if(layers.length <1 ) {		
			myUrl+="&LAYERS=wa_15m"
		}else {
			//build width from the argument passed down
			myUrl+= layers;
			console.log(layers);
		}
	}
	catch(ex){console.log("layers function " + ex);}

}

/*
 * Method creates format parameter
 * Parameter format passed down
 */
initt.prototype.format = function(format){

	try{
		if(format.length <1 ) {		
			myUrl+="&FORMAT=GIF"
		}else {
			//build format from the argument passed down
			myUrl+= format;
			console.log(format);
		}
	}
	catch(ex){console.log("format function " + ex);}

}

/*
 * Method creates style parameter
 * Parameter style passed down
 */
initt.prototype.stylle = function(stylle){
	try{
		if(typeof(stylle.toString())=='undefined') {		
			myUrl+="&STYLES="
		}else {
			//build format from the argument passed down
			myUrl+= stylle;
			console.log(stylle);
		}
	}
	catch(ex){console.log("stylle function " + ex);}
}

/*
 * Method construct the getMap URL
 * Arguments are the minimum paramenters required to create the getMap request
 */
initt.prototype.constructinit = function(url,srs,width,height,layers,format,bbox,stylle){
	initializeBuildURL.wmsurl(url);
	initializeBuildURL.srs(srs);
	initializeBuildURL.width(width);
	initializeBuildURL.height(height);
	initializeBuildURL.layers(layers);
	initializeBuildURL.format(format);	
	initializeBuildURL.bbox(bbox);
	initializeBuildURL.stylle(stylle);
}

/*
 *Object Constructor 
 */
function initt(){
	// create a an object loader
}

/*
 * object is created here
 * check that the domw has been created
 */
window.onload = function() {
	//Apply some error handling here
	try {
		//load search results on map
		if(initializeBuildURL==null){
			initializeBuildURL = new initt();			
		}			
	}catch(exception){
		console.log(" window.onload function : " + exception );
	}	
};