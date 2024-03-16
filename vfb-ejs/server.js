const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'resources')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline,
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/lagom-journey', function(req, res) { res.render('pages/lagom/lagom-journey') });
app.get('/live-lagom', function(req, res) { res.render('pages/lagom/live-lagom') });
app.get('/live-lagom-christmas', function(req, res) { res.render('pages/lagom/live-lagom-christmas') });
app.get('/live-lagom-fermenting', function(req, res) { res.render('pages/lagom/live-lagom-fermenting') });
app.get('/live-lagom-food-cupboard-organisation-challenge', function(req, res) { res.render('pages/lagom/live-lagom-food-cupboard-organisation-challenge') });
app.get('/live-lagom-food-cupboard-recipe-challenge', function(req, res) { res.render('pages/lagom/live-lagom-food-cupboard-recipe-challenge') });
app.get('/live-lagom-get-growing', function(req, res) { res.render('pages/lagom/live-lagom-get-growing') });
app.get('/live-lagom-growing-leftovers', function(req, res) { res.render('pages/lagom/live-lagom-growing-leftovers') });
app.get('/live-lagom-intro', function(req, res) { res.render('pages/lagom/live-lagom-intro') });
app.get('/live-lagom-meal-planning', function(req, res) { res.render('pages/lagom/live-lagom-meal-planning') });
app.get('/live-lagom-plastic-waste-challenge', function(req, res) { res.render('pages/lagom/live-lagom-plastic-waste-challenge') });
app.get('/live-lagom-pots', function(req, res) { res.render('pages/lagom/live-lagom-pots') });
app.get('/live-lagom-relove-reuse', function(req, res) { res.render('pages/lagom/live-lagom-relove-reuse') });
app.get('/live-lagom-seed-bombs', function(req, res) { res.render('pages/lagom/live-lagom-seed-bombs') });
app.get('/live-lagom-waste-not-want-not', function(req, res) { res.render('pages/lagom/live-lagom-waste-not-want-not') });
app.get('/live-lagom-cosy-homes', function(req, res) { res.render('pages/lagom/live-lagom-cosy-homes') });

app.get('/our-town', function(req, res) { res.render('pages/town/our-town') });

app.get('/pet-adventures', function(req, res) { res.render('pages/pets/pet-adventures') });
app.get('/nikita', function(req, res) { res.render('pages/pets/nikita') });
app.get('/kuma-and-jak', function(req, res) { res.render('pages/pets/kuma-and-jak') });
app.get('/kuma', function(req, res) { res.render('pages/pets/kuma') });
app.get('/jak', function(req, res) { res.render('pages/pets/jak') });
app.get('/cat-and-dog-adventures', function(req, res) { res.render('pages/pets/cat-and-dog-adventures') });
app.get('/cat-and-dog-adventures-dna', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-dna') });
app.get('/cat-and-dog-adventures-fights', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-fights') });
app.get('/cat-and-dog-adventures-gardening-at-night', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-gardening-at-night') });
app.get('/cat-and-dog-adventures-hunting', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-hunting') });
app.get('/cat-and-dog-adventures-killer-queen', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-killer-queen') });
app.get('/cat-and-dog-adventures-king-of-pain', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-king-of-pain') });
app.get('/cat-and-dog-adventures-nikita', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-nikita') });
app.get('/cat-and-dog-adventures-shake-a-leg', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-shake-a-leg') });
app.get('/cat-and-dog-adventures-simply-the-best', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-simply-the-best') });
app.get('/cat-and-dog-adventures-standing-on-one-leg', function(req, res) { res.render('pages/pets/cat-and-dog-adventures-standing-on-one-leg') });

app.get('/other-sustainability', function(req, res) { res.render('pages/sustainability/other-sustainability') });
app.get('/sustainability-another-laundry-basket', function(req, res) { res.render('pages/sustainability/sustainability-another-laundry-basket') });
app.get('/sustainability-laundry-basket', function(req, res) { res.render('pages/sustainability/sustainability-laundry-basket') });
app.get('/sustainability-light-swap', function(req, res) { res.render('pages/sustainability/sustainability-light-swap') });
app.get('/sustainability-more-tablecloths', function(req, res) { res.render('pages/sustainability/sustainability-more-tablecloths') });
app.get('/sustainability-natural-dyes', function(req, res) { res.render('pages/sustainability/sustainability-natural-dyes') });
app.get('/sustainability-plant-pots', function(req, res) { res.render('pages/sustainability/sustainability-plant-pots') });
app.get('/sustainability-refurbishing-furniture', function(req, res) { res.render('pages/sustainability/sustainability-refurbishing-furniture') });
app.get('/sustainability-refurbishing-garden-items', function(req, res) { res.render('pages/sustainability/sustainability-refurbishing-garden-items') });
app.get('/sustainability-shelter-in-the-rain', function(req, res) { res.render('pages/sustainability/sustainability-shelter-in-the-rain') });
app.get('/sustainability-tablecloths', function(req, res) { res.render('pages/sustainability/sustainability-tablecloths') });
app.get('/sustainability-wood-lye', function(req, res) { res.render('pages/sustainability/sustainability-wood-lye') });

app.get('/about-us', function(req, res) { res.render('pages/about-us') });
app.get('/accessibility-statement', function(req, res) { res.render('pages/accessibility-statement') });
app.get('/family-history', function(req, res) { res.render('pages/family-history') });

app.listen(8080);
console.log('Server is listening on port 8080');