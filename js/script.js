// Brand replace
brand = $('.navbar-brand').text();
brand = brand.replace(/(['&.e])/g,"<span class=\"text-primary\">$1</span>");
$('.navbar-brand').html(brand);