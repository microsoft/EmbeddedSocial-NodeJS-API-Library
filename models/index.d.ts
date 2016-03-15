/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */


/**
 * @class
 * Initializes a new instance of the PostBlobResponse class.
 * @constructor
 * Response from post (create) blob
 * @member {string} blobHandle Gets or sets blob handle
 * 
 */
export interface PostBlobResponse {
    blobHandle: string;
}

/**
 * @class
 * Initializes a new instance of the BuildsCurrentResponse class.
 * @constructor
 * Response from get builds current
 * @member {string} [dateAndTime] Gets or sets the date and time of the
 * current build
 * 
 * @member {string} [commitHash] Gets or sets the Git commit hash that
 * represents the current checkout
 * 
 * @member {string} [hostname] Gets or sets the hostname that this code was
 * built on
 * 
 * @member {string} [serviceApiVersion] Gets or sets service api version number
 * 
 * @member {array} [dirtyFiles] Gets or sets the list of files that were not
 * committed at build time
 * 
 */
export interface BuildsCurrentResponse {
    dateAndTime?: string;
    commitHash?: string;
    hostname?: string;
    serviceApiVersion?: string;
    dirtyFiles?: string[];
}

/**
 * @class
 * Initializes a new instance of the PostCommentRequest class.
 * @constructor
 * Request to post (create) comment
 * @member {string} text Gets or sets comment text
 * 
 * @member {string} [blobType] Gets or sets comment blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets comment blob handle
 * 
 * @member {string} [language] Gets or sets comment language
 * 
 */
export interface PostCommentRequest {
    text: string;
    blobType?: string;
    blobHandle?: string;
    language?: string;
}

/**
 * @class
 * Initializes a new instance of the PostCommentResponse class.
 * @constructor
 * Response from post (create) comment
 * @member {string} commentHandle Gets or sets comment handle of the comment
 * 
 */
