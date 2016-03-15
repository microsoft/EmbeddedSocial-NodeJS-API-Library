/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostUserRequest class.
 * @constructor
 * Request to post (create) user
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
 * 
 * @member {string} [accessToken] Gets or sets access or authentication token
 * obtained from third-party provider.
 * The server contacts the third-party provider to validate the
 * token
 * 
 * @member {string} [requestToken] Gets or sets request token obtained from
 * third-party provider.
 * Some providers do not issue authentication or access tokens,
 * but they issue request tokens
 * and verifiers.
 * 
 * @member {string} instanceId Gets or sets instance id -- Unique installation
 * id of the app
 * 
 * @member {string} firstName Gets or sets first name of the user
 * 
 * @member {string} lastName Gets or sets last name of the user
 * 
 * @member {string} [bio] Gets or sets short bio of the user
 * 
 * @member {string} [photoHandle] Gets or sets photo handle of the user
 * 
 */
function PostUserRequest() {
}

/**
 * Defines the metadata of PostUserRequest
 *
 * @returns {object} metadata of PostUserRequest
 *
 */
PostUserRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostUserRequest',
    type: {
      name: 'Composite',
      className: 'PostUserRequest',
      modelProperties: {
        identityProvider: {
          required: true,
          serializedName: 'identityProvider',
          type: {
            name: 'Enum',
            allowedValues: [ 'Facebook', 'Microsoft', 'Google', 'Twitter' ]
          }
        },
        accessToken: {
          required: false,
          serializedName: 'accessToken',
          type: {
            name: 'String'
          }
        },
        requestToken: {
          required: false,
          serializedName: 'requestToken',
          type: {
            name: 'String'
          }
        },
        instanceId: {
          required: true,
          serializedName: 'instanceId',
          type: {
            name: 'String'
          }
        },
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
        },
        photoHandle: {
          required: false,
          serializedName: 'photoHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostUserRequest;
