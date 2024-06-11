const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./Database/chinook.db');