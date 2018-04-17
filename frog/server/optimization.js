// @flow

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http'

const url = 'http://128.179.165.91:8000'

Meteor.methods({
  'optim.recommend': (context) => {
    if(Meteor.isServer) {
      console.log('Recommend')
      const result = HTTP.post(url, {
        data: {
          sessionId: 'json',
          requestType: 'RECO',
          context
        }
      })
      console.log(result)
      return result
    }
  },
  'optim.report': (context, item, score) => {
    if(Meteor.isServer) {
      console.log('Report')
      const result = HTTP.post(url, {
        data: {
          sessionId: 'json',
          requestType: 'SCOR',
          context,
          item,
          score
        }
      })
      console.log(result)
      return result
    }
  }
});
