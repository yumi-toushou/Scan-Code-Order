import BaseController from "./BaseController";
import { order } from '../models/Order/Order'

class OrderController extends BaseController {
}

export default new OrderController({model: order})