import users from "../database/"
import {v4 as uuidv4} from "uuid"
const createUserService = (email, name) => {

    const userAlreadyExists = users.find((user)=> user.email === email)
   if(userAlreadyExists){
    return "this email adress is already being used"
}
    const newUser = {
        email,
        name,
        id: uuidv4()
    }
    users.push(newUser)

    return newUser
}

export default createUserService