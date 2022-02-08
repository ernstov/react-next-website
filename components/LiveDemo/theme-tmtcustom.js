ace.define("ace/theme/tmtcustom",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
"use strict";

exports.isDark = false;
exports.cssClass = "ace-tmtcustom";
exports.cssText = ".ace-tmtcustom .ace_gutter {\
background: #f9f9f9;\
color: #333;\
}\
.ace-tmtcustom .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-tmtcustom .ace_fold {\
background-color: #6B72E6;\
}\
.ace-tmtcustom {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-tmtcustom .ace_cursor {\
color: black;\
}\
.ace-tmtcustom .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-tmtcustom .ace_storage,\
.ace-tmtcustom .ace_keyword {\
color: blue;\
}\
.ace-tmtcustom .ace_constant {\
color: rgb(197, 6, 11);\
}\
.ace-tmtcustom .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-tmtcustom .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-tmtcustom .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-tmtcustom .ace_invalid {\
background-color: rgba(255, 0, 0, 0.1);\
color: red;\
}\
.ace-tmtcustom .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-tmtcustom .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-tmtcustom .ace_support.ace_type,\
.ace-tmtcustom .ace_support.ace_class {\
color: rgb(109, 121, 222);\
}\
.ace-tmtcustom .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-tmtcustom .ace_string {\
color: #227C9D;\
}\
.ace-tmtcustom .ace_comment {\
color: rgb(76, 136, 107);\
}\
.ace-tmtcustom .ace_comment.ace_doc {\
color: rgb(0, 102, 255);\
}\
.ace-tmtcustom .ace_comment.ace_doc.ace_tag {\
color: rgb(128, 159, 191);\
}\
.ace-tmtcustom .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-tmtcustom .ace_variable {\
font-weight: bold;\
color: #535353;\
}\
.ace-tmtcustom .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-tmtcustom .ace_entity.ace_name.ace_function {\
color: #0000A2;\
}\
.ace-tmtcustom .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-tmtcustom .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-tmtcustom .ace_meta.ace_tag {\
color:rgb(0, 22, 142);\
}\
.ace-tmtcustom .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-tmtcustom .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-tmtcustom.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
}\
.ace-tmtcustom .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-tmtcustom .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-tmtcustom .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-tmtcustom .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-tmtcustom .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-tmtcustom .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-tmtcustom .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";
exports.$id = "ace/theme/textmate";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/tmtcustom"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            