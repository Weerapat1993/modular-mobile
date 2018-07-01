/**
 * convert To Json
 * @param {*} data 
 * @return {*}
 */
export const convertJSON = data => {
  let value = data
  if(value && (value.includes('{') || value.includes('['))) {
    value = JSON.parse(value)
  }
  return value
}