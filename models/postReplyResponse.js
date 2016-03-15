/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostReplyResponse class.
 * @constructor
 * Response from post (create) reply
 * @member {string} replyHandle Gets or sets reply handle of the reply
 * 
 */
function PostReplyResponse() {
}

/**
 * Defines the metadata of PostReplyResponse
 *
 * @returns {object} metadata of PostReplyResponse
 *
 */
PostReplyResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostReplyResponse',
    type: {
      name: 'Composite',
      className: 'PostReplyResponse',
      modelProperties: {
        replyHandle: {
          required: true,
          serializedName: 'replyHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostReplyResponse;
