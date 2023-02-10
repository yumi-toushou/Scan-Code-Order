import BaseController from "./BaseController";
import { user } from '../models/user/User'

class UserController extends BaseController {
}

export default new UserController({model: user})