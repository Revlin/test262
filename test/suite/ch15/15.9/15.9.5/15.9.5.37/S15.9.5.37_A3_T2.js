// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setUTCDate property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.37_A3_T2
description: Checking DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.setUTCDate.length  !== false) {
  $ERROR('#1: The Date.prototype.setUTCDate.length property has the attributes DontDelete');
}

if (!Date.prototype.setUTCDate.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.setUTCDate.length property has the attributes DontDelete');
}
