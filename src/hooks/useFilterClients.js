import { useState, useMemo } from 'react'

function useFilterData(data) {
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  useMemo(() => {
    const result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.last_name.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredData(result)
  }, [data, query])

  return { query, setQuery, filteredData }
}

export default useFilterData
