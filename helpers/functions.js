const models = require('./../models/index')

async function sesUserName(req) {
    let isEmpty = (myObject) => {
        for(var key in myObject) {
            if (myObject.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    let userName
    if((req.session.passport !== undefined) && !isEmpty(req.session.passport)) {
        userName = await models.User.findByPk(req.session.passport.user.id)
        userName = userName.name
    }
    else {
        userName = false
    }
    return {name: userName}
}
module.exports = sesUserName;