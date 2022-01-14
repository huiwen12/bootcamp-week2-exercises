const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userId }) => ({
    id: casual.uuid,
    user: userId,
    content: casual.sentences(n=3),
    likes: casual.integer(from = 0, to = 1000),
}))

const postData = []

for (let i = 0; i < 15; i+=1){
    const userId = casual.random_element(userData).id
    postData.push(casual.post({ userId }))
}


module.exports = postData