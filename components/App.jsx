import { useEffect } from 'react';
import Editor from './Editor';
import { useState } from 'react';
import Header from './Header';


function App() {
  const [html, sethtml] = useState("")
  const [css, setcss] = useState("")
  const [js, setjs] = useState("")
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {  // setting the timeout for rendering in priewplane so it doent rander instantly
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 1000)

    return () => clearTimeout(timeout); // we dont want to queue timeout after timeout if user starts typing after some delay

  }, [html, css, js])
  
  
  return (
    <>
      <Header/>
      <div className='main-app'>
        <div className="pane editor-pane">
          <Editor 
            language = "xml" 
            displayName="HTML"
            value = {html} 
            onChange= {sethtml} />
          <Editor 
            language = "css" 
            displayName="CSS"
            value = {css} 
            onChange= {setcss} />
          <Editor 
            language = "javascript" 
            displayName="javascript"
            value = {js} 
            onChange= {setjs} />
        </div>
        <div className="pane preview">
          <iframe 
            srcDoc= {srcDoc} // gettin html css js and printing it on preview screen
            title='output'
            sandbox='allow-scripts'
            width={100}
            height={100}
            ></iframe>
        </div>
      </div>
    </>
  )

}

export default App
