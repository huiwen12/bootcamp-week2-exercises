const casual = require('casual')
const userData = require('./users')

casual.define('notification', ({ user1Id, user2Id }) => ({
    id: casual.uuid,
    user1: user1Id,
    user2: user2Id,
    message: casual.sentence,
    status: casual.random_element(['read', 'unread']),
}))

const notificationData = []

for (let i = 0; i < 5; i+=1){
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    notificationData.push(casual.notification({ user1Id, user2Id }))
}

console.log(notificationData)

module.exports = notificationData