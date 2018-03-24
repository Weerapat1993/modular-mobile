/**
 * @class ArrayColletcion
 */
class ArrayCollection {
  /**
   * Build Array Collection
   * @constructor
   * @param {Array.<Object>} data Array data
   * @param {string} primaryKey Primary Key in Array
   * @example
   * 
   * const Collection = new ArrayCollection([], 'primaryKey')
   */
  constructor(data, primaryKey) {
    /** @type {string} */
    this.primaryKey = primaryKey || 'id'
    /** @type {Array.<Object>} */
    this.firstData = data || []
    /** @type {Array.<Object>} */
    this.data = data || []
  }

  /**
   * Get Data to Array
   * @return {Array.<Object>} return data to Array
   */
  toArray() {
    return this.data
  }

  /**
   * Get Field in Data Array
   * @param {string} [field] field name in array
   * @return {Array.<Object>} return data to Array
   */
  get(field) {
    if(field) {
      const data = []
      this.data.forEach((item) => {
        data.push(item[field])
      })
      return data
    } 
    return this.toArray()
  }

  /**
   * Return first data in Array
   * @return {Object} return first data in Array
   */
  first() {
    return this.data[0]
  }

  /**
   * Return first data in Array
   * @return {Object} return first data in Array
   */
  firstOrFail() { 
    return this.data[0]
  }

  /**
   * Select Field Data in Array
   * @param {Array.<Object>} fieldArray Array of field name
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.select(['id','name'])
   */
  select(fileldArray) {
    const oldArray = this.data
    const newArray = []
    let obj = {}
    oldArray.forEach((data) => {
      Object.keys(data).forEach((key) => {
        fileldArray.forEach((field) => {
          if (key === field) {
            obj = Object.assign({}, obj, { [field]: data[field] })
          }
        })
      })
      newArray.push(obj)
      obj = {}
    })

    this.data = newArray
    return this
  }

  /**
   * Find Data in Array
   * @param {string} field field name in Array
   * @param {string} condition [ === , !== , < , > , <= , >= ]
   * @param {any} key key value
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.where('id','=','1')
   */
  where(field, condition, key) {
    switch(condition) {
      case '!=':
      case '!==':
        this.data = this.data.filter((item) => item[field] !== key)
        break
      case '<':
        this.data = this.data.filter((item) => item[field] < key)
        break
      case '>':
        this.data = this.data.filter((item) => item[field] > key)
        break
      case '>=':
        this.data = this.data.filter((item) => item[field] >= key)
        break
      case '<=':
        this.data = this.data.filter((item) => item[field] <= key)
        break
      case '=':
      case '==':
      case '===':
      default:
        this.data = this.data.filter((item) => key === item[field])
        break
    }
    return this
  }

  /**
   * Find data by Primary Key
   * @param {stirng|number} key
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.find(1)
   */
  find(key) {
    this.data = this.where(this.primaryKey, '=', key).get()
    return this
  }

  /**
   * Find Data in Array by `Array of value`
   * @param {string} field field name in Array
   * @param {Array.<string>} keyArray Array of key value
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.whereIn('id',[1, 2])
   */
  whereIn(field, keyArray) {
    const collect = []
    let array
    keyArray.forEach((key) => {
      array = this.data.filter((item) => item[field] === key)
      array.forEach(obj => {
        collect.push(obj)
      })
    })
    this.data = collect
    return this
  }

  /**
   * Find Not Data in Array by `Array of value`
   * @param {string} field field name in Array
   * @param {Array.<string>} keyArray Array of key value
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.whereNotIn('id',[1, 2])
   */
  whereNotIn(field, keyArray) {
    let newArray = this.data
    const whereIn = this.whereIn(field, keyArray).toArray()
    whereIn.forEach((where) => {
      newArray =newArray.filter((item) => item[field] !== where[field])
    })
    this.data = newArray
    return this
  }

  /**
   * Find & Update Data in Array
   * @param {Object} update data is update
   * @return {Array.<Object>} data update new Array
   * @example
   * 
   * Collection.update({
   *  id: 1,
   *  name: 'newString'
   * })
   */
  update(update) {
    const data = this.data
    const PK = this.primaryKey
    if(this.firstOrFail() === {}) return data
    const newData = Object.assign({}, this.first(), update)
    const newArray = this.firstData
    newArray.forEach((item,i) => {
      if(newData[PK] === item[PK]){
        newArray[i] = newData
      }
    })
    return newArray
  }

