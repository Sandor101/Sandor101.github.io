/*
function ($){
	$.fn.myPhoto = function(ops) {
		var defOps = {maxh:500,labels:true};
		ops = $.extend({},defOps,ops);
		$('body').append('<div id="myPhoto_back" style="position:fixed;left:0px;top:0px;width:100%;height:100%;"></div>')
		.append('<table id="myPhoto_cont" style="position:fixed;left:0px;top:0px;width:100%;height:100%;"><tr><td align="center"><a id="prev" class="nav"> < </a></td><td align="center" valign="top"><img/><br/><span></span></td><td align="center"><a id="next" class="nav"> > </a></td></tr></table>');
		$('#myPhoto_back').css('background','#000000').css('opacity','0.9').css('display','none');
		$('#myPhoto_cont').css('display','none').find('span').css('font-family','Verdana,Arial')
		.css('color','#ffffff').css('font-size','12px');
		$('#myPhoto_cont img').css('border','20px solid #ffffff').css('box-shadow','0px 0px 20px #000000')
		.css('margin-top','30px').css('max-height',ops.maxh+'px').css('margin-bottom','5px');
		$('#myPhoto_cont .nav').css('color','white').css('font-size','36px').css('margin','50px')
		.css('display','block').css('font-weight','bold').css('cursor','pointer').css('opacity','0.5');
		$('#myPhoto_cont .nav').hover(function(){$(this).css('opacity','1');});
		$('#myPhoto_cont .nav').mouseout(function(){$(this).css('opacity','0.5');});
		var mainobj=$(this);
		var noclose=false;
		var selected_a;
		var img_count=$(this).find('a').length;
		function open(){
			$('#myPhoto_cont span').text('');
			var tmp_a=mainobj.find('a:nth-child('+selected_a+')');
			$('#myPhoto_cont img').attr('src',tmp_a.attr('href'));
			if(ops.labels)$('#myPhoto_cont span').text(tmp_a.attr('title'));
			$('#myPhoto_back').fadeIn(250);
			$('#myPhoto_cont').fadeIn(500);
		}
		$(this).find('a').click(function(){
			selected_a=$(this).index()+1;
			open();
			return false;
		});
		$('#myPhoto_cont #prev').click(function(){
			noclose=true;
			if(selected_a>1)selected_a--;
			else selected_a=img_count;
			open();
		});
		$('#myPhoto_cont #next').click(function(){
			noclose=true;
			if(selected_a<img_count)selected_a++;
			else selected_a=1;
			open();
		});
		$('#myPhoto_cont').click(function(){
			if(!noclose){
				$('#myPhoto_back').fadeOut(150);
				$('#myPhoto_cont').fadeOut(150);
			}else noclose=false;
		});
		$('#myPhoto_cont img').click(function(){noclose=true;});
	};
}(jQuery);
*/
// object.onclick = function(){myScript};

function myFunction() {
	let x = document.getElementById("myLinks");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }