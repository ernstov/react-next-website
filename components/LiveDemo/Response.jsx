import { useEffect, useState } from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json"
import "./theme-tmtcustom"
import "./theme-tmtcustom-cover"
import Beautify from 'ace-builds/src-noconflict/ext-beautify'
import React from "react";

const Response = ({ data, theme, showGutter=true, tabSize, fontSize}) => {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    if (typeof window != "undefined") setWindowSize(window.innerWidth)
  }, [])

  return <AceEditor
    mode="json"
    width="100%"
    height="100%"
    splits={false}
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
