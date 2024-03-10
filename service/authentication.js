const JWT = require("jsonwebtoken")

const secrte = "$uperMan@123";

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL:user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secrte);
    return token;
}
function validateToken(token){
  const payload = JWT.verify(token, secrte);
  return payload;
}

module.exports={
    createTokenForUser,
    validateToken,

}
