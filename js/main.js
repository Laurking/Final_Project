$(function(){

	$('#next').click(displayNextImage);
	$('#back').click(displayPreviousImage);

	var languages=['java.jpg','python.png','ruby.png','javascript.png','jquery.jpg','objectivec.png','php.png','swift.png'];

	var images=['image1','image2','image3','image4','image5','image6','image7'];

	var count=0;

	var mainWidth=$('.main').width();

	var windowWidth=$(window).width();	

	$('.controlls').css('width',mainWidth);

	$('.menu_icon').click(function(){

		$('.small_nav').slideToggle('fast');
		$('.controlls').toggleClass('active');


	});
	if (windowWidth<768) {
		$('.programs .language a').hide();
	}
	

	setInterval(function(){
		displayMobileImage();
	},20000);

	$(window).resize(function(){

		var mainWidth=$('.main').width();
		var getWindowWidth=$(window).width();
		$('.controlls').css('width',mainWidth);

		if (getWindowWidth>768){
			$('.small_nav').show('fast');
		}
		else if(getWindowWidth<=768){
			$('.programs .language a').hide();
		}
		$('.programming').click(function(){

			$('.programs').show();
			$('.programs .language a').show();
			$('.mainBoard').hide();
		});
	
	});

	$('.slideBar').hover(function(){
		$('.active').toggle()
		var status=$('.programs').css('display');
		if (statusCheck(status)==true) {
			$('aside').toggle();
			$('.programs').css('width','100%')
		}

	});

	$('.programs .language h3').hover(function(){
		var getContent=$(this).html();
		    
	});
	
	

////////////////////////////////////////////////////////////////////
//This part deals with the window size greater than 768px
////////////////////////////////////////////////////////////////////

//This method display the previous image slide and list item 
// at index number count;
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

//This method display the next image slide and list item 
// at index number count;

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

////////////////////////////////////////////////////////////////////
//This part deals with the window size lass than or equal to 768px
////////////////////////////////////////////////////////////////////
	function displayMobileImage(){
		if (count<languages.length-1) {
			count+=1;
			
		}
		else if (count>=languages.length-1){
			count=0;
		}
		var src='../img/'+languages[count];
		var text=marqueeText(languages[count]);
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

	$('.programming').click(function(){

		if (windowWidth<768) {
			$('.programs .language a').hide();

			$('.programs .language h3').toggle();
	
		}
		else if(windowWidth>767){
			$('.programs').show();
			$('.programs .language a').show();
			$('.mainBoard').hide();
		}
	});

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
	$('#SubmitRegistration').click(function(){
		var firstname=$('input[name="firstname"]').val();
		var middlename=$('input[name="middlename"]').val();
		var lastname=$('input[name="lastname"]').val();
		if (valueCheck(firstname)==true && valueCheck(middlename)==true && valueCheck(lastname)==true) {
			window.location="welcome.html";
			$('#post').html("");
		}
	})

});	
	