$(function(){

	$('#next').click(displayNextImage);
	$('#back').click(displayPreviousImage);

	var languages=['java.jpg','python.png','ruby.png','javascript.png','jquery.jpg','objectivec.png','php.png','swift.png'];

	var images=['image1','image2','image3','image4','image5','image6','image7'];

	var count=0;

	var languageCounter=0;

	$('.menu_icon').click(function(){

		$('.small_nav').slideToggle('fast');

	});

	setInterval(function(){
		displayMobileImage();
	},10000);


	$(window).resize(function(){

		var getWindowWidth=$(window).width();

		if (getWindowWidth>767){
			$('.small_nav').show('fast');
		}
	
	});


	$('.slideBar').hover(function(){
		$('.active').toggle();
	});
	

	function displayPreviousImage(){

		if (count>0) {
			count-=1;
		}
		else if(count<1){
			count=images.length-1;
		}
		var src='../img/'+images[count]+'.jpg';

		$('.mainBoard img').attr('src',src);
		var listItem=$('.listSlide li')[count];
		$(listItem).css('background-color','green');
		$(listItem).siblings().css('background-color','white');

	}

	function displayNextImage(){
		if (count<images.length-1) {
				count+=1;
		}
		else if (count>=images.length-1) {
			count=0;
		}
		var src='../img/'+images[count]+'.jpg';

		$('.mainBoard img').attr('src',src);
		var listItem=$('.listSlide li')[count];
		$(listItem).css('background-color','green');
		$(listItem).siblings().css('background-color','white');
	}

	function displayMobileImage(){
		if (languageCounter<languages.length-1) {
			languageCounter+=1;
			
		}
		else if (languageCounter>=languages.length-1){
			languageCounter=0;
		}
		var src='../img/'+languages[languageCounter];
		var text=marqueeText(languages[languageCounter]);
		$('.infoBar marquee h2').html(text);
		$('.mobileBoard .main .imageBoard img').attr('src',src);		
		
	}

	function getLastPeriodIndex(string){
		var index;
		for (var i = string.length - 1; i >= 0; i--) {
			if (string.charAt(i)=='.') {
				index=i;
			}

		}
		return index;
	}

	function language(string){
		var text=string.substring(0,getLastPeriodIndex(string));
		return text;
	}
	function marqueeText(string){

		var program=language(string)

		switch(program){
			case 'python':
				return 'Hi, Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Take a look on our website.';
			case 'ruby':
				return 'I am Ruby, I help develop web apps. I am a great tool for whatever your want. Learn me now';
			case 'javascript':
				return 'Hello, my name is Javascript. I am a very good language for you to begin. Start Now!!';
			case 'java':
				return 'Hey there! I am Java, the only android development tool. Learn about me, and I\'ll empower you. Start Now!';
			default:
				return '';
		}


	}

	function statusCheck(status){
		if (status=='none') {
			return false;
		}
		else{
			return true;
		}
	}
	function valueCheck(value){
		if (value==NaN || value.length==0) {
			return false;
		}
		else{
			return true;
		}
	}
	
	$('#menuBar').click(function(){
		var status=$('#navigation').css('display');
		if (statusCheck(status)==true) {
			$('#navigation').slideUp();
		}
		else{
			$('#navigation').slideDown();
		}
		
	});

	$('#mainContact').click(function(){
		$('#navigation').hide();
	});

	$('.semiParent li').click(function(){
			var item=$(this).children().html();
			$('.body h3').html('Contact '+item);
	});
	

});