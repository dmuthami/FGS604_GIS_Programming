
/*
	<Layer queryable="0" opaque="0" cascaded="0">
	<Name>wld_cap</Name>
	<Title>Country Capital Cities</Title>
	<Abstract>Country capital cities of the world.</Abstract>
	<SRS>EPSG:4326</SRS>
	<LatLonBoundingBox minx="-179.417" miny="-54.8" maxx="179.515" maxy="82.5"/>
	<BoundingBox SRS="EPSG:4326" minx="-179.417" miny="-54.8" maxx="179.515" maxy="82.5"/>
	<Style>
	<Name>default</Name>
	<Title>default</Title>
	<LegendURL width="20" height="20">
	<Format>image/png</Format>
	<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://atlas.gc.ca/cgi-bin/atlaswms_en?version=1.1.1&service=WMS&request=GetLegendGraphic&layer=wld_cap&format=image/png"/>
	</LegendURL>
	</Style>
	</Layer>
	<Layer queryable="0" opaque="0" cascaded="0">
	<Name>wld_cap_nam</Name>
	<Title>Country Capital City Names</Title>
	<Abstract>Countryl capital city names of the world.</Abstract>
	<SRS>EPSG:4326</SRS>
	<LatLonBoundingBox minx="-179.417" miny="-54.8" maxx="179.515" maxy="82.5"/>
	<BoundingBox SRS="EPSG:4326" minx="-179.417" miny="-54.8" maxx="179.515" maxy="82.5"/>
	</Layer>
	<Layer queryable="0" opaque="0" cascaded="0">
	<Name>wld_nat_nam</Name>
	<Title>Country Names</Title>
	<Abstract>Country names of the world.</Abstract>
	<SRS>EPSG:4326</SRS>
	<LatLonBoundingBox minx="-180" miny="-90" maxx="180" maxy="83.8264"/>
	<BoundingBox SRS="EPSG:4326" minx="-180" miny="-90" maxx="180" maxy="83.8264"/>
	</Layer>
*/

/*
 * This tab is being unused at the moment but further developments could be made to it so that it is used to dynamically
 *  store and pass down the getcapabilities parameters and populate the controls in the default web page
 * 
 */
//Default url scheme
//http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap&SRS=EPSG:42304&BBOX=-2750564.75,-936638.5,3583872.5,4673125&WIDTH=500&HEIGHT=500&LAYERS=wa_15m&STYLES=&FORMAT=GIF

var atlasWMS= 
	[{"wmsurl":"http://atlas.gc.ca/cgi-bin/atlaswms_en?VERSION=1.1.1&request=GetMap",
	"name":"wld_cap",
	"title":"Country Capital Cities"
	"abstract":"Country names of the world"
	"srs":"&SRS=EPSG:4326",
	"minx":"-179.417",
	"miny":"-54.8",
	"maxx":"179.515",
	"maxy":"82.5",
	"width":"500",
	"height":"600",
	"layers":"wa_15m",
	"format":"PNG"}
	];
	
var initializeWmsLayers = null;



	
	




 
