'use strict'

const _ = require('lodash')
const uuid = require('uuid')
const TransportRPC = require('./TransportRPC')

class TransportRPCServer extends TransportRPC {

  listen(port) {
    return this
  }

  handleRequest(handler, data) {
    if (!data) {
      this.emit('request-error')
      return
    }

    const rid = data[0]
    const key = data[1]
    const payload = data[2]

    this.emit(
      'request', rid, key, payload,
      {
        reply: res => {
          handler.reply(rid, res)
        }
      }
    )
  }
}

module.exports = TransportRPCServer