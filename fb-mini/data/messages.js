const casual = require('casual')
const userData = require('./users')

casual.define('message', ({ user1Id, user2Id }) => ({
    id: casual.uuid,
    sender: user1Id,
    receiver: user2Id,
    message: casual.sentences(n=2),
    status: casual.random_element(['delivered', 'read', 'unread', 'not delivered']),
}))

const messageData = []

for (let i = 0; i < 5; i+=1){
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    messageData.push(casual.message({ user1Id, user2Id }))
}

console.log(messageData)

module.exports = messageData