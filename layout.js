	/*
	 * This builds the urls
	 * 
	 */
	 
	/*
	 * Global variables
	 * 
	 */
	var initializeLayout2 = null;

 
  	/*
	 * Initialization function
	 * Called by the dojo function *.addOnLoad
	 */
	function init() {	
		//add a default image upon loading 
		try{
			image();	
		} catch(exception){
			console.log("init function "+ exception )
		}	
		
		//add an event to the button
		try{				 
			 //jqueries .ready functionality
			 // checks the document and waits until it's ready to be manipulated
			$(document).ready(setUp);	
		} catch(exception){
			console.log("init function "+ exception )
		}		
		
	}
	
 	/*
	 * Function is called during load only
	 * Build intial url and is never called again
	 */
	function image() {
		//img.src = "http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap&SRS=EPSG:42304&BBOX=-2750564.75,-936638.5,3583872.5,4673125&WIDTH=500&HEIGHT=500&LAYERS=wa_15m&STYLES=&FORMAT=GIF";
		if (initializeLayout2==null){
			if (initializeBuildURL==null){
				initializeLayout2 = new initt();
				initializeBuildURL = initializeLayout2;
			} else {
				initializeLayout2 = initializeBuildURL;
			}		
		}	
		
		//build url from default values
		//url,srs,bbox,width,height,layers,format,style
		initializeLayout2.constructinit("","","","","","","","");
		var str = myUrl;
		console.log(str + " image function")
		
		//get the value of the property url 
		var img = document.createElement("IMG");
		img.setAttribute('id','idIMG');
		if (str!= null){img.src = str.toString();}
		document.getElementById('map').appendChild(img);
		
		//display getMap url
		displayMapUrl(str);
	}  
	
	/*
	 * Function adds the getMap url at the footer section
	 * argument displayMap url passed down the string value
	 */
	function displayMapUrl (displayMapUrl){	
		try{
			//append the url at the footer section
			var footerSection = dojo.byId("footer");
			footerSection.innerHTML = "GetMap Request URL : " + displayMapUrl;	
		}
		catch(ex){console.log("displayMapUrl function = "+ ex);}
	}
	
	/*
	 * Function adds an event to the button
	 * 
	 */
 	function setUp(){	
		/* Alternative code snippet
			$('#example_button').click(function() {
			console.log("event successfully added")
			});
		*/
		
		$('#example_button').click(buttonClickEvent);
	}

	/*
	 * Event fired when one clicks the map
	 * Responsible for building dynamic getMap URL
	 */
	function buttonClickEvent(){
		var dummyStr = null;
		
		//initialize global variable 
		myUrl="";
		//Code below is for the developer and debugger
		console.log("  button event added successfully");
		
		/* A sample URL below
			http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap&SRS=EPSG:42304
			&BBOX=-2750564.75,-936638.5,3583872.5,4673125
			&WIDTH=500&HEIGHT=500&LAYERS=wa_15m&STYLES=&FORMAT=GIF		
		*/
		
		//declare a string holder and initialize 
		var str = null;
		
		//wmsservers
		var wmsservers = dijit.byId('idWMSServers').attr('value');
		str+= wmsservers;
		
		//Bounding box
		var bbox="&BBOX=" + $('#idWMSXmin').val()+",";
		bbox+= $('#idWMSYmin').val()+",";
		bbox+= $('#idWMSXmax').val()+",";
		bbox+= $('#idWMSYmax').val();
		str+= bbox;
		
		//styles
		if (typeof($('#idStyle').val().toString())=='undefined'){dummyStr="";}else{dummyStr=$('#idStyle').val().toString();}
		var style= "&STYLES="+ dummyStr;
		str+= style;
		
		//width
		var width = "&WIDTH=" + $('#idWMSWidth').val();
		str+= width;
		
		//height
		var height = "&HEIGHT=" + $('#idWMSHeight').val();
		str+= height;
		
		//format
		var format = "&FORMAT=" + dijit.byId('idFormat').attr('displayedValue');
		str+= format;
		
		//srs
		var srs = "&SRS=" + dijit.byId('idSrs').attr('displayedValue');
		str+= srs;
		
		//layers
		//dijit.byId('yourDijitId').attr('displayedValue');
		var wmslayers = "&LAYERS=" + dijit.byId('idWMSLayers').attr('value');
		str+= wmslayers;
		
		try{
			var buildUrl = new initt();
			//url,srs,width,height,layers,format,bbox,stylle
			buildUrl.constructinit(wmsservers,srs,width,height,wmslayers,format,bbox,style);
			console.log("myUrl = "+ myUrl);
			
			var img = document.getElementById('idIMG');
			if (myUrl!= null){img.src = myUrl.toString();}	
			
			//display getMap url
			displayMapUrl(myUrl);			
			
		}catch(ex){
			console.log("buttonClickEvent function = "+ ex);
			//console.log("buttonClickEvent = "+ str);
		}
	}
 
