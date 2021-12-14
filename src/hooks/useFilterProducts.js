import { useState, useMemo } from 'react'

function useFilterProducts(products) {
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useMemo(() => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )

    if (filteredProducts.length !== result.length) {
      setFilteredProducts(result)
    }
  }, [products, query])

  return { query, setQuery, filteredProducts }
}

export default useFilterProducts
