const bcrypt = require('bcrypt')

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12)
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if (result) {
        console.log("LOGGED")
    } else {
        console.log("INCORRECT")
    }
}

// hashPassword('monkey');

login('monkey', '$2b$12$r.d4amorP2WNBsf3N1l4dun6dBBj59MvI.8MCn3hJxKp7N8YAwUQq')