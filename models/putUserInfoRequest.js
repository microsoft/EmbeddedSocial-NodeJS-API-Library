/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutUserInfoRequest class.
 * @constructor
 * Request to put (update) user info
 * @member {string} firstName Gets or sets first name of the user
 * 
 * @member {string} lastName Gets or sets last name of the user
 * 
 * @member {string} [bio] Gets or sets short bio of the user
 * 
 */
function PutUserInfoRequest() {
}

/**
 * Defines the metadata of PutUserInfoRequest
 *
 * @returns {object} metadata of PutUserInfoRequest
 *
 */
PutUserInfoRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutUserInfoRequest',
    type: {
      name: 'Composite',
      className: 'PutUserInfoRequest',
      modelProperties: {
        firstName: {
          required: true,
          serializedName: 'firstName',
          type: {
            name: 'String'
          }
        },
        lastName: {
          required: true,
          serializedName: 'lastName',
          type: {
            name: 'String'
          }
        },
        bio: {
          required: false,
          serializedName: 'bio',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutUserInfoRequest;
