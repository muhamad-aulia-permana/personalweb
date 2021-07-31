// JavaScript Document
$(function() {
		function loadKonten(id,url,effect){						
			if(effect){
				$(id).effect( "transfer", { to: "#konten", className: "ui-effects-transfer" } , 1000, function(){					
					$("#konten").removeAttr("style").hide('blind');
					setTimeout(function() {
						$("#konten").load(url,null,function(){
							$("#konten").removeAttr("style").hide().show('slow');
						});											
					}, 900 );					
				});
			}
			else
				$("#konten").load(url);
		}
				
		$( "#nav_profil" ).click(function(){
			loadKonten("#nav_profil","profile.html",true);
			return false;
		});
		
		$( "#nav_cv" ).click(function(){
			loadKonten("#nav_cv","curriculum.html",true);
			return false;
		});
		
		$( "#nav_exp" ).click(function(){
			loadKonten("#nav_exp","experience.html",true);
			return false;
		});
		
		loadKonten(null,"home.html",false);
});
