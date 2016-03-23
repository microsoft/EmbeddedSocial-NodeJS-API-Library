/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the SocialPlusClient class.
 * @constructor
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 */
function SocialPlusClient(baseUri, options) {

  if (!options) options = {};

  SocialPlusClient['super_'].call(this, null, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'http://localhost:1324';
  }

  this.blobs = new operations.Blobs(this);
  this.builds = new operations.Builds(this);
  this.topicComments = new operations.TopicComments(this);
  this.comments = new operations.Comments(this);
  this.hashtags = new operations.Hashtags(this);
  this.images = new operations.Images(this);
  this.commentLikes = new operations.CommentLikes(this);
  this.replyLikes = new operations.ReplyLikes(this);
  this.topicLikes = new operations.TopicLikes(this);
  this.myNotifications = new operations.MyNotifications(this);
  this.myPins = new operations.MyPins(this);
  this.myPushRegistrations = new operations.MyPushRegistrations(this);
  this.commentReplies = new operations.CommentReplies(this);
  this.replies = new operations.Replies(this);
  this.userReports = new operations.UserReports(this);
  this.replyReports = new operations.ReplyReports(this);
  this.commentReports = new operations.CommentReports(this);
  this.topicReports = new operations.TopicReports(this);
  this.search = new operations.Search(this);
  this.sessions = new operations.Sessions(this);
  this.requestTokens = new operations.RequestTokens(this);
  this.myFollowing = new operations.MyFollowing(this);
  this.userFollowers = new operations.UserFollowers(this);
  this.myFollowers = new operations.MyFollowers(this);
  this.userFollowing = new operations.UserFollowing(this);
  this.myPendingUsers = new operations.MyPendingUsers(this);
  this.myBlockedUsers = new operations.MyBlockedUsers(this);
  this.topics = new operations.Topics(this);
  this.myAppFollowing = new operations.MyAppFollowing(this);
  this.myTopics = new operations.MyTopics(this);
  this.myApps = new operations.MyApps(this);
  this.users = new operations.Users(this);
  this.myLikes = new operations.MyLikes(this);
  this.myLinkedAccounts = new operations.MyLinkedAccounts(this);
  this.userTopics = new operations.UserTopics(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(SocialPlusClient, ServiceClient);

module.exports = SocialPlusClient;
