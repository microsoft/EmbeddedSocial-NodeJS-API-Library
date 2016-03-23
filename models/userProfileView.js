/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UserProfileView class.
 * @constructor
 * User profile view
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} appHandle Gets or sets app handle
 * 
 * @member {string} firstName Gets or sets first name of the user
 * 
 * @member {string} lastName Gets or sets last name of the user
 * 
 * @member {string} bio Gets or sets short bio of the user
 * 
 * @member {string} photoHandle Gets or sets photo handle of the user
 * 
 * @member {string} photoUrl Gets or sets photo url of the user
 * 
 * @member {string} visibility Gets or sets visibility of the user. Possible
 * values include: 'Public', 'Private'
 * 
 * @member {number} totalTopics Gets or sets total topics posted by user
 * 
 * @member {number} totalFollowers Gets or sets total followers for the user
 * 
 * @member {number} totalFollowing Gets or sets total following users
 * 
 * @member {string} followerStatus Gets or sets follower relationship status
 * of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} followingStatus Gets or sets following relationship status
 * of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} profileStatus Gets or sets user profile status. Possible
 * values include: 'Active', 'Banned'
 * 
 */
function UserProfileView() {
}

/**
 * Defines the metadata of UserProfileView
 *
 * @returns {object} metadata of UserProfileView
 *
 */
UserProfileView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UserProfileView',
    type: {
      name: 'Composite',
      className: 'UserProfileView',
      modelProperties: {
        userHandle: {
          required: true,
          serializedName: 'userHandle',
          type: {
            name: 'String'
          }
        },
        appHandle: {
          required: true,
          serializedName: 'appHandle',
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
          required: true,
          serializedName: 'bio',
          type: {
            name: 'String'
          }
        },
        photoHandle: {
          required: true,
          serializedName: 'photoHandle',
          type: {
            name: 'String'
          }
        },
        photoUrl: {
          required: true,
          serializedName: 'photoUrl',
          type: {
            name: 'String'
          }
        },
        visibility: {
          required: true,
          serializedName: 'visibility',
          type: {
            name: 'Enum',
            allowedValues: [ 'Public', 'Private' ]
          }
        },
        totalTopics: {
          required: true,
          serializedName: 'totalTopics',
          type: {
            name: 'Number'
          }
        },
        totalFollowers: {
          required: true,
          serializedName: 'totalFollowers',
          type: {
            name: 'Number'
          }
        },
        totalFollowing: {
          required: true,
          serializedName: 'totalFollowing',
          type: {
            name: 'Number'
          }
        },
        followerStatus: {
          required: true,
          serializedName: 'followerStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'None', 'Follow', 'Pending', 'Blocked' ]
          }
        },
        followingStatus: {
          required: true,
          serializedName: 'followingStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'None', 'Follow', 'Pending', 'Blocked' ]
          }
        },
        profileStatus: {
          required: true,
          serializedName: 'profileStatus',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Banned' ]
          }
        }
      }
    }
  };
};

module.exports = UserProfileView;
