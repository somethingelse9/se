function askQuestions ()
{
	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + " " + lastName;
	console.log(fullName);

	console.log("="+firstName+"=");
	console.log("="+firstName.trim()+"=");


	if (firstName.trim() == "General" && lastName != "Assembly")
	{
		console.log('Hello General');
	}


	var faveColour = prompt('fav colour:').toLowerCase();

	if (faveColour === 'red')
	{
		$('h1').css('color', faveColour);
	}
}

$(function()
	{
		$('img').on('click', askQuestions);
	}



	)




/*
var age = prompt('how old are you?');
age = parseInt(age);

if (age>=18)
	{

		console.log('you are an adult');
	}
else if (age>=13)
	{
		console.log ('you are a teenager');
	}
else
	{
		console.log ('you are a child');
	}

*/

















/* When page loaded */
$(function(){





	/* When click an h3 */
	$('h3').on('click',function(){
		/* Hide/reveal (ie toggle) next element */
		$(this).next().slideToggle();

	});



});