/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'firstname', 'lastname'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
        game: ['score','date','userId']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//