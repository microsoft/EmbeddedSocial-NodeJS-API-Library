/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostCommentResponse class.
 * @constructor
 * Response from post (create) comment
 * @member {string} commentHandle Gets or sets comment handle of the comment
 * 
 */
function PostCommentResponse() {
}

/**
 * Defines the metadata of PostCommentResponse
 *
 * @returns {object} metadata of PostCommentResponse
 *
 */
PostCommentResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostCommentResponse',
    type: {
      name: 'Composite',
      className: 'PostCommentResponse',
      modelProperties: {
        commentHandle: {
          required: true,
          serializedName: 'commentHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostCommentResponse;
