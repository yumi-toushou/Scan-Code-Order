import BaseController from "./BaseController";
import { desk } from '../models/Desk/Desk'

class DeskController extends BaseController {
}

export default new DeskController({model: desk})