const toyUserClassService = require('../services/memberLocalService');

module.exports.postMemberSignUp = async (params) => {
    const newMember = {
        memberId : params.memberId,
        memberName : params.memberName,
        password : params.password,
        birthInfo : params.birthInfo,
        createdAt : new Date().toISOString()
    }

    const result = await toyUserClassService.appendUser(newMember);
    console.log(JSON.stringify(result));
    return {
        success : true,
        message : 'Member Sign Up Success',
        data : JSON.stringify(result, null, 2)
    };
};

module.exports.getMemberList = async () => {
    const result = await toyUserClassService.readUserList();
    return {
        success : true,
        message : 'Member List',
        data : JSON.parse(JSON.stringify(result, null, 2))
        // data : JSON.parse(result)
    }
}

module.exports.updateMember = async (params) => {
    const result = await toyUserClassService.updateUser(params.memberId, params);
    return {
        success : true,
        message : 'Member Update Success',
        data : JSON.stringify(result, null, 2)
    }
}

module.exports.deleteMember = async (params) => {
    const result = await toyUserClassService.deleteUser(params.memberId);
    return {
        success : true,
        message : 'Member Delete Success',
        data : { memberId : result.memberId }
    }
}