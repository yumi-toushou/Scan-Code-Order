import BaseController from "./BaseController";
import { category } from '../models/Category/Category'

class CategoryController extends BaseController {
}

export default new CategoryController({model: category})