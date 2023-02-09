import {
  Crud
} from '../crud.js'
class Order extends Crud {}
export default new Order({
  app: 'order'
})