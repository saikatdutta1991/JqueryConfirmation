(function($) {



    $.confirmation = function(options) {

    	this.createRandom = function(){
        	return Math.random().toString(36).substring(7);
        }

    	var id = this.createRandom();


    	var options = $.extend(options, {});


    	options.confimationTitle = (options.confimationTitle) ? options.confimationTitle : "Default Title";
		options.confirmationText = (options.confirmationText) ? options.confirmationText : "Default Ttile";
		
		options.icon = options.icon ? options.icon : {};
		options.icon.iconClass =  options.icon.iconClass ? options.icon.iconClass : "fa fa-exclamation-triangle";    
		options.icon.iconColor =  options.icon.iconColor ? options.icon.iconColor : "";    
		options.icon.iconSize =  options.icon.iconSize ? options.icon.iconSize : "auto";    

		if(options.okButton) {
			options.okButton.text = options.okButton.text ? options.okButton.text : "Ok";
			options.okButton.callback = options.okButton.callback ? options.okButton.callback : function(){};
			$(document.body).on('click', '#'+id+' .okButton', options.okButton.callback);
		}
		
		

		if(options.cancelButton) {
			options.cancelButton.text = options.cancelButton.text ? options.cancelButton.text : "Cancel";
			options.cancelButton.callback = options.cancelButton.callback ? options.cancelButton.callback : function(){};
			$(document.body).on('click', '#'+id+' .cancelButton', options.cancelButton.callback);
		}
			
		

		//default close button close box
		$(document.body).on('click', '#'+id+' .close', function(){
			$("#"+id).fadeOut().queue(function(nxt) { 
                $(this).remove();
                nxt();
            });
		});




        //this is html template for confirmation box
        this.htmlTemplate = '<div class="confirmationContainerOuter" id="'+id+'" style="display:none">'
								+'<div class="confirmationContainerInner">'
									+'<i class="fa fa-times-circle-o close" title="Close"></i>'
									+'<div class="confirmationTitle">'
										+'<h4>'+options.confimationTitle+'</h4>'
									+'</div>'
									+'<hr>'
									+'<div class="confirmationBody">'
										+'<span class="confirmationIcon">'
											+'<i class="'+options.icon.iconClass+'" style="color:'+options.icon.iconColor+';font-size:'+options.icon.iconSize+'"></i>'
										+'</span>'
										+'<div class="confirmationText">'
											+ options.confirmationText
										+'</div>'
									+'</div>'
									+'<hr>'
									+'<div class="confirmationFooter">'
										+'<button class="okButton">'+options.okButton.text+'</button>'
										+'<button class="cancelButton">'+options.cancelButton.text+'</button>'
									+'</div>'
								+'</div>'
							+'</div>';


		//this method adds new confimation box body
		this.init = function(){
        	$("body").prepend(this.htmlTemplate);
        	$("#"+id).fadeIn();
        }

        this.init();

    }

    $.confirmation.styles = function(){
    	var styles = '<style type="text/css">';
    	styles += '.confirmationContainerOuter{position: fixed;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.58);top: 0px;left: 0px;z-index: 9999;display: flex;justify-content: center;}';
    	styles += '.confirmationContainerOuter > .confirmationContainerInner{background-color: white;position: relative;display: inline-block;align-self: center;padding: 10px;border: 2px solid white;border-radius: 5px;box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.2);}';
    	styles += '.confirmationContainerOuter .confirmationFooter{text-align: center;padding: 10px;}';
    	styles += '.confirmationContainerOuter .confirmationTitle h4{margin: 0px;padding: 0px;font-family: monospace;}';
    	styles += '.confirmationContainerOuter hr{border-color: rgba(0, 0, 0, 0.05);}';
    	styles += '.confirmationContainerOuter .confirmationContainerInner .confirmationBody .confirmationIcon{margin-right: 5px;}';
    	styles += '.confirmationContainerOuter .confirmationBody .confirmationText{display: inline-block;}';
    	styles += '.confirmationContainerOuter .confirmationContainerInner .close{position: absolute;right: -12px;top: -14px;font-size: 23px;cursor: pointer;}';
    	styles += '</styles>';

    	return styles;
    }

    $.confirmation.init = function(){
		$("head").append($.confirmation.styles());
	}

}(jQuery));