/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostImageResponse class.
 * @constructor
 * Response from post (create) image
 * @member {string} blobHandle Gets or sets blob handle
 * 
 */
function PostImageResponse() {
}

/**
 * Defines the metadata of PostImageResponse
 *
 * @returns {object} metadata of PostImageResponse
 *
 */
PostImageResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostImageResponse',
    type: {
      name: 'Composite',
      className: 'PostImageResponse',
      modelProperties: {
        blobHandle: {
          required: true,
          serializedName: 'blobHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostImageResponse;
