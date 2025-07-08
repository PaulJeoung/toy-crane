const toyUserClassService = require('../services/toyUserClassService');

module.exports.postMemberSignUp = async (params) => {
    const newMember = {
        memberId : params.memberId,
        memberName : params.memberName,
        password : params.password,
        birthInfo : params.birthInfo,
        createdAt : new Date().toISOString(),
    }

    const result = await toyUserClassService.appendUser(newMember);
    console.log(JSON.stringify(result));
    return {
        success : true,
        message : 'Member Sign Up Success',
        data : result,
    };
};