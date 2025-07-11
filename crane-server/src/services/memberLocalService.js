const fs = require('fs').promises;
const path = require('path');
const { RequestParamsError } = require('../common/errors');

class MemberLocalService {
    constructor() {
        this.filePath = path.join(__dirname, '../localDocuments/local_member_document.json');
    }

    async readUserList() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') return []; // 파일이 없는 경우 빈 배열 반환
            throw error;
        }
    }

    async writeUserList(userList) {
        await fs.writeFile(this.filePath, JSON.stringify(userList, null, 2));
    }

    async appendUser(newUser) {
        const userList = await this.readUserList();
        if(!userList) {
            userList.forEach(user => {
                console.log('userList => ',user);
            })
        }
        if (userList.some(user => user.memberId === newUser.memberId)) { // 중복 ID 방지
            throw new RequestParamsError ('Already exists memberId');
        }
        userList.push(newUser);
        await this.writeUserList(userList);
        console.log('newUser 입력',newUser);
        return newUser;
    }
}
module.exports = new MemberLocalService();