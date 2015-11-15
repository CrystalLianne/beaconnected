if (Meteor.isClient) {
Template.individual_listings_page.rendered = search_users;
Template.business_listings_page.rendered = search_users;
Template.services_listings_page.rendered = search_users;
function search_users() {
{
 // $(function() {
	localStorage.layout = '{"name":"string","proffession":"string","email":"string","skills":{"cat1":["test","test2","test3","HTML","CSS","JavaScript"],"cat2":[""],"cat3":["a","b","c",""],"cat4":[""]}}';

	var users = (localStorage.hasOwnProperty('users')) ? JSON.parse(localStorage['users']) : {};
	var layout = (localStorage.hasOwnProperty('layout')) ? JSON.parse(localStorage['layout']) : {};
	var currentUserString = '';
	var searchHTMLString = '';
	var searchBoxes = '';
	
	
	function searchMe(id, value) {
		$('.'+id+':not(:contains("'+value+'"))').parent('div.user').hide();
		$('.'+id+':contains("'+value+'")').parent('div.user').show();
	}
	
	//for(key in layout) {
	//	searchBoxes += '<label>' + key +'</label>' + '<input type="text" placeholder="'+key+'" id="'+key+'" />';
	//}
	
	$('body').on('keyup', 'input', function() {
	var typedValue = ($(this).val());
			searchMe($(this).attr('id'), typedValue);
	});
	
	$('.search_boxes').html(searchBoxes);
	
	
	for(key in users) {
		currentUserString += '<div class="user">';
		
		for(childKey in users[key]) {
		var userValue = users[key][childKey];
			if(typeof userValue === 'string') {
			var bold = (childKey === "name") ? "bold" : "normal";
				currentUserString += '<span class="'+childKey+'" style="font-weight:'+bold+'">' + userValue + '</span><br />';
			} else {
				currentUserString += '<div class="skills">'+childKey+'<ul>';
				for(property in userValue) {
					currentUserString += '<li>'+userValue[property]+'</li>';
				}
				currentUserString += '</ul></div>';
			}
		}

		currentUserString +='</div>';
		currentUserString +='<span class="home_menu sub-menu" style="float:right;">\
		<br /><div class="location"></div>\
		<div style="float:right; width: 100px;">\
		<a href="" class="orange-button connect-to">Connect</a><br />\
		<br /><a href="" class="white-button">View Profile</a></div></span>';
	}
	console.log(currentUserString);
	console.log($('.current_users').length);
	
	$('.current_users').html(currentUserString);
	$('.connect-to').click(function(e) {
	e.preventDefault();
		$(this).css('background-color', '#73DE50').text('Connected');
	});
//});
  }
}
}