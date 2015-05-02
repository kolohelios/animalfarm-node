'use strict';

var Dog = require('../../models/dog');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/dogs/{dogId}/edit',
    config: {
      description: 'Update a dog',
      handler: function(request, reply){
        Dog.findByIdAndUpdate(request.params.dogId, request.payload, function(err, dog){
          return reply(dog);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'dogs.update'
};
