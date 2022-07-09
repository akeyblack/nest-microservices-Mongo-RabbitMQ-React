
class DeliveryInfo {
  telegram: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  companyName: string;
  email: string;
  notes: string;
}

export class OrderDto {
  cartSum: number;
  moneyType: boolean;
  deliveryType: boolean;
  deliveryCost: number;
  deliveryInfo: DeliveryInfo;
  items: [{
    id: number,
    name: string,
    size: number,
    count: number,
  }];
}