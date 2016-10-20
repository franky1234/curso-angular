/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cursos              ->  index
 */

  'use strict';

    var jsonfile = require('jsonfile');
    var lodash = require('lodash');
    var path = require('path');
    var FILE = path.resolve('db','cursos.json');
    // Get a list of Cursos.
    export function getAll(req, res){
      jsonfile.readFile(FILE,function(err , obj ){
        if(err){
          res.status(500).send('internal Server Error..');
        }
        res.json(obj);
      });
    }

    export function get(req, res){
      jsonfile.readFile(FILE,function(err, obj){
        var array = lodash.find(obj.courses,function(course){
            return course.key === req.params.id; //este req.params.id  es del index.js -> router
        });

        if(!array){
          res.status(400).send('Not Found');
        }
        res.json(array);

      });
    }
