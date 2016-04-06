/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * ReplyReports
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 * Initializes a new instance of the ReplyReports class.
 * @constructor
 *
 * @param {SocialPlusClient} client Reference to the service client.
 */
function ReplyReports(client) {
  this.client = client;
}

/**
 * @summary Report reply
 *
 * @param {string} replyHandle Reply handle
 * 
 * @param {object} postReportRequest Post report request
 * 
 * @param {string} [postReportRequest.reason] Gets or sets report reason.
 * Possible values include: 'Spam', 'Cyberbullying', 'ChildEndangerment',
 * 'Offensive', 'ContentInfringement', 'Other'
 * 
 * @param {string} authorization Authentication (must begin with string
 * "Bearer "). Possible values are:
 * 
 * -sessionToken for client auth
 * 
 * -AAD token for service auth
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.appkey] App key must be filled in when using AAD
 * tokens for Authentication.
 * 
 * @param {string} [options.userHandle] User handle must be filled when using
 * AAD tokens for Authentication.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
ReplyReports.prototype.postReport = function (replyHandle, postReportRequest, authorization, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var appkey = (options && options.appkey !== undefined) ? options.appkey : undefined;
  var userHandle = (options && options.userHandle !== undefined) ? options.userHandle : undefined;
  // Validate
  try {
    if (replyHandle === null || replyHandle === undefined || typeof replyHandle.valueOf() !== 'string') {
      throw new Error('replyHandle cannot be null or undefined and it must be of type string.');
    }
    if (postReportRequest === null || postReportRequest === undefined) {
      throw new Error('postReportRequest cannot be null or undefined.');
    }
    if (appkey !== null && appkey !== undefined && typeof appkey.valueOf() !== 'string') {
      throw new Error('appkey must be of type string.');
    }
    if (authorization === null || authorization === undefined || typeof authorization.valueOf() !== 'string') {
      throw new Error('authorization cannot be null or undefined and it must be of type string.');
    }
    if (userHandle !== null && userHandle !== undefined && typeof userHandle.valueOf() !== 'string') {
      throw new Error('userHandle must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//v0.3/replies/{replyHandle}/reports';
  requestUrl = requestUrl.replace('{replyHandle}', encodeURIComponent(replyHandle));
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (appkey !== undefined && appkey !== null) {
    httpRequest.headers['appkey'] = appkey;
  }
  if (authorization !== undefined && authorization !== null) {
    httpRequest.headers['Authorization'] = authorization;
  }
  if (userHandle !== undefined && userHandle !== null) {
    httpRequest.headers['UserHandle'] = userHandle;
  }
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (postReportRequest !== null && postReportRequest !== undefined) {
      var requestModelMapper = new client.models['PostReportRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, postReportRequest, 'postReportRequest');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(postReportRequest, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 204 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 204) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Object'
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = ReplyReports;
