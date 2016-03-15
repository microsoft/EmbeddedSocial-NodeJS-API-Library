/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseCommentView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseCommentView() {
}

/**
 * Defines the metadata of FeedResponseCommentView
 *
 * @returns {object} metadata of FeedResponseCommentView
 *
 */
FeedResponseCommentView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[CommentView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseCommentView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CommentViewElementType',
                type: {
                  name: 'Composite',
                  className: 'CommentView'
                }
            }
          }
        },
        cursor: {
          required: true,
          serializedName: 'cursor',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeedResponseCommentView;
