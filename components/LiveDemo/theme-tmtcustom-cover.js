ace.define("ace/theme/tmtcustom-cover",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
"use strict";

exports.isDark = false;
exports.cssClass = "ace-tmtcustom-cover";
exports.cssText = ".ace-tmtcustom-cover .ace_gutter {\
background: #f9f9f9;\
color: #333;\
}\
.ace-tmtcustom-cover .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-tmtcustom-cover .ace_fold {\
background-color: #6B72E6;\
}\
.ace-tmtcustom-cover {\
color: black;\
}\
.ace-tmtcustom-cover .ace_cursor {\
color: black;\
}\
.ace-tmtcustom-cover .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-tmtcustom-cover .ace_storage,\
.ace-tmtcustom-cover .ace_keyword {\
color: blue;\
}\
.ace-tmtcustom-cover .ace_constant {\
color: rgb(197, 6, 11);\
}\
.ace-tmtcustom-cover .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-tmtcustom-cover .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-tmtcustom-cover .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-tmtcustom-cover .ace_invalid {\
background-color: rgba(255, 0, 0, 0.1);\
color: red;\
}\
.ace-tmtcustom-cover .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-tmtcustom-cover .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-tmtcustom-cover .ace_support.ace_type,\
.ace-tmtcustom-cover .ace_support.ace_class {\
color: rgb(109, 121, 222);\
}\
.ace-tmtcustom-cover .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-tmtcustom-cover .ace_string {\
color: #227C9D;\
}\
.ace-tmtcustom-cover .ace_comment {\
color: rgb(76, 136, 107);\
}\
.ace-tmtcustom-cover .ace_comment.ace_doc {\
color: rgb(0, 102, 255);\
}\
.ace-tmtcustom-cover .ace_comment.ace_doc.ace_tag {\
color: rgb(128, 159, 191);\
}\
.ace-tmtcustom-cover .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-tmtcustom-cover .ace_variable {\
font-weight: bold;\
color: #535353;\
}\
.ace-tmtcustom-cover .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-tmtcustom-cover .ace_entity.ace_name.ace_function {\
color: #0000A2;\
}\
.ace-tmtcustom-cover .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-tmtcustom-cover .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-tmtcustom-cover .ace_meta.ace_tag {\
color:rgb(0, 22, 142);\
}\
.ace-tmtcustom-cover .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-tmtcustom-cover.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-tmtcustom-cover .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-tmtcustom-cover .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-tmtcustom-cover .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAIAAAAW4yFwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMy0xN1QyMToxMTozOCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDMtMTdUMjE6MTM6NDkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDMtMTdUMjE6MTM6NDkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3Yjc0NzEzLTIxOTEtNGE0Ny04MDlkLWEzMzM0MTliZjJiZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkN2I3NDcxMy0yMTkxLTRhNDctODA5ZC1hMzMzNDE5YmYyYmUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkN2I3NDcxMy0yMTkxLTRhNDctODA5ZC1hMzMzNDE5YmYyYmUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ3Yjc0NzEzLTIxOTEtNGE0Ny04MDlkLWEzMzM0MTliZjJiZSIgc3RFdnQ6d2hlbj0iMjAyMi0wMy0xN1QyMToxMTozOCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr6UomYAAAAQSURBVAiZY/j//z/TvFn9ABWbBMdEMazcAAAAAElFTkSuQmCC\") right repeat-y;\
}\
";
exports.$id = "ace/theme/tmtcustom-cover";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/tmtcustom-cover"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            