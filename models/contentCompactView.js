/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ContentCompactView class.
 * @constructor
 * Content compact view
 * @member {string} contentType Gets or sets content type. Possible values
 * include: 'Unknown', 'Topic', 'Comment', 'Reply'
 * 
 * @member {string} contentHandle Gets or sets content handle
 * 
 * @member {string} [parentHandle] Gets or sets parent handle
 * 
 * @member {string} [rootHandle] Gets or sets root handle
 * 
 * @member {string} text Gets or sets content text
 * 
 * @member {string} [blobType] Gets or sets content blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets content blob handle
 * 
 * @member {string} [blobUrl] Gets or sets content blob url
 * 
 */
function ContentCompactView() {
}

/**
 * Defines the metadata of ContentCompactView
 *
 * @returns {object} metadata of ContentCompactView
 *
 */
ContentCompactView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ContentCompactView',
    type: {
      name: 'Composite',
      className: 'ContentCompactView',
      modelProperties: {
        contentType: {
          required: true,
          serializedName: 'contentType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Unknown', 'Topic', 'Comment', 'Reply' ]
          }
        },
        contentHandle: {
          required: true,
          serializedName: 'contentHandle',
          type: {
            name: 'String'
          }
        },
        parentHandle: {
          required: false,
          serializedName: 'parentHandle',
          type: {
            name: 'String'
          }
        },
        rootHandle: {
          required: false,
          serializedName: 'rootHandle',
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
        blobUrl: {
          required: false,
          serializedName: 'blobUrl',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ContentCompactView;