  /**
   * Push Data in Array
   * @param {Object} insert insert data in array
   * @return {Array.<Object>} data update new Array
   * @example
   * 
   * Collection.insert({
   *  id: 1,
   *  name: 'String'
   * })
   */
  insert(insert) {
    return [
      ...this.data,
      insert
    ]
  }

  /**
   * Delete data by primaryKey
   * @param {string|number} key Primary key value
   * @return {Array.<Object>} newArray
   * @example
   * 
   * Collection.delete(1)
   */
  delete(key) {
    return this.where(this.primaryKey,'!=', key).toArray()
  }

  /**
   * Get Length of Array
   * @return {number} get count in array
   * @example
   * 
   * // [1, 2]
   * Collection.count() // 2
   */
  count() {
    return this.toArray().length
  }

  /**
   * Order By field in Array
   * @param {string} field field name in Array
   * @param {string} orderBy ['asc', 'desc']
   * @return {Array.<Object>} newArray
   * @example
   * 
   * Collection.orderBy('name','asc')
   */
  orderBy(field, orderBy) {
    const data = this.data[0]
    if(data) {
      const type = data[field] && typeof data[field]
      if(type === 'number') {
        // sort by value
        switch(orderBy) {
          case 'desc':
            this.data = this.data.sort((a, b) => b[field] - a[field])
            break
          case 'asc': 
          default:
            this.data = this.data.sort((a, b) => a[field] - b[field])
            break
        }
      } else if(type === 'string') {
        // sort by name
        switch(orderBy) {
          case 'desc':
            this.data.sort((a, b) => {
              const nameA = a[field].toUpperCase(); // ignore upper and lowercase
              const nameB = b[field].toUpperCase(); // ignore upper and lowercase
              if(nameB < nameA) return -1;
              if(nameB > nameA) return 1;
              return 0;
            })
            break
          case 'asc': 
          default:
            this.data.sort((a, b) => {
              const nameA = a[field].toUpperCase(); // ignore upper and lowercase
              const nameB = b[field].toUpperCase(); // ignore upper and lowercase
              if(nameA < nameB) return -1;
              if(nameA > nameB) return 1;
              return 0;
            })
            break
        }
      }
    }
    return this
  }

  /**
   * Sum Data in Array
   * @param {string} field field name in Array
   * @return {number} sum all value
   * @example
   * 
   * // [{ price: 10 }, { price: 20 }}]
   * Collection.sum('price') // 30
   */
  sum(field) {
    return this.get(field).reduce((a, b) => a + b , 0)
  }

  /**
   * Min Data in Array
   * @param {string} field field name in Array
   * @return {number} get min from all value
   * @example
   * 
   * // [{ price: 10 },{ price: 20 },{ price: 30 }]
   * Collection.min('price') // 10
   */
  min(field) {
    return this.orderBy(field,'asc').get(field)[0]
  }

  /**
   * Max Data in Array
   * @param {string} field field name in Array
   * @return {number} get max from all value
   * @example
   * 
   * // [{ price: 10 },{ price: 20 },{ price: 30 }]
   * Collection.max('price') // 30
   */
  max(field) {
    return this.orderBy(field,'desc').get(field)[0]
  }

  /**
   * Average Data in Array
   * @param {string} field field name in Array
   * @return {number} get average from all value
   * @example
   * 
   * // [{ price: 10 },{ price: 30 }]
   * Collection.avg('price') // 20
   */
  avg(field) {
    const count = this.count()
    return this.get(field).reduce((a, b) => a + b , 0) / count
  }

  /**
   * Merge Array as Array
   * @param {Array.<Object>} array array you want to merge
   * @return {this} Class Hooks
   * @example
   * 
   * Collection.merge([{ id: 1 name: 'String' }])
   */
  merge(array) {
    const dataPrimaryKey = new ArrayCollection(array, this.primaryKey).get(this.primaryKey)
    const oldData = this.whereNotIn(this.primaryKey,dataPrimaryKey).get()
    this.data = oldData.concat(array)
    return this    
  }
}

export default ArrayCollection
