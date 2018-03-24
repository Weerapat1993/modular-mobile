/**
 * @class ArrayColletcion
 */
class ArrayCollection {
  /**
   * Build Array Collection
   * ```javascript
   * const Collection = new ArrayCollection([], 'primaryKey')
   * ```
   * @constructor
   * @param {Array.<Object>} data Array data
   * @param {string} primaryKey Primary Key in Array
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
   * ```javascript
   * Collection.select(['id','name'])
   * ``` 
   * @param {Array.<Object>} fieldArray Array of field name
   * @return {this} Class Hooks
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
   * ```javascript
   * Collection.where('id','=','1')
   * ```
   * @param {string} field field name in Array
   * @param {string} condition [ === , !== , < , > , <= , >= ]
   * @param {any} key key value
   * @return {this} Class Hooks
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
   * ```javascript
   * Collection.find(1)
   * ```
   * @param {stirng|number} key
   * @return {this} Class Hooks
   */
  find(key) {
    this.data = this.where(this.primaryKey, '=', key).get()
    return this
  }

  /**
   * Find Data in Array by `Array of value`
   * ```javascript
   * Collection.whereIn('id',[1, 2])
   * ```
   * @param {string} field field name in Array
   * @param {Array.<string>} keyArray Array of key value
   * @return {this} Class Hooks
   * 
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
   * ```javascript
   * Collection.whereNotIn('id',[1, 2])
   * ```
   * @param {string} field field name in Array
   * @param {Array.<string>} keyArray Array of key value
   * @return {this} Class Hooks
   * 
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
   * ```javascript
   * Collection.update({
   *  id: 1,
   *  name: 'newString'
   * })
   * ```
   * @param {Object} update data is update
   * @return {Array.<Object>} data update new Array
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
   * ```javascript
   * Collection.insert({
   *  id: 1,
   *  name: 'String'
   * })
   * ```
   * @param {Object} insert insert data in array
   * @return {Array.<Object>} data update new Array
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
   */
  delete(key) {
    return this.where(this.primaryKey,'!=', key).toArray()
  }

  /**
   * Get Length of Array
   * ```javascript
   * Collection.count() // 2
   * ```
   * @return {number} get count in array
   */
  count() {
    return this.toArray().length
  }

  /**
   * Order By field in Array
   * ```javascript
   * Collection.orderBy('name','asc')
   * ```
   * @param {string} field field name in Array
   * @param {string} orderBy ['asc', 'desc']
   * @return {Array.<Object>} newArray
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
   */
  sum(field) {
    return this.get(field).reduce((a, b) => a + b , 0)
  }

  /**
   * Min Data in Array
   * ```javascript
   * // [{ price: 10 },{ price: 20 },{ price: 30 }]
   * Collection.min('price') // 10
   * ```
   * @param {string} field field name in Array
   * @return {number} get min from all value
   */
  min(field) {
    return this.orderBy(field,'asc').get(field)[0]
  }

  /**
   * Max Data in Array
   * ```javascript
   * // [{ price: 10 },{ price: 20 },{ price: 30 }]
   * Collection.max('price') // 30
   * ```
   * @param {string} field field name in Array
   * @return {number} get max from all value
   */
  max(field) {
    return this.orderBy(field,'desc').get(field)[0]
  }

  /**
   * Average Data in Array
   * ```javascript
   * // [{ price: 10 },{ price: 30 }]
   * Collection.avg('price') // 20
   * ```
   * @param {string} field field name in Array
   * @return {number} get average from all value
   */
  avg(field) {
    const count = this.count()
    return this.get(field).reduce((a, b) => a + b , 0) / count
  }

  /**
   * Merge Array as Array
   * ```javascript
   * Collection.merge([{ id: 1 name: 'String' }])
   * ```
   * @param {Array.<Object>} array array you want to merge
   * @return {this} Class Hooks
   */
  merge(array) {
    const dataPrimaryKey = new ArrayCollection(array, this.primaryKey).get(this.primaryKey)
    const oldData = this.whereNotIn(this.primaryKey,dataPrimaryKey).get()
    this.data = oldData.concat(array)
    return this    
  }
}

export default ArrayCollection
