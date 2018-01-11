$(function(){

	$("#btn-bill").on("click", function(){
		$("#bill-gates").toggleClass("hidden");
		$(this).toggleClass("btn-primary btn-default");
		console.log('click');
		$("#anchor-bill").toggleClass("hidden");
	});
	$("#btn-stephen").on("click", function(){
		$("#stephen-hawking").toggleClass("hidden");
		$(this).toggleClass("btn-success btn-default");
		console.log('click');
		$("#anchor-stephen").toggleClass("hidden");
	});
	$("#btn-puth").on("click", function(){
		$("#charlice-puth").toggleClass("hidden");
		$(this).toggleClass("btn-info btn-default");
		console.log('click');
		$("#anchor-puth").toggleClass("hidden");
	});
	$("#btn-napoleon").on("click", function(){
		$("#napoleon-bonaparte").toggleClass("hidden");
		$(this).toggleClass("btn-danger btn-default");
		console.log('click');
		$("#anchor-napoleon").toggleClass("hidden");
	});


});