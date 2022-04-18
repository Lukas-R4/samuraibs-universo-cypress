/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { Pool } = require('pg') // import a hidden class in framework


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const configJson = require(config.configFile)

  const pool = new Pool(configJson.dbConfig)

  on('task', { // Exclusão
    removeUser(email) {
      return new Promise(function(resolve){
        pool.query('DELETE FROM public.users WHERE email = $1', [email], function(error, result){
          if (error) {
            throw error
          }
          resolve({success: result})
        })
      })      
    }
  })
}
