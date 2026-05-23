const products = [
  {
    id: 1,
    name: "TV",
    price: 2000.0
  },
  {
    id: 2,
    name: "Smart TV",
    price: 3000.0
  },
  {
    id: 3,
    name: "Mouse",
    price: 99.9
  }
]

export function findProduct(id: number) {
  return products.find(x => x.id === id)
}
