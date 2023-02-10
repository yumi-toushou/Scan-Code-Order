import {
  Crud
} from '../crud.js'
class Good extends Crud {}
export default new Good({
  app: 'good'
})