/*----------------------------------------------------*/
/*     JAVASCRIPT
/*----------------------------------------------------*/

jQuery(document).ready(function() {
	$('#navigation').slimmenu({ resizeWidth: '959'});
	$(document).ready(function() {
		$('.tip').powerTip({
			placement: 'n'
		});
		$('#improved .head').click(function(e) {
			e.preventDefault();
			$(this).closest('li').find('.content').not(':animated').slideToggle();
			$(this).toggleClass('open');
		});
		$('ul.tabs').each(function() {
			// For each set of tabs, we want to keep track of
			// which tab is active and it's associated content
			var $active, $content, $links = $(this).find('a');
			// If the location.hash matches one of the links, use that as the active tab.
			// If no match is found, use the first link as the initial active tab.
			$active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
			$active.addClass('active');
			$content = $($active.attr('href'));
			// Hide the remaining content
			$links.not($active).each(function() {
				$($(this).attr('href')).hide();
			});
			// Bind the click event handler
			$(this).on('click', 'a', function(e) {
				// Make the old tab inactive.
				$active.removeClass('active');
				$content.hide();
				// Update the variables with the new link and content
				$active = $(this);
				$content = $($(this).attr('href'));
				// Make the tab active.
				$active.addClass('active');
				$content.show();
				// Prevent the anchor's default click action
				e.preventDefault();
			});
		});
	});
		
		
		$("#submit_btn").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
        var user_message    = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if(user_name==""){ 
            $('input[name=name]').css('border-color','red'); 
            proceed = false;
        }
        if(user_email==""){ 
            $('input[name=email]').css('border-color','red'); 
            proceed = false;
        }
        if(user_message=="") {  
            $('textarea[name=message]').css('border-color','red'); 
            proceed = false;
        }
        
        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
            post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
            
            //Ajax post data to server
            $.post('contact.php', post_data, function(data){  
                
                //load success massage in #result div element, with slide effect.       
                $("#result").hide().html('<div class="success">'+data+'</div>').slideDown();
                
                //reset values in all input fields
                $('#contact_form input').val(''); 
                $('#contact_form textarea').val(''); 
                
            }).fail(function(err) {  //load any error data
                $("#result").hide().html('<div class="error">'+err.statusText+'</div>').slideDown();
            });
        }
                
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function() { 
        $("#contact_form input, #contact_form textarea").css('border-color',''); 
        $("#result").slideUp();
    });
		
	
	 // Target your .container, .wrapper, .post, etc.
    $("#vid-container").fitVids();
	


	});	
	