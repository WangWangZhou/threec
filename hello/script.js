setTimeout(
	document.getElementsByClassName('btn-readmore')!=null ? document.getElementsByClassName('btn-readmore')[0].click():''
	,1000);
setTimeout(
	document.getElementById('asideFooter')!=null ? document.getElementById('asideFooter').style.display='none':''
	,1000);	
setTimeout(function(){
	$('.footer_mask').slideDown('slow',function(){
		$('.footer_mask').remove();
		
	});
	$('.the-lowest-bg').remove();
	$('.group_img_box').remove();
	
},1800);

