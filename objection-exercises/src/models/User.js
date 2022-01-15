const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      pets: {
        relation: this.HasManyRelation,
        modelClass: Pets,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        }
      }
    }

  }

}

module.exports = User
