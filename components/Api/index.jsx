import { useState, useEffect } from "react"
import styles from './api.module.scss'
import Icon from "../Icon"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json"
import "./theme-monokai"
import Beautify from 'ace-builds/src-noconflict/ext-beautify'

const CAPTCHA_PUBLIC_KEY = process.env.NEXT_PUBLIC_CAPTCHA_PUBLIC_KEY || "6LevMlEdAAAAAACZkPb62nXA0MFNco_U9CljvD4G"

const Api = ({ data, isVisible }) => {

  const { title, tab, label, getLabel, api, button, query } = data.inner
  const [isLoading, setIsLoading] = useState(false)
  const [editorJson, setEditorJson] = useState(JSON.stringify({}, null, '\t'))
  const [urlQuery, setUrlQuery] = useState(query)

  useEffect(() => {
    grecaptcha.ready(function() {
      grecaptcha.render("recaptcha-container", {
        "sitekey": CAPTCHA_PUBLIC_KEY
      })
    })
  }, [])

  const getData = () => {
    const captchaResponse = grecaptcha.getResponse();
    console.log(captchaResponse)
    const request = `https://${api}${urlQuery}`
    fetch(`https://api.goperigon.com/v1/demo/news`, {
      method: 'POST',
      headers: {
        "captcha-response": captchaResponse,
        "content-type": "application/json"
      },
      body: JSON.stringify({ url: request })
    }).then(response => response.json())
      .then(result => {
        setIsLoading(false)
        setEditorJson(JSON.stringify(result, null, '\t'))
      })
  }

  const onClick = () => {
    setIsLoading(true)
    getData()
  }

  return (
    <div className={`${styles.api} ${isVisible ? "active" : ""}`}>
      <div className={`${styles.title}`}>
        <div className={`${styles.titleActions}`}><span></span><span></span><span></span></div>
        <div><span className={`${styles.titleText}`}>{title}</span></div>
        <div className={`${styles.titleLabel}`}><span>{label}</span></div>
        <div className={`${styles.titleTab}`}><span>{tab}</span></div>
      </div>
      <div className={`${styles.urlBar}`}>
        <div className={`${styles.url}`}>
          <div className={`${styles.labelBar}`}><span>{getLabel}</span></div>
          <div className={`${styles.input}`}><span>{api}</span><input name="url" onChange={(e) => setUrlQuery(e.target.value)} defaultValue={urlQuery} type="text" /></div>
        </div>
        <button onClick={onClick} className={`${styles.button} ${isLoading ? "disabled" : ""}`}>
          <Icon variant="refresh" /> <span>{button}</span>
        </button>
        <div id="recaptcha-container" className={`${styles.captcha}`}></div>
      </div>
      <div className={`${styles.content}`}>
        {/* <div id="jsoneditor" className={`${styles.editor}`}></div> */}
        <AceEditor
          mode="json"
          width="100%"
          height="100%"
          splits={false}
          theme="monokai"
          splits={0}
          fontSize={13}
          value={editorJson}
          name="json-editor"
          wrapEnabled={true}
          readOnly={true}
          commands={Beautify.commands}
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          style={{ lineHeight: 1.6 }}
        />,
      </div>
    </div>
  );
}

export default Api;
