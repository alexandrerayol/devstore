export interface product {
    id: string;
    title: string;
    slug: string;
    price: number;
    image: string;
    description: string;
    featured: boolean;
    ErrorMessage?: string;
}