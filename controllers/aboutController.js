// function which handles requests for  displaying About Diabetes page
const getAboutDiabetes = (req, res) => {
    res.render('aboutDiabetes.hbs')
}

// function which handles requests for  displaying About this Website page
const getAboutWebsite = (req, res) => {
    res.render('aboutWebsite.hbs')
}

// exports an object, which contain functions imported by router
module.exports = {
    getAboutDiabetes,
    getAboutWebsite,
}
