import BaseController from "./BaseController";
import { good } from '../models/Good/Good'

class GoodController extends BaseController {
}

export default new GoodController({model: good})