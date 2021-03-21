const express = require('express')
const app = express()
const port = 8181

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log('Got request for a programm')
    res.send('@prefix fedora : <http://fedora.info/definitions/v4/repository#>\n' +
              'id      = . :: xsd:string ;\n' +
              'title = dc:title :: xsd:string;\n' +
              'title.alternative = dc:title.alternative :: xsd:string;\n' +
              'uuid = fedora:uuid :: xsd:string;\n' +
              'isbn = dc:identifier.isbn :: xsd:string;\n' +
              'author = dc:contributor.author :: xsd:string;\n' +
              'editor = dc:contributor.editor :: xsd:string;\n' +
              'abstract = dc:description.abstract :: xsd:string;\n' +
              'identifier = dc:identifier :: xsd:string;\n' +
              'date.accessioned = dc:date.accessioned :: xsd:string;\n' +
              'date.available = dc:date.available :: xsd:string;\n' +
              'date.issued = dc:date.issued :: xsd:string;\n' +
              'uri = dc:identifier.uri :: xsd:string;\n' +
              'language = dc:language :: xsd:string;\n' +
              'relation.ispartofseries = dc:relation.ispartofseries :: xsd:string;\n' +
              'subject.classification = dc:subject.classification :: xsd:string;\n' +
              'subject.other = dc:subject.other :: xsd:string;\n' +
              'type = dc:type :: xsd:string;\n'
    );
});

app.listen(port, '0.0.0.0', () => {
  console.log(`LDPATH program is listening at http://localhost:8181`)
})
