export namespace NProductModel {
  export interface IProduct {
    createAt: string | Date;
    description: string;
    discount: number;
    discountAmount: number;
    discountRate: number;
    id: number;
    image: string;
    linkAffilitate: string;
    linkProduct: string;
    merchant: string;
    name: string;
    price: number;
    productId: string;
    updateAt: string | Date;
  }

  export interface IShop {
    id: number;
    logo: string;
    name: string;
    max_com: string;
    url: string;
    action_point: string;
    commission_policy: string;
    cookie_policy: string;
    introduction: string;
    other_notice: string;
    rejected_reason: string;
    traffic_building_policy: string;
    categoryId: number;
    campaignId: string;
    createAt: Date | string;
    updateAt: Date | string;
  }
}
