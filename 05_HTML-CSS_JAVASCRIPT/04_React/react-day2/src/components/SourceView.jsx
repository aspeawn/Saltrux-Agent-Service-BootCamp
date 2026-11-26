import { useState } from 'react'
import { getSource } from '../sources'

export default function SourceView({ files }) {
  const [active, setActive] = useState(0)
  const path = files[active]

  return (
    <div className="source">
      {files.length > 1 && (
        <div className="source-tabs">
          {files.map((file, index) => (
            <button
              key={file}
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
            >
              {file.split('/').pop()}
            </button>
          ))}
        </div>
      )}
      <pre>
        <code>{getSource(path)}</code>
      </pre>
    </div>
  )
}
