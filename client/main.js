import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../lib/collection.js';
import '../lib/userAcct.js';
import './infiniteScroll.js';

import './main.html';

import './myAccounts.html';
import './myAccounts.js';

import './addProfile.html';
import './addProfile.js';

import './filter.html';
import './filter.js';

import './confirmDel.html';
import './editProfile.html';

import './signIn.html';

//if(Meteor.userId())
    Meteor.subscribe("profData");
//else
    //Meteor.subscribe("noUser");
