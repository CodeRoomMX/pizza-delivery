#!/usr/bin/env node
const colors = require('colors');
const cmd = require('commander');
const mongoose = require('mongoose');
const Pizza = require('./db/Pizza');

mongoose.connect('mongodb://localhost/pizza-cats-test')
  .then(instance => {
    const conn = instance.connections[0];
    console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error('\n === Did you remember to start `mongod`? === \n');
    console.error(err);
  });

cmd
  .command('order')
  .action(function(flavour, size, opts){
    console.log(flavour, size, opts);
    Pizza.create().then(function(){
      mongoose.disconnect();
    });
  });

  
  //Pizza.find()
  //  .then(pizzas => )

cmd.parse(process.argv);