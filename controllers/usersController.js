const { response, request } = require ('express');
const User  = require('../models/user'); 
const usersGet = async(req = request, res = response) => {
    const users = await User.find();
    
    res.json({
        users
    });
}

const userGetById = async(req, res = response) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.json({
        user
    });
}

const userPost = async(req, res = response) => {
    
    const { name, email, birthDate, ...body} = req.body;
    const user = new User({ name, email, birthDate, ...body});
    const birth = new Date(user.birthDate);
    user.birthDate = birth.toISOString();

    await user.save();
    res.status(201).json(user)
   
}

const userPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, ...rest} = req.body;

    rest.birthDate = new Date(rest.birthDate);
    rest.birthDate =rest.birthDate.toISOString();
        
    const user = await User.findByIdAndUpdate(id, rest);

    res.json(user);
}

const userDelete = async(req, res =response) => {
    const {id} = req.params;
    
    const user = await User.findByIdAndRemove( id );

    res.json(user)
}

module.exports = {
    usersGet,
    userGetById,
    userPost,
    userPut,
    userDelete,
}