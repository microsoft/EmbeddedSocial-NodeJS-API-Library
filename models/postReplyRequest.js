/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostReplyRequest class.
 * @constructor
 * Request to post (create) reply
 * @member {string} text Gets or sets reply text
 * 
 * @member {string} [language] Gets or sets reply language
 * 
 */
function PostReplyRequest() {
}

/**
 * Defines the metadata of PostReplyRequest
 *
 * @returns {object} metadata of PostReplyRequest
 *
 */
PostReplyRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostReplyRequest',
    type: {
      name: 'Composite',
      className: 'PostReplyRequest',
      modelProperties: {
        text: {
          required: true,
          serializedName: 'text',
          type: {
            name: 'String'
          }
        },
        language: {
          required: false,
          serializedName: 'language',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostReplyRequest;
