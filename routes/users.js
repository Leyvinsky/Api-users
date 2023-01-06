const { Router } = require('express');
const { check } = require( 'express-validator');
const { validateData } = require('../middlewares/validateData');
const { emailExist, existUserById } = require('../helpers/dbValidators');
const { usersGet,
        userGetById,
        userPost,
        userPut,
        userDelete } = require('../controllers/usersController');

const router = Router();

router.get('/',usersGet);

router.get('/:id', [
    check('id', 'Id is not a valid Mongo id').isMongoId(),
    check ('id').custom(existUserById),
    validateData
],  userGetById);

router.put('/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check ('id').custom(existUserById),
    validateData,
],  userPut);

router.post('/',[
    
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('email').custom( emailExist),
    check('birthDate', 'Birthdate is required').not().isEmpty(),
    
    validateData,
],  userPost);

router.delete('/:id',[
    check ('id').custom(existUserById),
    validateData 
],  userDelete);

module.exports = router;