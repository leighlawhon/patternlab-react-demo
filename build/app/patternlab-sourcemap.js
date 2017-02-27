var pagesHomepage = require('/Users/pete/Sites/patternlab-react/patternlab-react-demo/build/app/components/pages/Homepage.js')
var atomsglobalPageTitle = require('/Users/pete/Sites/patternlab-react/patternlab-react-demo/build/app/components/atoms/global/PageTitle.js')
var moleculesglobalPageHeader = require('/Users/pete/Sites/patternlab-react/patternlab-react-demo/build/app/components/molecules/global/PageHeader.js')

exports.componentList = {
'pages/Homepage' : pagesHomepage.default,
'atoms/global/PageTitle' : atomsglobalPageTitle.default,
'molecules/global/PageHeader' : moleculesglobalPageHeader.default,
}
exports.jsonFileStruc = [{"name":"pages","type":"folder","children":[{"type":"file","name":"Homepage","path":"pages/Homepage"},{"type":"file","name":"VIEW ALL","path":"pages/view-all"}],"path":"/pages"},{"name":"atoms","type":"folder","children":[{"name":"global","type":"folder","children":[{"type":"file","name":"PageTitle","path":"atoms/global/PageTitle"},{"type":"file","name":"VIEW ALL","path":"atoms/global/view-all"}],"path":"atoms/global"},{"type":"file","name":"VIEW ALL","path":"atoms/view-all"}],"path":"/atoms"},{"name":"molecules","type":"folder","children":[{"name":"global","type":"folder","children":[{"type":"file","name":"PageHeader","path":"molecules/global/PageHeader"},{"type":"file","name":"VIEW ALL","path":"molecules/global/view-all"}],"path":"molecules/global"},{"type":"file","name":"VIEW ALL","path":"molecules/view-all"}],"path":"/molecules"},{"type":"file","name":"VIEW ALL","path":"/view-all"}]