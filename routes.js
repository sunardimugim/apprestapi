'use strict';

const { response } = require("express");

module.exports= function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
} 