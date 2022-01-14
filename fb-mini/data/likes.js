const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('like', ({ user1Id, user2Id, postId }) => ({
    id: casual.uuid,
    post: postId,
    user1: user1Id,
    user2: user2Id,
}))

const likeData = []

for (let i = 0; i < 10; i+=1){
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    const postId = casual.random_element(postData).id
    likeData.push(casual.like({ user1Id, user2Id, postId }))
}

console.log(likeData)
module.exports = likeData