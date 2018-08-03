#!/usr/bin/env node

// file level strict mode ON
// 'use strict';

// function level strict mode
function one() {
  'use strict';
  function two() {
    return "So am I";
  }
  return "I'm a function in strict mode";
}

console.log(one());
