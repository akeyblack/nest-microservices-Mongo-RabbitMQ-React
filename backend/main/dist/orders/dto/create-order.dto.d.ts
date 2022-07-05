declare class DeliveryInfo {
    telegram: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    companyName: string;
    email: string;
    notes: string;
}
export declare class OrderDto {
    cartSum: number;
    moneyType: boolean;
    deliveryType: boolean;
    deliveryCost: number;
    deliveryInfo: DeliveryInfo;
    items: [];
}
export {};
