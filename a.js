const fs = require('fs')

function getHtml() {
    return new Promise((resolve, reject) => {
        var htmls = []
        fs.readdirSync('interview').forEach(file => {
            if (file.match(/.html$/)) {
                htmls.push(file)
            }
            resolve(htmls)
        })
    })
}

getHtml().then(res => {
    var htmlContent = ''
    res.map(item => {
        htmlContent += createLink(item, 'interview')
    })
    fs.writeFileSync('navq.html', htmlContent, function (err) {
        console.log(err)
    })
})
function createLink(link, relative) {
    return '<a href="'+relative + '/' + link + '" target="_blank">' + link + '</a></br>'
}
