setTimeout(
document.getElementById('btn-readmore')!=null ? document.getElementById('btn-readmore').click():''
,1000);
setTimeout(function(){
	$('.footer_mask').slideDown('slow',function(){
		$('.footer_mask').remove();
		
	});
	$('.the-lowest-bg').remove();
	$('.group_img_box').remove();
	
},1800);

