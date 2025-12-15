export interface Product {
      id: number;
      title: string;
      description: string;
      category: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      tags: [
        string,
        string
      ],
      brand: string;
      sku: string;
      weight: number;
      dimensions: {
        width: number;
        height: number;
        depth: number;
      },
      warrantyInformation: string;
      shippingInformation: string;
      availabilityStatus: string;
      reviews: [
        {
          rating: number;
          comment: string;
          date: number;
          reviewerName: string;
          reviewerEmail: string;
        },
        {
          rating: number;
          comment: string;
          date: number;
          reviewerName: string;
          reviewerEmail: string;
        },
        {
          rating: number;
          comment: string;
          date: number;
          reviewerName: string;
          reviewerEmail: string;
        }
      ],
      returnPolicy: string;
      minimumOrderQuantity: number;
      meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: "..."
      },
      thumbnail: "...",
      images: ["...", "...", "..."]
    }
export interface CreateProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: [string];
}
