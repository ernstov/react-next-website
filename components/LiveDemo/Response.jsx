import { useEffect, useState, useRef } from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json"
import "./theme-tmtcustom"
import "./theme-tmtcustom-cover"
import Beautify from 'ace-builds/src-noconflict/ext-beautify'
import React from "react";

const Response = ({ data, theme, showGutter = true, tabSize, fontSize, folds }) => {
  const [windowSize, setWindowSize] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (typeof window != "undefined") setWindowSize(window.innerWidth)


    if (folds) {
      const session = ref.current.editor.session
      const endRow = session.getLength()
      const startRow = 0
      const foldWidgets = session.foldWidgets
      const depth = 100000

      for (let row = startRow; row < endRow; row++) {
        let isFold = false;

        if (foldWidgets[row] == null)
          foldWidgets[row] = session.getFoldWidget(row);

        folds.map((fold) => {
          if (session.getLine(row).indexOf(fold) != -1) {
            isFold = true
          }
        })

        if (isFold && foldWidgets[row] == "start") {
          var range = session.getFoldWidgetRange(row);
          if (range && range.isMultiLine()
            && range.end.row <= endRow
            && range.start.row >= startRow
          ) {
            row = range.end.row;
            range.collapseChildren = depth;
            session.addFold("...", range);
          }
        }
      }
    }
  }, [])

  return <AceEditor
    mode="json"
    width="100%"
    height="100%"
    className="json-viewer"
    splits={false}
    ref={ref}
    showGutter={windowSize < 880 ? false : showGutter}
    tabSize={tabSize ? tabSize : windowSize < 880 ? 2 : 4}
    theme={theme ? theme : "tmtcustom"}
    splits={0}
    fontSize={windowSize < 880 ? 12 : fontSize ? fontSize : 14}
    value={JSON.stringify(data, null, '\t')}
    name="json-editor"
    wrapEnabled={true}
    readOnly={true}
    commands={Beautify.commands}
    showPrintMargin={false}
    editorProps={{ $blockScrolling: true }}
    style={{ lineHeight: 1.6 }}
  />
}

export default Response;
