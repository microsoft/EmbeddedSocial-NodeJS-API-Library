/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GetRequestTokenResponse class.
 * @constructor
 * Response from get request token response
 * @member {string} requestToken Gets or sets request token from identity
 * provider
 * 
 */
function GetRequestTokenResponse() {
}

/**
 * Defines the metadata of GetRequestTokenResponse
 *
 * @returns {object} metadata of GetRequestTokenResponse
 *
 */
GetRequestTokenResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GetRequestTokenResponse',
    type: {
      name: 'Composite',
      className: 'GetRequestTokenResponse',
      modelProperties: {
        requestToken: {
          required: true,
          serializedName: 'requestToken',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = GetRequestTokenResponse;
