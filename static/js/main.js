/*초기 로딩창 애니메이션*/
function main_loading() {
	$('#H_main_loading').removeClass("display_none");
	$('#H_main_loading').addClass("display_block");
	setTimeout(function() {
		setTimeout(function() {
			$('#H_main_loading').removeClass("display_block");
			$('#H_main_loading').addClass("display_none");
			$('#H_main_loading').removeClass("fadeOutLeft");
		}, 800);
		$('#H_main_loading').addClass("fadeOut");
	}, 1500);
}

/*언어전환 버튼*/
var is_korea = true
function select_korea() {
	if (is_korea == true){
		return;
	} else {
		is_korea = true;
		$(".H_language_kr").addClass("H_language_selected");
		$(".H_language_eng").removeClass("H_language_selected");
		$(".H_loading_first_step_voca_kr").removeClass("display_none");
		$(".H_loading_first_step_voca_eng").addClass("display_none");

		$('body').removeClass("H_belleza");
		$('body').addClass("H_suvflower");
		$('.H_title_kr').removeClass("display_none");
		$('.H_title_eng').addClass("display_none");
		$('.H_subtitle_kr').removeClass("display_none");
		$('.H_subtitle_eng').addClass("display_none");

		$('.H_info_body_content_eng').addClass("display_none");
		$('.H_info_body_content_kr').removeClass("display_none");
		$('#H_main_textarea').attr("placeholder", "한글을 입력해주세요!")

		$('.slider_info_eng').addClass("display_none");
		$('.slider_info_kr').removeClass("display_none");
	}
}
function select_english() {
	if (is_korea == false){
		return;
	} else {
		is_korea = false;
		$(".H_language_eng").addClass("H_language_selected");
		$(".H_language_kr").removeClass("H_language_selected");
		$(".H_loading_first_step_voca_eng").removeClass("display_none");
		$(".H_loading_first_step_voca_kr").addClass("display_none");

		$('body').addClass("H_belleza");
		$('body').removeClass("H_suvflower");
		$('.H_title_kr').addClass("display_none");
		$('.H_title_eng').removeClass("display_none");
		$('.H_subtitle_kr').addClass("display_none");
		$('.H_subtitle_eng').removeClass("display_none");

		$('.H_info_body_content_kr').addClass("display_none");
		$('.H_info_body_content_eng').removeClass("display_none");
		$('#H_main_textarea').attr("placeholder", "Input Hangul Please!")

		$('.slider_info_kr').addClass("display_none");
		$('.slider_info_eng').removeClass("display_none");
	}
}


/*INFO 관련 함수*/
function moveToInfo(){
	$('#H_info_body').removeClass("display_none");
	$("#H_info_body").addClass("slideInLeft");
	setTimeout(function() {
		$("#H_info_body").removeClass("slideInLeft");
	}, 1000);
}
function moveToMain(){
	$("#H_info_body").addClass("slideOutLeft");
	setTimeout(function() {
		$("#H_info_body").addClass("display_none");
		$('#H_info_body').removeClass("slideOutLeft");
	}, 1000);
}

/*메인 first_step 사이 로딩창*/
function moveToSecond(){
	$('#H_first_step_loading').addClass('fadeIn');
	$('#H_first_step_loading').removeClass('display_none');

	/*AJAX 연결함수에 붙힐 것*/
	setTimeout(function() {
		$('#H_first_step_loading').removeClass('fadeIn');
		$('#H_first_step_loading').addClass('fadeOut');
		setTimeout(function() {
			$('#H_first_step_loading').addClass('display_none');
			$('#H_first_step_loading').removeClass('fadeOut');
			$('#H_first_step').addClass("fadeOutUp");
			setTimeout(function() {
				$('#H_first_step').removeClass("fadeOutUp");
				$('#H_first_step').addClass("display_none");
				$('#H_main_textarea').val("")
			}, 900);
			$('#H_second_step').removeClass("display_none");
			$('#H_second_step').addClass("fadeInUp");
			setTimeout(function() {
				$('#H_second_step').removeClass("fadeInUp");
			}, 900);
		}, 900);
	}, 1500);
}
function moveToFirstPrev() {
	$("#H_second_step").addClass("fadeOutDown");
	setTimeout(function() {
		$('#H_second_step').removeClass("fadeOutDown");
		$("#H_second_step").addClass("display_none");
	}, 900);
	$("#H_first_step").removeClass("display_none");
	$("#H_first_step").addClass("fadeInDown");
	setTimeout(function() {
		$("#H_first_step").removeClass("fadeInDown");
	}, 900);
}
function moveToThird() {
	$('#H_second_step_loading').addClass('fadeIn');
	$('#H_second_step_loading').removeClass('display_none');

	/*AJAX 연결함수에 붙힐 것*/
	setTimeout(function() {
		$('#H_second_step_loading').removeClass('fadeIn');
		$('#H_second_step_loading').addClass('fadeOut');
		setTimeout(function() {
			$('#H_second_step_loading').addClass('display_none');
			$('#H_second_step_loading').removeClass('fadeOut');
			$('#H_second_step').addClass("fadeOutUp");
			setTimeout(function() {
				$('#H_second_step').removeClass("fadeOutUp");
				$('#H_second_step').addClass("display_none");
			}, 900);
			$('#H_third_step').removeClass("display_none");
			$('#H_third_step').addClass("fadeInUp");
			setTimeout(function() {
				$('#H_third_step').removeClass("fadeInUp");
			}, 900);
		}, 900);
	}, 1500);
}
function moveToSecondPrev() {
	$("#H_third_step").addClass("fadeOutDown");
	$("#H_second_step").removeClass("display_none");
	$("#H_second_step").addClass("fadeInDown");
	setTimeout(function() {
		$('#H_third_step').removeClass("fadeOutDown");
		$("#H_third_step").addClass("display_none");
		$('#H_third_step_image_container').css("background-image", "url('../static/image/bg_white.jpg')");
	}, 900);
	setTimeout(function() {
		$("#H_second_step").removeClass("fadeInDown");
	}, 900);
}
function moveToFourth() {
	$('#H_third_step').addClass("fadeOutLeft");
	$('#H_fourth_step').removeClass("display_none");
	$('#H_fourth_step').addClass("fadeInRight");
	setTimeout(function() {
		$('#H_third_step').removeClass("fadeOutLeft");
		$('#H_third_step').addClass("display_none");
	}, 900);
	setTimeout(function() {
		$('#H_fourt_step').removeClass("fadeInRight");
	}, 900);
}


