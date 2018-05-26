#!/usr/bin/env node
const colors = require('colors');
const cmd = require('commander');
const mongoose = require('mongoose');
const Pizza = require('./db/Pizza');
//let pedidos = [];

mongoose.connect('mongodb://localhost/pizza-cats-test')
  .then(instance => {
    const conn = instance.connections[0];
    //console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error('\n === Did you remember to start `mongod`? === \n');
    console.error(err);
  });

cmd
  .command('add <flavour> <size>')
  .option('-c, --cash', 'Pay with cash')
  .option('-d, --delivery', 'Add included delivery')
  .action(function(flavour, size, opts){
    console.log()
    Pizza.create({flavour, size, cash: opts.cash, delivery: opts.delivery}).then(function(pizza){
      mongoose.disconnect();
    });
    //pedidos.push({flavour, size, delivery});
    console.log('Pizza created!!!');
  });

  cmd
  .command('list')
  .action(function(){
    Pizza.find()
    .then(pizzas => pizzas.map(pizza => console.log(`${pizza.flavour}  | ${pizza.size} | ${pizza.cash?'Pago en Efectivo'?'Pago en TDC'} | ${pizza.delivery?'Envío incluido':'Sin envio'}`)))
    
  });

cmd.parse(process.argv);