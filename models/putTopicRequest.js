/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutTopicRequest class.
 * @constructor
 * Request to put (update) topic
 * @member {string} [title] Gets or sets topic title
 * 
 * @member {string} text Gets or sets topic text
 * 
 * @member {string} [categories] Gets or sets topic categories
 * 
 */
function PutTopicRequest() {
}

/**
 * Defines the metadata of PutTopicRequest
 *
 * @returns {object} metadata of PutTopicRequest
 *
 */
PutTopicRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutTopicRequest',
    type: {
      name: 'Composite',
      className: 'PutTopicRequest',
      modelProperties: {
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
        categories: {
          required: false,
          serializedName: 'categories',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutTopicRequest;
