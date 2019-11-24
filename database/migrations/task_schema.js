'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('task', (table) => {
      table.increments()
      table.string('title', 255)
      table.string('body', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('task')
  }
}

module.exports = task_schema
