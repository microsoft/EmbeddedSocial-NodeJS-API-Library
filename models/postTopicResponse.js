/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostTopicResponse class.
 * @constructor
 * Response from post (create) topic
 * @member {string} topicHandle Gets or sets topic handle of the topic
 * 
 */
function PostTopicResponse() {
}

/**
 * Defines the metadata of PostTopicResponse
 *
 * @returns {object} metadata of PostTopicResponse
 *
 */
PostTopicResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostTopicResponse',
    type: {
      name: 'Composite',
      className: 'PostTopicResponse',
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

module.exports = PostTopicResponse;
