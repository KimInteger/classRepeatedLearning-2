const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./Database/chinook.db');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  console.log(1);
});

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log('server responsed');
    console.log(`http://localhost:${PORT}`);
  }
});