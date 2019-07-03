var utils = {
  genListNode(array) {
    var list = []
    for(var i = array.length -1; i > -1; i--) {
      array[i] = {
        val: array[i],
        next: array[i+1] ? array[i+1] : null
      }
    }
    return array[0]
  }
}

module.exports = utils