export class OrderDto {
  cartSum: number;
  moneyType: string;
  deliveryType: string;
  deliveryCost: number;
  deliveryInfo: {
    telegram: string,
    firstName: string,
    lastName: string,
    address: string,
    phone: string,
    companyName: string,
    email: string,
    notes: string
  };
  items: [];
}