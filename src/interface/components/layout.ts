import React from "react";

export interface IHeader {}

export interface ILayout {
  children: JSX.Element | Array<JSX.Element> | string;
}
export namespace NCard {
  export interface IProductCard {
    title: string;
    description: string;
    image: string;
    link: string;
    width?: string;
    price: string | number;
    discount: string;
    earn: any;
  }
  export interface IPlayCard {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  export interface IBestCard {
    title: string;
    description: string;
    image: string;
    link: string;
    width: string;
  }
  export interface ICategoriesCard {
    title: string;
    description: string;
    image: string;
    link: string;
    impression: string;
    reward: string;
  }
}