export interface PostCommentResponse {
    commentHandle: string;
}

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
export interface FeedResponseCommentView {
    data: CommentView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the CommentView class.
 * @constructor
 * Comment view
 * @member {string} commentHandle Gets or sets comment handle
 * 
 * @member {string} topicHandle Gets or sets parent topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {object} user Gets or sets owner of the comment
 * 
 * @member {string} [user.userHandle] Gets or sets user handle
 * 
 * @member {string} [user.firstName] Gets or sets first name of the user
 * 
 * @member {string} [user.lastName] Gets or sets last name of the user
 * 
 * @member {string} [user.photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [user.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [user.visibility] Gets or sets visibility of the user.
 * Possible values include: 'Public', 'Private'
 * 
 * @member {string} [user.followerStatus] Gets or sets follower relationship
 * status of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} text Gets or sets comment text
 * 
 * @member {string} [blobType] Gets or sets comment blob type. Possible values
 * include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [blobHandle] Gets or sets comment blob handle
 * 
 * @member {string} [blobUrl] Gets or sets comment blob url
 * 
 * @member {string} [language] Gets or sets comment language
 * 
 * @member {number} totalLikes Gets or sets total likes for the comment
 * 
 * @member {number} totalReplies Gets or sets total replies for the comment
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the comment
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 */
export interface CommentView {
    commentHandle: string;
    topicHandle: string;
    createdTime: Date;
    user: UserCompactView;
    text: string;
    blobType?: string;
    blobHandle?: string;
    blobUrl?: string;
    language?: string;
    totalLikes: number;
    totalReplies: number;
    liked: boolean;
    contentStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the UserCompactView class.
 * @constructor
 * User compact view
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} firstName Gets or sets first name of the user
 * 
 * @member {string} lastName Gets or sets last name of the user
 * 
 * @member {string} [photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} visibility Gets or sets visibility of the user. Possible
 * values include: 'Public', 'Private'
 * 
 * @member {string} followerStatus Gets or sets follower relationship status
 * of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 */
export interface UserCompactView {
    userHandle: string;
    firstName: string;
    lastName: string;
    photoHandle?: string;
    photoUrl?: string;
    visibility: string;
    followerStatus: string;
}

/**
 * @class
 * Initializes a new instance of the PostImageResponse class.
 * @constructor
 * Response from post (create) image
 * @member {string} blobHandle Gets or sets blob handle
 * 
 */
export interface PostImageResponse {
    blobHandle: string;
}

/**
 * @class
 * Initializes a new instance of the FeedResponseUserCompactView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
export interface FeedResponseUserCompactView {
    data: UserCompactView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the PutNotificationsStatusRequest class.
 * @constructor
 * Request to put (update) notifications status
 * @member {string} [readActivityHandle] Gets or sets last read activity handle
 * 
 */
export interface PutNotificationsStatusRequest {
    readActivityHandle?: string;
}

/**
 * @class
 * Initializes a new instance of the FeedResponseActivityView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
export interface FeedResponseActivityView {
    data: ActivityView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the ActivityView class.
 * @constructor
 * Activity view
 * @member {string} activityHandle Gets or sets activity handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {string} activityType Gets or sets activity type. Possible values
 * include: 'Like', 'Comment', 'Reply', 'CommentPeer', 'ReplyPeer',
 * 'Following', 'FollowRequest', 'FollowAccept'
 * 
 * @member {array} actorUsers Gets or sets actor users
 * 
 * @member {object} [actedOnUser] Gets or sets acted on user
 * 
 * @member {string} [actedOnUser.userHandle] Gets or sets user handle
 * 
 * @member {string} [actedOnUser.firstName] Gets or sets first name of the user
 * 
 * @member {string} [actedOnUser.lastName] Gets or sets last name of the user
 * 
 * @member {string} [actedOnUser.photoHandle] Gets or sets photo handle of the
 * user
 * 
 * @member {string} [actedOnUser.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [actedOnUser.visibility] Gets or sets visibility of the
 * user. Possible values include: 'Public', 'Private'
 * 
 * @member {string} [actedOnUser.followerStatus] Gets or sets follower
 * relationship status of the querying user. Possible values include: 'None',
 * 'Follow', 'Pending', 'Blocked'
 * 
 * @member {object} [actedOnContent] Gets or sets acted on content
 * 
 * @member {string} [actedOnContent.contentType] Gets or sets content type.
 * Possible values include: 'Unknown', 'Topic', 'Comment', 'Reply'
 * 
 * @member {string} [actedOnContent.contentHandle] Gets or sets content handle
 * 
 * @member {string} [actedOnContent.parentHandle] Gets or sets parent handle
 * 
 * @member {string} [actedOnContent.rootHandle] Gets or sets root handle
 * 
 * @member {string} [actedOnContent.text] Gets or sets content text
 * 
 * @member {string} [actedOnContent.blobType] Gets or sets content blob type.
 * Possible values include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @member {string} [actedOnContent.blobHandle] Gets or sets content blob
 * handle
 * 
 * @member {string} [actedOnContent.blobUrl] Gets or sets content blob url
 * 
 * @member {number} totalActions Gets or sets total actions
 * 
 * @member {boolean} unread Gets or sets a value indicating whether the
 * activity was read
 * 
 * @member {object} [app] Gets or sets the containing app
 * 
 * @member {string} [app.appHandle] Gets or sets app handle
 * 
 * @member {string} [app.name] Gets or sets app name
 * 
 * @member {string} [app.iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [app.iconUrl] Gets or sets app icon url
 * 
 * @member {string} [app.platformType] Gets or sets platform type. Possible
 * values include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [app.deepLink] Gets or sets app deep link
 * 
 * @member {string} [app.storeLink] Gets or sets app store link
 * 
 */
export interface ActivityView {
    activityHandle: string;
    createdTime: Date;
    activityType: string;
    actorUsers: UserCompactView[];
    actedOnUser?: UserCompactView;
    actedOnContent?: ContentCompactView;
    totalActions: number;
    unread: boolean;
    app?: AppCompactView;
}

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
export interface ContentCompactView {
    contentType: string;
    contentHandle: string;
    parentHandle?: string;
    rootHandle?: string;
    text: string;
    blobType?: string;
    blobHandle?: string;
    blobUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the AppCompactView class.
 * @constructor
 * App compact view
 * @member {string} appHandle Gets or sets app handle
 * 
 * @member {string} name Gets or sets app name
 * 
 * @member {string} [iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [iconUrl] Gets or sets app icon url
 * 
 * @member {string} platformType Gets or sets platform type. Possible values
 * include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [deepLink] Gets or sets app deep link
 * 
 * @member {string} [storeLink] Gets or sets app store link
 * 
 */
export interface AppCompactView {
    appHandle: string;
    name: string;
    iconHandle?: string;
    iconUrl?: string;
    platformType: string;
    deepLink?: string;
    storeLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CountResponse class.
 * @constructor
 * Count response
 * @member {number} count Gets or sets count
 * 
 */
export interface CountResponse {
    count: number;
}

/**
 * @class
 * Initializes a new instance of the PostPinRequest class.
 * @constructor
 * Request to post (create) a pin
 * @member {string} topicHandle Gets or sets topic handle
 * 
 */
export interface PostPinRequest {
    topicHandle: string;
}

/**
 * @class
 * Initializes a new instance of the FeedResponseTopicView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
export interface FeedResponseTopicView {
    data: TopicView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the TopicView class.
 * @constructor
 * Topic view
 * @member {string} topicHandle Gets or sets topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {date} lastUpdatedTime Gets or sets last updated time
 * 
 * @member {string} publisherType Gets or sets publisher type. Possible values
 * include: 'User', 'App'
 * 
 * @member {object} user Gets or sets owner of the topic
 * 
 * @member {string} [user.userHandle] Gets or sets user handle
 * 
 * @member {string} [user.firstName] Gets or sets first name of the user
 * 
 * @member {string} [user.lastName] Gets or sets last name of the user
 * 
 * @member {string} [user.photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [user.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [user.visibility] Gets or sets visibility of the user.
 * Possible values include: 'Public', 'Private'
 * 
 * @member {string} [user.followerStatus] Gets or sets follower relationship
 * status of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
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
 * @member {string} [blobUrl] Gets or sets topic blob url
 * 
 * @member {string} [categories] Gets or sets topic categories
 * 
 * @member {string} [language] Gets or sets topic language
 * 
 * @member {string} [group] Gets or sets topic group
 * 
 * @member {string} [deepLink] Gets or sets topic deep link
 * 
 * @member {string} [friendlyName] Gets or sets topic friendly name
 * 
 * @member {number} totalLikes Gets or sets total likes for the topic
 * 
 * @member {number} totalComments Gets or sets total comments for the topic
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the topic
 * 
 * @member {boolean} [pinned] Gets or sets a value indicating whether the
 * querying user has pinned the topic
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 * @member {object} [app] Gets or sets the containing app
 * 
 * @member {string} [app.appHandle] Gets or sets app handle
 * 
 * @member {string} [app.name] Gets or sets app name
 * 
 * @member {string} [app.iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [app.iconUrl] Gets or sets app icon url
 * 
 * @member {string} [app.platformType] Gets or sets platform type. Possible
 * values include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [app.deepLink] Gets or sets app deep link
 * 
 * @member {string} [app.storeLink] Gets or sets app store link
 * 
 */
export interface TopicView {
    topicHandle: string;
    createdTime: Date;
    lastUpdatedTime: Date;
    publisherType: string;
    user: UserCompactView;
    title?: string;
    text: string;
    blobType?: string;
    blobHandle?: string;
    blobUrl?: string;
    categories?: string;
    language?: string;
    group?: string;
    deepLink?: string;
    friendlyName?: string;
    totalLikes: number;
    totalComments: number;
    liked: boolean;
    pinned?: boolean;
    contentStatus?: string;
    app?: AppCompactView;
}

/**
 * @class
 * Initializes a new instance of the PutPushRegistrationRequest class.
 * @constructor
 * Request to put push registration (register or update)
 * @member {date} lastUpdatedTime Gets or sets last updated time from the OS
 * This is used to expire out registrations that have not been
 * updated every 30 days.
 * 
 * @member {string} language Gets or sets language of the user
 * 
 */
export interface PutPushRegistrationRequest {
    lastUpdatedTime: Date;
    language: string;
}

/**
 * @class
 * Initializes a new instance of the PostReplyRequest class.
 * @constructor
 * Request to post (create) reply
 * @member {string} text Gets or sets reply text
 * 
 * @member {string} [language] Gets or sets reply language
 * 
 */
export interface PostReplyRequest {
    text: string;
    language?: string;
}

/**
 * @class
 * Initializes a new instance of the PostReplyResponse class.
 * @constructor
 * Response from post (create) reply
 * @member {string} replyHandle Gets or sets reply handle of the reply
 * 
 */
export interface PostReplyResponse {
    replyHandle: string;
}

/**
 * @class
 * Initializes a new instance of the FeedResponseReplyView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
export interface FeedResponseReplyView {
    data: ReplyView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the ReplyView class.
 * @constructor
 * Reply view
 * @member {string} replyHandle Gets or sets reply handle
 * 
 * @member {string} commentHandle Gets or sets parent comment handle
 * 
 * @member {string} topicHandle Gets or sets root topic handle
 * 
 * @member {date} createdTime Gets or sets created time
 * 
 * @member {object} user Gets or sets owner of the reply
 * 
 * @member {string} [user.userHandle] Gets or sets user handle
 * 
 * @member {string} [user.firstName] Gets or sets first name of the user
 * 
 * @member {string} [user.lastName] Gets or sets last name of the user
 * 
 * @member {string} [user.photoHandle] Gets or sets photo handle of the user
 * 
 * @member {string} [user.photoUrl] Gets or sets photo url of the user
 * 
 * @member {string} [user.visibility] Gets or sets visibility of the user.
 * Possible values include: 'Public', 'Private'
 * 
 * @member {string} [user.followerStatus] Gets or sets follower relationship
 * status of the querying user. Possible values include: 'None', 'Follow',
 * 'Pending', 'Blocked'
 * 
 * @member {string} text Gets or sets reply text
 * 
 * @member {string} [language] Gets or sets reply language
 * 
 * @member {number} totalLikes Gets or sets total likes for the reply
 * 
 * @member {boolean} liked Gets or sets a value indicating whether the
 * querying user has liked the reply
 * 
 * @member {string} [contentStatus] Gets or sets content status. Possible
 * values include: 'Active', 'Banned'
 * 
 */
export interface ReplyView {
    replyHandle: string;
    commentHandle: string;
    topicHandle: string;
    createdTime: Date;
    user: UserCompactView;
    text: string;
    language?: string;
    totalLikes: number;
    liked: boolean;
    contentStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the PostReportRequest class.
 * @constructor
 * Request to post (create) a report for user or content
 * @member {string} reason Gets or sets report reason. Possible values
 * include: 'Spam', 'Cyberbullying', 'ChildEndangerment', 'Offensive',
 * 'ContentInfringement', 'Other'
 * 
 */
export interface PostReportRequest {
    reason: string;
}

/**
 * @class
 * Initializes a new instance of the PostSessionRequest class.
 * @constructor
 * Request to post (create) session
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
 * 
 * @member {string} [accessToken] Gets or sets access or authentication token,
 * user code, or verifier obtained from third-party provider.
 * The server contacts the third-party provider to use the token
 * (or user code, or verifier) for discover the user's identity.
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
 * @member {boolean} [createUser] Gets or sets a value indicating whether we
 * should create a new user if the user doesn't exist
 * 
 */
export interface PostSessionRequest {
    identityProvider: string;
    accessToken?: string;
    requestToken?: string;
    instanceId: string;
    createUser?: boolean;
}

/**
 * @class
 * Initializes a new instance of the PostSessionResponse class.
 * @constructor
 * Response from post (create) session
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} sessionToken Gets or sets session token generated by our
 * server.
 * The client saves the session token and sends it with every
 * request
 * 
 */
export interface PostSessionResponse {
    userHandle: string;
    sessionToken: string;
}

/**
 * @class
 * Initializes a new instance of the GetRequestTokenResponse class.
 * @constructor
 * Response from get request token response
 * @member {string} requestToken Gets or sets request token from identity
 * provider
 * 
 */
export interface GetRequestTokenResponse {
    requestToken: string;
}

/**
 * @class
 * Initializes a new instance of the PostFollowingRequest class.
 * @constructor
 * Request to post a following (follow user)
 * @member {string} userHandle Gets or sets user handle
 * 
 */
export interface PostFollowingRequest {
    userHandle: string;
}

/**
 * @class
 * Initializes a new instance of the PostFollowerRequest class.
 * @constructor
 * Request to post (accept) a follower
 * @member {string} userHandle Gets or sets user handle
 * 
 */
export interface PostFollowerRequest {
    userHandle: string;
}

/**
 * @class
 * Initializes a new instance of the PostBlockedUserRequest class.
 * @constructor
 * Request to post a blocked user (block user)
 * @member {string} userHandle Gets or sets user handle
 * 
 */
export interface PostBlockedUserRequest {
    userHandle: string;
}

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
export interface PostTopicRequest {
    publisherType: string;
    title?: string;
    text: string;
    blobType?: string;
    blobHandle?: string;
    categories?: string;
    language?: string;
    deepLink?: string;
    friendlyName?: string;
    group?: string;
}

/**
 * @class
 * Initializes a new instance of the PostTopicResponse class.
 * @constructor
 * Response from post (create) topic
 * @member {string} topicHandle Gets or sets topic handle of the topic
 * 
 */
export interface PostTopicResponse {
    topicHandle: string;
}

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
export interface PutTopicRequest {
    title?: string;
    text: string;
    categories?: string;
}

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
export interface PostUserRequest {
    identityProvider: string;
    accessToken?: string;
    requestToken?: string;
    instanceId: string;
    firstName: string;
    lastName: string;
    bio?: string;
    photoHandle?: string;
}

/**
 * @class
 * Initializes a new instance of the PostUserResponse class.
 * @constructor
 * Response from post (create) user
 * @member {string} userHandle Gets or sets user handle
 * 
 * @member {string} sessionToken Gets or sets the session token generated by
 * our server.
 * The client saves the session token and sends it with every
 * request
 * 
 */
export interface PostUserResponse {
    userHandle: string;
    sessionToken: string;
}

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
export interface UserProfileView {
    userHandle: string;
    appHandle: string;
    firstName: string;
    lastName: string;
    bio: string;
    photoHandle: string;
    photoUrl: string;
    visibility: string;
    totalTopics: number;
    totalFollowers: number;
    totalFollowing: number;
    followerStatus: string;
    followingStatus: string;
    profileStatus: string;
}

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
export interface PutUserInfoRequest {
    firstName: string;
    lastName: string;
    bio?: string;
}

/**
 * @class
 * Initializes a new instance of the PutUserPhotoRequest class.
 * @constructor
 * Request to put (update) user photo
 * @member {string} [photoHandle] Gets or sets photo handle of the user
 * 
 */
export interface PutUserPhotoRequest {
    photoHandle?: string;
}

/**
 * @class
 * Initializes a new instance of the PutUserVisibilityRequest class.
 * @constructor
 * Request to put (update) user visibility
 * @member {string} visibility Gets or sets visibility of the user. Possible
 * values include: 'Public', 'Private'
 * 
 */
export interface PutUserVisibilityRequest {
    visibility: string;
}

/**
 * @class
 * Initializes a new instance of the FeedResponseUserProfileView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
export interface FeedResponseUserProfileView {
    data: UserProfileView[];
    cursor: string;
}

/**
 * @class
 * Initializes a new instance of the PostLinkedAccountRequest class.
 * @constructor
 * Request to post (create) linked account
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
 * 
 * @member {string} [accessToken] Gets or sets access or authentication token,
 * user code, or verifier obtained from third-party provider.
 * The server contacts the third-party provider to use the token
 * (or user code, or verifier) for discover the user's identity.
 * 
 * @member {string} [requestToken] Gets or sets request token obtained from
 * third-party provider.
 * Some providers do not issue authentication or access tokens,
 * but they issue request tokens
 * and verifiers.
 * 
 */
export interface PostLinkedAccountRequest {
    identityProvider: string;
    accessToken?: string;
    requestToken?: string;
}

/**
 * @class
 * Initializes a new instance of the LinkedAccountView class.
 * @constructor
 * Linked account view
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter'
 * 
 * @member {string} accountId Gets or sets third party account id -- Unique
 * user id provided by the third-party identity provider
 * 
 */
export interface LinkedAccountView {
    identityProvider: string;
    accountId: string;
}
