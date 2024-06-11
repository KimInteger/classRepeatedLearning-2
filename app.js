const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile('./public/index.html', (err,data)=>{
        if(err) {
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 자체 에러입니다.");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
          res.end(data);
        }
      });
    } else if(req.url === '/script.js') {
      fs.readFile('./public/script.js', (err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 자체 에러입니다.");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"application/javascript; charset=UTF-8"});
          res.end(data);
        }
      });
    } else {
      res.writeHead(404,{"Content-Type":"test/plain; charset=UTF-8"});
      res.end('페이지를 찾을 수 없습니다.');
    }
  } else if(req.method === 'POST'){
    let body = '';
    req.on('data', (chunk)=>{
      body += chunk.toString();
    });
    req.on('end',()=>{
      const parsedData = qs.parse(body);
      console.log(parsedData);
      const db = new sqlite3.Database('./Database/chinook.db');
      db.serialize(()=>{
        const stmt = db.prepare("INSERT INTO userInfo(name, age, job) VALUES (?, ?, ?)");
  
        stmt.run(parsedData.name,parsedData.age,parsedData.job);

        stmt.finalize();
      });
      db.close();
      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 자체 에러입니다.");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset-UTF0-8"});
          res.end(data);
        }
      });
    });
  } else {
    res.writeHead(404,{"Content-Type" : "text/plain; charset=UTF-8"});
    res.end('페이지를 찾을 수 없습니다.');    
  }
});

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log('server responsed');
    console.log(`http://localhost:${PORT}`);
  }
});