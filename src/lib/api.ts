export const fetchProduct = async (id: string) => {
    const res = await fetch('http://localhost:4000/products/' + id)

    return res.json()
}

export const fetchProducts = async () => {
    const res = await fetch(`http://localhost:4000/products`)

    return res.json()
}