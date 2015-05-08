var express = require('express');
var fs = require('fs');
var _ = require('underscore');


var app = express();

var fromFile = process.argv[2];
var toFile = process.argv[3];
var csvContent = fs.readFileSync(fromFile, 'utf-8');

var linesArray = csvContent.split('\n');
var objectKeys = linesArray[0].split(',');
var objectValues = linesArray.slice(1);
var totalKeys = objectKeys.length;
var totalObjects = objectValues.length;
var jsonArray = [];


for(var i = 0 ; i < totalObjects ; i++){
	var currentObject = objectValues[i].split(',');
	var newObject = {};

	for(var b = 0 ; b < totalKeys ; b++){
		var key = objectKeys[b];
		var value = currentObject[b];
		newObject[key] = value;
	}
	jsonArray.push(newObject);
}


var contentOutput = JSON.stringify(jsonArray);

fs.writeFileSync(toFile, contentOutput);
