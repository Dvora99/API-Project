const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const opt = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'Coding'
}
const admin = require('../model/Admin_model')
passport.use(new JWTStrategy(opt, async function(userdata,done){
    const adminRecord = await admin.findById(userdata._id)
    if(adminRecord){
     return done(null,adminRecord)
    }
    else{
     return done(null,false)
    }
}))
module.exports = passport   