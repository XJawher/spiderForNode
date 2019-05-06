const Nightmare = require('nightmare');
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: true });

nightmare
    .goto('http://www.sxgjj.com/content/SPFMM.aspx')
    // .type('#inp-query', '电影')
    .click('#AutoPage1_hpl_Next')
    .wait('#AutoPage1_hpl_Next')
    .evaluate(() => {
        return document.querySelector('#dlliebiao').innerHTML;
    })
    .end()
    .then((html) => {
        const $ = cheerio.load(html);
        console.log($('tbody tr').length);
        console.log($('tbody tr')[0]);
        // $('tbody tr').each((index, element) => {
        //     console.log(element.children[0]);
        // });
    })
    .catch(error => {
        console.error('Search failed:', error);
    });