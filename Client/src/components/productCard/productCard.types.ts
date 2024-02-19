export type productCardTypes = {
  product: {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    hoverImage: string;
    bestSeller?: boolean;
    newReleased?: boolean;
    sales?: boolean;
    quantity?: number;
    color?: string;
    size?: string;
  };
};
