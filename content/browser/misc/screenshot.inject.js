window.onbeforeunload = function(Event){
	"use strict";
	Event.defaultPrevented();
	Event.stopImmediatePropagation()
	Event.stopPropagation();
	//open thickbox
}	