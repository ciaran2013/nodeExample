//Get home page
module.exports.index = function(req, res) {
    res.render('index', { title: 'Ciaran Murray' });
};