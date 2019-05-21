const bookshelf = require('../bookshelf');

require('./contact');

class User extends bookshelf.Model {
    get tableName() {
        return 'user'
    }
    get hasTimestamps() {
        return true;
    }

    contacts() {
        return this.hasMany('Contact');
    }
}

module.exports = bookshelf.model('User', User);