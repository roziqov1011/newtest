module.exports = {
    GET: (req, res) => {
        try{
            res.render('index')
        } catch(err) {
            console.log('ok');
        }
    }
}