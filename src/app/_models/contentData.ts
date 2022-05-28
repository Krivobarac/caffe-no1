export interface ContentDataDTO {
    home_text: string;
    site_name: string;
    site_subname: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    contact: ContactDTO;
    drink_menu: MenuDTO[];
    food_menu: MenuDTO[];
};
  
export interface ContactDTO {
    id: number;
    contact_text: string;
    street: string;
    city: string;
    email: string;
    phone_number: string;
    post_number: string;
    street_number: string;
}

export interface MenuDTO {
    id: number;
    item_category: string;
    category_description?: string;
    item: MenuItemDTO[];
}

export interface MenuItemDTO {
    id: number;
    item_name: string;
    item_price: number 
}
  