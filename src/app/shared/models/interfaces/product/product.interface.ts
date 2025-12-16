export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
        slug: string;
    };
    images: string[];
}

//  type Product = typeof sampleProduct; заметка

export interface CreateProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: [string];
}
