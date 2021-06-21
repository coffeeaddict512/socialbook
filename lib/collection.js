// a database to store user profiles
profilesdb = new Mongo.Collection('userProfiles');

profilesdb.allow({
    update: function (userId, doc){
        if (userId == doc.pOwn)
            return true;
        return false;
    },
    remove: function (userId, doc){
        if (userId == doc.pOwn)
            return true;
        return false;
    },
    insert: function (userId, doc){
        if (userId)
            return true;
        return false;
    }
});