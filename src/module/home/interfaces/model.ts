export namespace NHOME_MODEL {
  export interface IBanner {
    id: number;
    pageId: number;
    bannerPosition: number;
    bannerType: string;
    image: string;
    landingPageUrl: string;
    airTimeCreate: Date | string;
    airTimeEnd: Date | string;
    createAt: Date | string;
    updateAt: Date | string;
    status: string;
  }
}
