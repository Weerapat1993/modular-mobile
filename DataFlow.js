const chalk = require('chalk')

class DataFlow {
  constructor(startNode, endNode) {
    this.data = {
      A: {
        path: ['B', 'D']
      },
      B: {
        path: ['E', 'C']
      },
      C: {
        path: ['F']
      },
      D: {
        path: ['I', 'J']
      },
      E: {
        path: []
      },
      F: {
        path: ['G', 'H']
      },
      G: {
        path: []
      },
      H: {
        path: []
      },
      I: {
        path: []
      },
      J: {
        path: []
      },
    }
    this.nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    this.currentNode = startNode
    this.startNode = startNode
    this.endNode = endNode
    this.result = startNode
  }

  moveTo(node) {
    if(node) {
      if(this.findNode(node)) {
        this.currentNode = node
        this.result += node
        console.log(chalk.green('Move To', node))
        console.log(this.result)
      } else {
        console.log('Can not move to', node)
      }
    } else {
      console.log('node is null')
    }
  }

  backTo() {
    const result = this.result
    this.currentNode = result.slice(-2)
    this.result = result.substring(0, result.length - 1)
    console.log('Back To', this.currentNode)
    console.log(this.result)
  }

  /**
   * @param {String} node
   * @return {Array<String>}
   */
  checkNode(node) {
    if(this.findNode(node)) {
      const { path } = this.data[node]
      return path
    }
    return []
  }

  findNode(node) {
    return this.nodes.filter(item => item === node).length
  }

  checkPath(node) {
    const nodes = this.checkNode(node)
    console.log('Check Path', node, 'has a', JSON.stringify(nodes))
    // if(node === this.endNode) return true
    switch(nodes.length) {
      case 0: 
        if(node !== this.endNode){
          this.removeNode(node)
        }
        break
      case 1:
        this.checkPath(nodes[0])
        break
      default: 
        nodes.forEach(item => {
          this.checkPath(item)
        })
    }
  }
  
  clearNode() {
    const nodes = this.checkNode(this.currentNode)
    const move = nodes.filter(item => this.findNode(item))
    console.log('Clear Node', JSON.stringify(move))
    return move[0]
  }

  removeNode(node) {
    this.nodes = this.nodes.filter(item => item !== node)
    console.log(chalk.red('Remove', node, JSON.stringify(this.nodes)))
  }

  walkTo() {
    const nodes = this.checkNode(this.currentNode)
    console.log(chalk.yellow('Path', JSON.stringify(nodes)))
    switch(nodes.length) {
      case 0: 
        break
      case 1:
        this.moveTo(nodes[0])
        break
      default:
        this.moveTo(this.clearNode())
        break
    }
  }

  run() {
    this.checkPath(this.currentNode)
    console.log(chalk.blue('Passport', JSON.stringify(this.nodes)))
    while(this.currentNode !== this.endNode) {
      this.walkTo()
    }
    console.log(chalk.cyan('Result is', this.result))
  }
}

const dataFlow = new DataFlow('A', 'H').run()
// console.log(dataFlow)