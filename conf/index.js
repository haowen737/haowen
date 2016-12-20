/**
 * Created by laoya on 15/8/13.
 */
"use strict";

let path = require('path');
let fs = require('fs');

let ENV = process.env.NODE_ENV || 'development';
let DEFAULT_BASEDIR = __dirname;

let filePath = path.join(DEFAULT_BASEDIR, ENV, 'config.json');
let config = require(filePath);

module.exports = config;