// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Tests for the check-component-name-and-count.js file.
 */

'use strict';

var rule = require('./check-component-name-and-count');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('check-component-name-and-count', rule, {
  valid: [
    `angular.module('oppia').component('loadingMessage', {
      template: require('./loading-message.component.html'),
      bindings: {
        message: '<'
      }
    });`
  ],

  invalid: [
    {
      code:
      `angular.module('oppia').component('loadingMessage', {
        template: require('./loading-message.component.html'),
        bindings: {
          message: '<'
        }
      });
      
      angular.module('oppia').component('loadingMessage', {
        template: require('./loading-message.component.html'),
        bindings: {
          message: '<'
        }
      });`,
      errors: [{
        message: (
          'Please ensure that there is exactly one component in the file.'), 
        type: null,
      }]
    }
  ]


});