const { Model, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
    static get tableName(){

    }
}

module.exports = BaseModel
