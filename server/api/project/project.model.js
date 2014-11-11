'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProjectSchema = new Schema({
  name: {type: String, required: true},
  slug : {type: String, required: true},
  description: String,
  dateCreat: { type: Date, default: Date.now },
  dateEndCampaign: {type: Date, required: true},
  amountToRaise: {type: Number, required: true},
  amountRaised: {type: Number, default: 0},
  contributors: [{contribId: ObjectId, userName: {type: String, default: ""}, amount: Number, isPrivate: {type: Boolean, default: false}}],
  contributorsOld: [{contribId: ObjectId, userName: String, amount: Number, isPrivate: {type: Boolean, default: false}}],
  OwnerBTCKey: { type: String, default: "", required: true},
  Owner: {type: String, required: true},
  active: {type: Boolean, default: true},
  visible: {type: Boolean, default: true}
});

module.exports = mongoose.model('Project', ProjectSchema);
