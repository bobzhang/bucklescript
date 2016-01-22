// Generated CODE, PLEASE EDIT WITH CARE
"use strict";

var Pervasives         = require("./pervasives");
var Buffer             = require("./buffer");
var CamlinternalFormat = require("./camlinternalFormat");

function kfprintf(k, o, param) {
  return CamlinternalFormat.make_printf(function (o, acc) {
              CamlinternalFormat.output_acc(o, acc);
              return k(o);
            }, o, /* End_of_acc */0, param[1]);
}

function kbprintf(k, b, param) {
  return CamlinternalFormat.make_printf(function (b, acc) {
              CamlinternalFormat.bufput_acc(b, acc);
              return k(b);
            }, b, /* End_of_acc */0, param[1]);
}

function ikfprintf(k, oc, param) {
  return CamlinternalFormat.make_printf(function (oc, _) {
              return k(oc);
            }, oc, /* End_of_acc */0, param[1]);
}

function fprintf(oc, fmt) {
  return kfprintf(function (prim) {
              return prim;
            }, oc, fmt);
}

function bprintf(b, fmt) {
  return kbprintf(function (prim) {
              return prim;
            }, b, fmt);
}

function ifprintf(oc, fmt) {
  return ikfprintf(function (prim) {
              return prim;
            }, oc, fmt);
}

function printf(fmt) {
  return fprintf(Pervasives.stdout, fmt);
}

function eprintf(fmt) {
  return fprintf(Pervasives.stderr, fmt);
}

function ksprintf(k, param) {
  var k$prime = function (_, acc) {
    var buf = Buffer.create(64);
    CamlinternalFormat.strput_acc(buf, acc);
    return k(Buffer.contents(buf));
  };
  return CamlinternalFormat.make_printf(k$prime, /* () */0, /* End_of_acc */0, param[1]);
}

function sprintf(fmt) {
  return ksprintf(function (s) {
              return s;
            }, fmt);
}

var kprintf = ksprintf;

exports.fprintf   = fprintf;
exports.printf    = printf;
exports.eprintf   = eprintf;
exports.sprintf   = sprintf;
exports.bprintf   = bprintf;
exports.ifprintf  = ifprintf;
exports.kfprintf  = kfprintf;
exports.ikfprintf = ikfprintf;
exports.ksprintf  = ksprintf;
exports.kbprintf  = kbprintf;
exports.kprintf   = kprintf;
/* No side effect */