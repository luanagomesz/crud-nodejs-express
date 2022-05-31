import {Router} from "express"
import createUserController from "../controller/createUser.controller"
import deleteUserController from "../controller/deleteUser.controller"
import listUsersController from "../controller/listUsers.controller"
import updatedUserController from "../controller/updateUser.controller"

const router = Router()
router.post("", createUserController)
router.get("", listUsersController)
router.put("/:id", updatedUserController)
router.delete("/:id", deleteUserController)



export default router