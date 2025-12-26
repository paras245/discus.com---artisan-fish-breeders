
export type Language = 'en' | 'es' | 'ar';

export interface MultiLangString {
  en: string;
  es: string;
  ar: string;
}

export interface FishSpecifications {
  origin: string;
  tankSize: string;
  temperament: string;
  diet: string;
  careLevel: string;
  size: string;
}

export interface Fish {
  id: string;
  name: MultiLangString;
  scientificName: string;
  categoryId: string;
  price: number;
  discountPrice?: number;
  images: string[];
  description: MultiLangString;
  specifications: FishSpecifications;
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: MultiLangString;
  image: string;
  fishCount: number;
}

export interface CartItem extends Fish {
  quantity: number;
}

export type UserRole = 'ADMIN' | 'CUSTOMER';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  shippingAddress: string;
}
