/*
 * jQuery Bars 1.0
 *
 * Based on the UI ProgressBar plugin from jQueryUI 
 * (http://docs.jquery.com/UI/Progressbar)
 *
 * Copyright 2011, Bernat Ràfales Mulet (http://www.thinkingeek.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function( $ ){

  $.fn.bars = function( options ) {  

    var settings = {
      'height' : '10px',
      'duration' : '500',
	  'background': 'white',
      'foreground' : 'black',
	  'percentage' : 50
    };

	/*引用该函数的可能元素可能不止一个，使用this.each可以对所有引用进行相应操作*/
    return this.each(function() {        
      if ( options ) { 
		/*jQuery.extend 对jQuery本身的属性和方法进行了扩展，常用的方法是当第二个参数obj2中存在第一个参数obj1的元素时，直接将其引用覆盖掉
		  jQuery.fn.extend 对jQuery.fn的属性和方法进行了扩展*/
        $.extend( settings, options );
      }

	  var $this = $(this);
	  
      $this.html('').css('height', settings.height);;
      $this.css('background-color', settings.background);
      var valueDiv = $('<div></div>').appendTo($this).css('background-color', settings.foreground).css('height', settings.height);
      
	  //Animation
      valueDiv.width('0%');
      valueDiv.animate({
	    width: settings.percentage.toFixed(0) + '%'},
	    settings.duration);
    });

  };
})( jQuery );
