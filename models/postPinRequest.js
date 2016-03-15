/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostPinRequest class.
 * @constructor
 * Request to post (create) a pin
 * @member {string} topicHandle Gets or sets topic handle
 * 
 */
function PostPinRequest() {
}

/**
 * Defines the metadata of PostPinRequest
 *
 * @returns {object} metadata of PostPinRequest
 *
 */
PostPinRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostPinRequest',
    type: {
      name: 'Composite',
      className: 'PostPinRequest',
      modelProperties: {
        topicHandle: {
          required: true,
          serializedName: 'topicHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostPinRequest;