function change_num(tag) {
	tag.parent().prev().text(tag.val())
	calligraphy_preview()
}
function select_parameter(tag) {
	$('.H_edit_button').removeClass("H_edit_button_selected");
	tag.toggleClass("H_edit_button_selected");
	$('.H_slider_container').removeClass("display_none");
	$('.H_slider_container').addClass("display_none");
	$("#H_"+tag.attr('id')+"_container").removeClass("display_none");
}
function select_font(tag) {
	$('.H_fontedit_button').removeClass("H_fontedit_button_selected");
	tag.toggleClass("H_fontedit_button_selected");
	calligraphy_preview();
}
function select_color(tag) {
	$('.jscolor').removeClass("H_fontcolor_button_selected");
	$('.H_fontcolor_button').removeClass("H_fontcolor_button_selected");
	tag.toggleClass("H_fontcolor_button_selected");
	calligraphy_preview();
}
function unready_image(tag) {
	tag.attr("src", "../static/image/noimage2.gif");
}
function change_bg(tag) {
	let img_src = tag.css("background-image");
	img_src = img_src.split('"')[1];
	$('#H_third_step_image_container').css("background-image", "url('"+img_src+"')");
	$('#H_fourth_step').addClass("fadeOutRight");
	setTimeout(function() {
		$('#H_fourth_step').removeClass("fadeOutRight");
		$('#H_fourth_step').addClass("display_none");
	}, 900);
	$('#H_third_step').removeClass("display_none");
	$('#H_third_step').addClass("fadeInLeft");
	setTimeout(function() {
		$('#H_third_step').removeClass("fadeInLeft");
	}, 900);
}


function imagesave() {
	$("#H_saving_modal").slideToggle("slow");
	setTimeout(function() {
		$("#H_saving_modal").slideToggle("slow");
	}, 2000);
	/*
	let img_src = $("#H_third_step_image_container").css("background-image").split('"')[1];
	let target_src = $("#H_target_image").attr("src");
	let canvas = document.querySelector("#H_save_image_canvas");
	let ctx = canvas.getContext("2d");
	$('#H_bg_src').attr("src", img_src);
	$('#H_attach_src').attr("src", target_src);
	let bg_img = document.getElementById("H_bg_src");
	let attach_img = document.getElementById("H_attach_src");
	ctx.drawImage(bg_img, 0, 0, $("#H_bg_src").width(), $("#H_bg_src").height(), 0, 0, 360, 640);
	ctx.drawImage(attach_img, 40, 80, $('#H_attach_src').width(), $('#H_attach_src').height(), 0, 0, 120, 50);
	let save_img = new Image();
	save_img.setAttribute('crossOrigin', 'anonymous');
	//save_img.src = canvas.toDataURL("image/png");
	var dataURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	window.location.href=dataURL;
	//window.open(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""), "_blank");
	*/
}


function calligraphy_preview() {
	let string = "아름다운한글";
	let font = $(".H_fontedit_button_selected").attr("number");
	let letter = $("#slider_letter_space").val();
	let definition = $("#slider_definition").val();
	let color = $(".H_fontcolor_button_selected").css("background-color");

	if (letter < 70){
		letter = 0;
	} else if (letter > 70){
		letter = 2;
	} else {
		letter = 1;
	}

	if (definition < 65) {
		definition = 0;
	} else if (definition > 65) {
		definition = 2;
	} else {
		definition = 1;
	}
	
	if (color == "rgb(255, 255, 255)") {
		color = 1;
	} else {
		color = 0;
	}
	let output = string+'_'+String(font)+String(letter)+String(definition)+String(color)+".png";
	let preview_src = "../static/result/"+string+"/"+output;
	$("#H_target_preview").addClass("fadeOut");
	setTimeout(function() {
		$("#H_target_preview").attr("src", preview_src);
		$("#H_target_preview").addClass("fadeIn");
		$("#H_target_preview").removeClass("fadeOut");
		setTimeout(function() {
			$("#H_target_preview").removeClass("fadeIn");
		}, 200);
	}, 200);
	$("#H_target_image").addClass("fadeOut");
	setTimeout(function() {
		$("#H_target_image").attr("src", preview_src);
		$("#H_target_image").addClass("fadeIn");
		$("#H_target_image").removeClass("fadeOut");
		setTimeout(function() {
			$("#H_target_image").removeClass("fadeIn");
		}, 200);
	}, 200);
}