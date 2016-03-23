/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostTopicRequest class.
 * @constructor
 * Request to post (create) topic
 * @member {string} publisherType Gets or sets publisher type. Possible values
 * include: 'User', 'App'
 * 
 * @member {string} [title] Gets or sets topic title
 * 
 * @member {string} text Gets or sets topic text
 * 
 * @member {string} [blobType] Gets or sets topic blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets topic blob handle
 * 
 * @member {string} [categories] Gets or sets topic categories
 * 
 * @member {string} [language] Gets or sets topic language
 * 
 * @member {string} [deepLink] Gets or sets topic deep link
 * 
 * @member {string} [friendlyName] Gets or sets topic friendly name
 * 
 * @member {string} [group] Gets or sets topic group
 * 
 */
function PostTopicRequest() {
}

/**
 * Defines the metadata of PostTopicRequest
 *
 * @returns {object} metadata of PostTopicRequest
 *
 */
PostTopicRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostTopicRequest',
    type: {
      name: 'Composite',
      className: 'PostTopicRequest',
      modelProperties: {
        publisherType: {
          required: true,
          serializedName: 'publisherType',
          type: {
            name: 'Enum',
            allowedValues: [ 'User', 'App' ]
          }
        },
        title: {
          required: false,
          serializedName: 'title',
          type: {
            name: 'String'
          }
        },
        text: {
          required: true,
          serializedName: 'text',
          type: {
            name: 'String'
          }
        },
        blobType: {
          required: false,
          serializedName: 'blobType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Unknown', 'Image', 'Video', 'Custom' ]
          }
        },
        blobHandle: {
          required: false,
          serializedName: 'blobHandle',
          type: {
            name: 'String'
          }
        },
        categories: {
          required: false,
          serializedName: 'categories',
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
        },
        deepLink: {
          required: false,
          serializedName: 'deepLink',
          type: {
            name: 'String'
          }
        },
        friendlyName: {
          required: false,
          serializedName: 'friendlyName',
          type: {
            name: 'String'
          }
        },
        group: {
          required: false,
          serializedName: 'group',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostTopicRequest;
