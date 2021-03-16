const express = require('express')
const app = express()
const port = 8181

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// <> dc:identifier "https://library.oapen.org/bitstream/20.500.12657/22309/1/COMPETITION%20LAW%20PDF.pdf" .
// <> dc:identifier.isbn "9781930000000" .
// <> dc:contributor.author "" .
// <> dc:contributor.editor "Klaaren, Jonathan||Roberts, Simon||Valodia, Imraan" .
// <> dc:date.accessioned "2020-03-23 14:58:53||2020-04-01T06:48:29Z" .
// <> dc:date.available "2020-04-01T06:48:29Z" .
// <> dc:date.issued "2019" .
// <> dc:description.abstract "This volume locates the international debates on competition and corporate power in the critical issue of inclusive growth. There is a particular focus on shaping regional energy markets, taking into account the implications of climate change as well as the challenges of extending access to affordable energy to low-income households and small businesses. The volume critically assesses the efficacy of the competition and economic regulation framework, reviewing the impact of the regional (ie. southern African) competition authorities and surveying the impact of particular interventions in the competition and economic regulation arena. This book accomplishes two tasks that are still not adequately covered in the existing literature: first, the book examines in a single framework both competition and economic regulation and second, it takes a southern African view in examining these two topics. Competition and regulation are both distinct but crucial areas of knowledge for the development of the economies of the countries of Southern Africa. The legal and policy framework for competition and regulation in the region is relatively new with a number of national institutions still in their infancy. There is an emphasis on developing African case studies for both training and knowledge-sharing purposes." .
// <> dc:identifier.uri "http://library.oapen.org/handle/20.500.12657/22309" .
// <> dc:language "English[eng]" .
// <> dc:relation.ispartofseries "" .
// <> dc:subject.classification "bic Book Industry Communication::K Economics, finance, business & management::KJ Business & management||bic Book Industry Communication::K Economics, finance, business & management::KJ Business & management::KJB Business studies: general||bic Book Industry Communication::K Economics, finance, business & management::KJ Business & management::KJC Business strategy||bic Book Industry Communication::K Economics, finance, business & management::KJ Business & management::KJF Business competition" .
// <> dc:subject.other "Politics||government||economics||business||corporate||competition" .
// <> dc:title "Competition and Regulation for Inclusive Growth in Southern Africa" .
// <> dc:title.alternative "" .
// <> dc:type "book" .
app.use(function(req, res, next) {
    res.send('@prefix fedora : <http://fedora.info/definitions/v4/repository#>\n' +
              'id      = . :: xsd:string ;\n' +
              'title = dc:title :: xsd:string;\n' +
              'uuid = fedora:uuid :: xsd:string;\n' +
              'isbn = dc:identifier.isbn :: xsd:string;\n' +
              'author = dc:contributor.author :: xsd:string;\n' +
              'editor = dc:contributor.editor :: xsd:string;\n' +
              'abstract = dc:description.abstract :: xsd:string;');
});

/*
@prefix fedora : <http://fedora.info/definitions/v4/repository#>
id      = . :: xsd:string ;
title = dc:title :: xsd:string;
uuid = fedora:uuid :: xsd:string;
isbn = dc:identifier.isbn :: xsd:string;
author = dc:contributor.author :: xsd:string;
editor = dc:contributor.editor :: xsd:string;
abstract = dc:description.abstract :: xsd:string;
*/

app.listen(port, '0.0.0.0', () => {
  console.log(`LDPATH program is listening at http://localhost:8181`)
})
