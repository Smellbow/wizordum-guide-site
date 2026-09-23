import { useState } from 'react'
import publicAsset from '../../utils/publicAsset'
import './ScriptEntry.css'

function ScriptEntry({ script }) {
  const [copyStatus, setCopyStatus] = useState('idle')

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(script.content)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  const copyLabel = {
    idle: 'Copy script',
    copied: 'Copied!',
    failed: 'Copy failed',
  }[copyStatus]

  return (
    <article className="script-entry">
      <header>
        <h2>{script.title}</h2>
        <p>{script.description}</p>
      </header>

      {script.content && (
        <pre className="script-example">
          <code>{script.content}</code>
        </pre>
      )}

      <div className="script-entry-actions">
        {script.content && (
          <button type="button" onClick={copyScript}>
            {copyLabel}
          </button>
        )}

        {script.downloadPath && (
          <a
            className="script-download"
            href={publicAsset(script.downloadPath)}
            download={script.downloadName || true}
          >
            Download script
          </a>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {copyStatus === 'copied' && `${script.title} copied to the clipboard.`}
        {copyStatus === 'failed' &&
          `Could not copy ${script.title}. Select and copy the script manually.`}
      </p>
    </article>
  )
}

export default ScriptEntry
