
const {Schema, model } = require('mongoose');


const UserSchema = Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique :true
    },
    birthDate: {
        type: String,
        required: true
    },

    address: [
        {
            street: { 
                type: String, 
                required: true 
            },
            
            state: { 
                type: String, 
                required: true
            },

            city: {
                type: String, 
                required: true 
            },
            country: {
                type: String,
                required: true,
            },
            zip: { 
                type: String, 
                required: true 
            },
        },
    ]

});

UserSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    user.uid = _id;
    
    return user;
}

module.exports = model('User', UserSchema);


