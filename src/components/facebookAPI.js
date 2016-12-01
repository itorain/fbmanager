//var apiURL = "https://graph.facebook.com/v2.8/"
const myToken = "EAACEdEose0cBAK0Tkn3xXs3Wnp6KieVeRzvyo9g9h9QvhS9Jz4ZBqaH4liOWBsaaByNa7MVh7pnJHhWs9dPDNt2s1BnNhmiOTVWgkhvKsQm9VOYYAO73RPt2oxTAqrEwGUloU9ZCOya55TWt4UVper5DgxcexuSWQnNJR25AZDZD";
//var appToken = "339419026434735|JVqBx0gnWwyVSRBawxlDiZKRaPA";
const appSecret = "6044100205a4b2b0f5a41a4ef4daa82f";
const pageID = "587024474825530";
const appID = "339419026434735";
const version = "2.8";

import graphAPI from 'fb-react-sdk';

//export const graph = {
// export const init = () => {
//     window.fbAsyncInit = function() {
//         FB.init({
//             appId      : appID,
//             xfbml      : false,
//             version    : 'v2.8'
//         });
//         // after init, get login status
//         getLoginStatus();
//     },
//     (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {return;}
//         js = d.createElement(s); js.id = id;
//         js.src = "//connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
// };

// export const getLoginStatus = () => {
//     window.FB.getLoginStatus((response) => {
//         console.log(response);
//     });
// };

export const page_details = (cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(pageID, { fields: "name,about,category,cover,description,general_info,likes,new_like_count" }, function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const page_insights = (cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(pageID + '/insights', function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const posts_all = (cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(pageID + '/feed', { fields: 'link,message,story,type,attachments,from{name,picture},created_time' }, function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const posts_published = (cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(pageID + '/promotable_posts', { fields: 'link,message,story,type,attachments,from{name,picture},created_time' }, function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const posts_unpublished = (cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(pageID + '/promotable_posts?is_published=false', { fields: 'link,message,story,type,attachments,from{name,picture},created_time', is_published: false }, function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const post_insights = (id, cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.get(id + '/insights/post_impressions_unique/lifetime', { fields: "name,id,period,values" }, function(err, res) {
        console.log(res);
        cb(res);
    });
};

export const create_post = (text, publish, timestamp="", cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    if (timestamp) {
        graphAPI.post(pageID + '/feed', { message: text, published: false, scheduled_publish_time: timestamp }, function(err, res) {
            console.log(err);
            cb(res);
        });
    }
    else {
        graphAPI.post(pageID + '/feed', { message: text, published: publish }, function(err, res) {
            console.log(err);
            cb(res);
        });
    }
};

export const update_post = (id, text, cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.post(id, { message: text }, function(err, res) {
        console.log(err);
        cb(res);
    });
};

export const delete_post = (id, cb) => {
    graphAPI.setAccessToken(myToken);
    graphAPI.setVersion('2.8');
    graphAPI.del(id, function(err, res) {
        console.log(err);
        cb(res);
    });
};
//}
// export const init = (cb) => {
//     window.fbAsyncInit = function() {
//         FB.init({
//             appId      : appID,
//             xfbml      : false,
//             version    : 'v2.8'
//         });
//     // after init, get login status
//
// }
//
//
// export const posts_all = (cb) => {
//     graphAPI.setAccessToken(myToken);
//     graphAPI.setVersion('2.8');
//     graphAPI.get(pageID + '/feed', function(err, res) {
//         console.log(res);
//         cb(res);
//     });
// }
//
// export const update_post = (id, message, cb) => {
//     graphAPI.setAccessToken(myToken);
//     graphAPI.setVersion('2.8');
//     graphAPI.post(id)
// }
//
// export const pageDetails = function() {
//     graphAPI.setAccessToken(myToken);
//     graphAPI.setVersion('2.8');
//     graphAPI.get(pageID, function(err, res) {
//         console.log(res);
//         return res['name'];
//     });
// };
//
// export const accounts = function() {
//     graphAPI.setAccessToken(myToken);
//     graphAPI.setVersion('2.8');
//     graphAPI.get('/me/accounts', { fields: 'name' }, function(err, res) {
//         console.log(res);
//         return res.text;
//     });
// };
