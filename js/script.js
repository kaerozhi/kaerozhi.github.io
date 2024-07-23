// Brand replace
brand = $('.navbar-brand').text();
regex = /\b(\w)/g;
const matches = [];
let match;

while ((match = regex.exec(brand)) !== null) {
    matches.push(match[1]);
}

brand = matches;
$('.navbar-brand').html(brand);
$('.modal-brand').html(brand);