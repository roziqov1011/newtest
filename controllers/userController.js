const FS = require('../lib/fsDeal')

const user = new FS('./model/user.json')
// console.log();

module.exports = {
    GET: (req, res) => {
        const allUser = JSON.parse(user.read())
        const {name} = req.query
        let names = ''
        if(name){
            names = name
        }else{
            names = 'rozivoy'
        }
        const filUser = allUser.filter(e => e.name == names)
        try{
            res.render('index', {users: filUser})
        } catch(err) {
            console.log('ok');
        }
    },
    POST: (req, res) => {
        try{
            const data = req.body
            const allUser = JSON.parse(user.read())
            allUser.push({id: allUser.length + 1, ...data})
            user.write(allUser)
            res.redirect('/user')
        } catch(err) {
            console.log('ok');
        }
    }
}