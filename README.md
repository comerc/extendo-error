# extendo-error
Safely and simply extend native Error with prototype chaining support

[![npm](https://img.shields.io/npm/v/extendo-error.svg)](https://www.npmjs.com/package/extendo-error)
[![license](https://img.shields.io/github/license/jamesrichford/extendo-error.svg)](https://github.com/jamesrichford/extendo-error/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/jamesrichford/extendo-error.svg?branch=master)](https://travis-ci.org/jamesrichford/extendo-error)
[![Coverage Status](https://coveralls.io/repos/github/jamesrichford/extendo-error/badge.svg?branch=master)](https://coveralls.io/github/jamesrichford/extendo-error?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jamesrichford/extendo-error/badge.svg)](https://snyk.io/test/github/jamesrichford/extendo-error)
[![Code Climate](https://codeclimate.com/github/jamesrichford/extendo-error/badges/gpa.svg)](https://codeclimate.com/github/jamesrichford/extendo-error)
[![Issue Count](https://codeclimate.com/github/jamesrichford/extendo-error/badges/issue_count.svg)](https://codeclimate.com/github/jamesrichford/extendo-error)
[![bitHound Code](https://www.bithound.io/github/jamesrichford/extendo-error/badges/code.svg)](https://www.bithound.io/github/jamesrichford/extendo-error)
[![bitHound Dependencies](https://www.bithound.io/github/jamesrichford/extendo-error/badges/dependencies.svg)](https://www.bithound.io/github/jamesrichford/extendo-error/master/dependencies/npm)

# What is it?

Allows you to extend the native Error type whilst keeping the ability to have a setable message through constructor and resolving the name correctly.

It also gives the right typings and extends all children in the chain correctly (i.e. instanceof works correctly and all functions, properties and fields are accessible).

# Why use it?

In TypeScript 2.1 a breaking change makes it more challenging to extend the Error type and also means you need to do work in every class that extends Error (Exten
See [this](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work)

# How do I use it?

Install it

```
npm install extendo-error --save
```

Import it and extend it

```typescript
import ExtendoError from "extendo-error";

class YourCustomError extends ExtendoError {
    // add whatever you like here
}
```

All done! :)
