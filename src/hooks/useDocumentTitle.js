import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} | Wizordum Mapping Guide`
  }, [title])
}

export default useDocumentTitle