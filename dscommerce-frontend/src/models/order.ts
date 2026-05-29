export class OrderDTO {
  id?: number;
  items: OrderItemDTO[] = [];

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.subTotal, 0);
  }
}

export class OrderItemDTO {
  productId: number;
  quantity: number;
  name: string;
  price: number;
  imgUrl: string;

  constructor(
    productId: number,
    quantity: number,
    name: string,
    price: number,
    imgUrl: string,
  ) {
    this.productId = productId;
    this.quantity = quantity;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  get subTotal(): number {
    return this.price * this.quantity;
  }
}
