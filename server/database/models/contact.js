const bookshelf = require('../bookshelf');

require('./user');
class Contact extends bookshelf.Model {
    get tableName() {
        return 'contacts'
    }
    get hasTimestamps() {
        return true;
    }

    created_by() {
        return this.belongsTo('User');
    }
}

module.exports = bookshelf.model('Contact', Contact);