import { Injectable } from '@angular/core';
import { CardItem } from './search.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {


    getGalleryItems(): Observable<CardItem[]> {
        return of([
            {
                "id": 1,
                "products": [
                    {
                        "id": 168,
                        "title": "Charger SXT RWD",
                        "price": 32999.99,
                        "quantity": 3,
                        "total": 98999.97,
                        "discountPercentage": 13.39,
                        "discountedTotal": 85743.87,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
                    },
                    {
                        "id": 78,
                        "title": "Apple MacBook Pro 14 Inch Space Grey",
                        "price": 1999.99,
                        "quantity": 2,
                        "total": 3999.98,
                        "discountPercentage": 18.52,
                        "discountedTotal": 3259.18,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
                    },
                    {
                        "id": 183,
                        "title": "Green Oval Earring",
                        "price": 24.99,
                        "quantity": 5,
                        "total": 124.94999999999999,
                        "discountPercentage": 6.28,
                        "discountedTotal": 117.1,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
                    },
                    {
                        "id": 100,
                        "title": "Apple Airpods",
                        "price": 129.99,
                        "quantity": 5,
                        "total": 649.95,
                        "discountPercentage": 12.84,
                        "discountedTotal": 566.5,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
                    }
                ],
                "total": 103774.85,
                "discountedTotal": 89686.65,
                "userId": 33,
                "totalProducts": 4,
                "totalQuantity": 15
            },
            {
                "id": 2,
                "products": [
                    {
                        "id": 144,
                        "title": "Cricket Helmet",
                        "price": 44.99,
                        "quantity": 4,
                        "total": 179.96,
                        "discountPercentage": 11.47,
                        "discountedTotal": 159.32,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
                    },
                    {
                        "id": 124,
                        "title": "iPhone X",
                        "price": 899.99,
                        "quantity": 4,
                        "total": 3599.96,
                        "discountPercentage": 8.03,
                        "discountedTotal": 3310.88,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
                    },
                    {
                        "id": 148,
                        "title": "Golf Ball",
                        "price": 9.99,
                        "quantity": 4,
                        "total": 39.96,
                        "discountPercentage": 11.24,
                        "discountedTotal": 35.47,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png"
                    },
                    {
                        "id": 122,
                        "title": "iPhone 6",
                        "price": 299.99,
                        "quantity": 3,
                        "total": 899.97,
                        "discountPercentage": 19.64,
                        "discountedTotal": 723.22,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
                    },
                    {
                        "id": 110,
                        "title": "Selfie Lamp with iPhone",
                        "price": 14.99,
                        "quantity": 5,
                        "total": 74.95,
                        "discountPercentage": 19.87,
                        "discountedTotal": 60.06,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png"
                    }
                ],
                "total": 4794.8,
                "discountedTotal": 4288.95,
                "userId": 142,
                "totalProducts": 5,
                "totalQuantity": 20
            },
            {
                "id": 3,
                "products": [
                    {
                        "id": 98,
                        "title": "Rolex Submariner Watch",
                        "price": 13999.99,
                        "quantity": 1,
                        "total": 13999.99,
                        "discountPercentage": 16.35,
                        "discountedTotal": 11710.99,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
                    },
                    {
                        "id": 125,
                        "title": "Oppo A57",
                        "price": 249.99,
                        "quantity": 5,
                        "total": 1249.95,
                        "discountPercentage": 16.54,
                        "discountedTotal": 1043.21,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
                    },
                    {
                        "id": 55,
                        "title": "Egg Slicer",
                        "price": 6.99,
                        "quantity": 2,
                        "total": 13.98,
                        "discountPercentage": 16.04,
                        "discountedTotal": 11.74,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png"
                    },
                    {
                        "id": 62,
                        "title": "Ice Cube Tray",
                        "price": 5.99,
                        "quantity": 2,
                        "total": 11.98,
                        "discountPercentage": 8.25,
                        "discountedTotal": 10.99,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
                    },
                    {
                        "id": 132,
                        "title": "Samsung Galaxy S8",
                        "price": 499.99,
                        "quantity": 3,
                        "total": 1499.97,
                        "discountPercentage": 8.84,
                        "discountedTotal": 1367.37,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png"
                    }
                ],
                "total": 16775.87,
                "discountedTotal": 14144.3,
                "userId": 108,
                "totalProducts": 5,
                "totalQuantity": 13
            },
            {
                "id": 4,
                "products": [
                    {
                        "id": 187,
                        "title": "Golden Shoes Woman",
                        "price": 49.99,
                        "quantity": 5,
                        "total": 249.95000000000002,
                        "discountPercentage": 1.64,
                        "discountedTotal": 245.85,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png"
                    },
                    {
                        "id": 40,
                        "title": "Strawberry",
                        "price": 3.99,
                        "quantity": 5,
                        "total": 19.950000000000003,
                        "discountPercentage": 4.6,
                        "discountedTotal": 19.03,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png"
                    },
                    {
                        "id": 156,
                        "title": "Green and Black Glasses",
                        "price": 34.99,
                        "quantity": 5,
                        "total": 174.95000000000002,
                        "discountPercentage": 4.34,
                        "discountedTotal": 167.36,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png"
                    },
                    {
                        "id": 62,
                        "title": "Ice Cube Tray",
                        "price": 5.99,
                        "quantity": 2,
                        "total": 11.98,
                        "discountPercentage": 8.25,
                        "discountedTotal": 10.99,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
                    }
                ],
                "total": 456.83,
                "discountedTotal": 443.23,
                "userId": 87,
                "totalProducts": 4,
                "totalQuantity": 17
            },
            {
                "id": 5,
                "products": [
                    {
                        "id": 108,
                        "title": "iPhone 12 Silicone Case with MagSafe Plum",
                        "price": 29.99,
                        "quantity": 2,
                        "total": 59.98,
                        "discountPercentage": 14.68,
                        "discountedTotal": 51.17,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
                    },
                    {
                        "id": 138,
                        "title": "Baseball Ball",
                        "price": 8.99,
                        "quantity": 5,
                        "total": 44.95,
                        "discountPercentage": 18.49,
                        "discountedTotal": 36.64,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/thumbnail.png"
                    },
                    {
                        "id": 157,
                        "title": "Party Glasses",
                        "price": 19.99,
                        "quantity": 2,
                        "total": 39.98,
                        "discountPercentage": 19.17,
                        "discountedTotal": 32.32,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png"
                    },
                    {
                        "id": 8,
                        "title": "Dior J'adore",
                        "price": 89.99,
                        "quantity": 3,
                        "total": 269.96999999999997,
                        "discountPercentage": 10.79,
                        "discountedTotal": 240.84,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
                    },
                    {
                        "id": 80,
                        "title": "Huawei Matebook X Pro",
                        "price": 1399.99,
                        "quantity": 5,
                        "total": 6999.95,
                        "discountPercentage": 9.99,
                        "discountedTotal": 6300.65,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
                    },
                    {
                        "id": 28,
                        "title": "Ice Cream",
                        "price": 5.49,
                        "quantity": 3,
                        "total": 16.47,
                        "discountPercentage": 10,
                        "discountedTotal": 14.82,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
                    }
                ],
                "total": 7431.3,
                "discountedTotal": 6676.44,
                "userId": 134,
                "totalProducts": 6,
                "totalQuantity": 20
            },
            {
                "id": 6,
                "products": [
                    {
                        "id": 172,
                        "title": "Blue Women's Handbag",
                        "price": 49.99,
                        "quantity": 5,
                        "total": 249.95000000000002,
                        "discountPercentage": 8.08,
                        "discountedTotal": 229.75,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png"
                    },
                    {
                        "id": 112,
                        "title": "TV Studio Camera Pedestal",
                        "price": 499.99,
                        "quantity": 3,
                        "total": 1499.97,
                        "discountPercentage": 15.69,
                        "discountedTotal": 1264.62,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png"
                    },
                    {
                        "id": 97,
                        "title": "Rolex Datejust",
                        "price": 10999.99,
                        "quantity": 3,
                        "total": 32999.97,
                        "discountPercentage": 10.58,
                        "discountedTotal": 29508.57,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png"
                    },
                    {
                        "id": 128,
                        "title": "Realme C35",
                        "price": 149.99,
                        "quantity": 3,
                        "total": 449.97,
                        "discountPercentage": 3.97,
                        "discountedTotal": 432.11,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png"
                    }
                ],
                "total": 35199.86,
                "discountedTotal": 31435.05,
                "userId": 150,
                "totalProducts": 4,
                "totalQuantity": 14
            },
            {
                "id": 7,
                "products": [
                    {
                        "id": 167,
                        "title": "300 Touring",
                        "price": 28999.99,
                        "quantity": 5,
                        "total": 144999.95,
                        "discountPercentage": 11.78,
                        "discountedTotal": 127918.96,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png"
                    },
                    {
                        "id": 111,
                        "title": "Selfie Stick Monopod",
                        "price": 12.99,
                        "quantity": 4,
                        "total": 51.96,
                        "discountPercentage": 10.98,
                        "discountedTotal": 46.25,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png"
                    },
                    {
                        "id": 129,
                        "title": "Realme X",
                        "price": 299.99,
                        "quantity": 2,
                        "total": 599.98,
                        "discountPercentage": 10.13,
                        "discountedTotal": 539.2,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png"
                    }
                ],
                "total": 145651.89,
                "discountedTotal": 128504.41,
                "userId": 86,
                "totalProducts": 3,
                "totalQuantity": 11
            },
            {
                "id": 8,
                "products": [
                    {
                        "id": 117,
                        "title": "Sportbike Motorcycle",
                        "price": 7499.99,
                        "quantity": 2,
                        "total": 14999.98,
                        "discountPercentage": 19.83,
                        "discountedTotal": 12025.48,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png"
                    },
                    {
                        "id": 18,
                        "title": "Cat Food",
                        "price": 8.99,
                        "quantity": 4,
                        "total": 35.96,
                        "discountPercentage": 1.15,
                        "discountedTotal": 35.55,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
                    },
                    {
                        "id": 105,
                        "title": "Apple MagSafe Battery Pack",
                        "price": 99.99,
                        "quantity": 5,
                        "total": 499.95,
                        "discountPercentage": 7.14,
                        "discountedTotal": 464.25,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png"
                    },
                    {
                        "id": 6,
                        "title": "Calvin Klein CK One",
                        "price": 49.99,
                        "quantity": 3,
                        "total": 149.97,
                        "discountPercentage": 5.67,
                        "discountedTotal": 141.47,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
                    }
                ],
                "total": 15685.86,
                "discountedTotal": 12666.75,
                "userId": 23,
                "totalProducts": 4,
                "totalQuantity": 14
            },
            {
                "id": 9,
                "products": [
                    {
                        "id": 178,
                        "title": "Corset Leather With Skirt",
                        "price": 89.99,
                        "quantity": 2,
                        "total": 179.98,
                        "discountPercentage": 12.59,
                        "discountedTotal": 157.32,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png"
                    },
                    {
                        "id": 191,
                        "title": "Rolex Cellini Moonphase",
                        "price": 15999.99,
                        "quantity": 4,
                        "total": 63999.96,
                        "discountPercentage": 3.26,
                        "discountedTotal": 61913.56,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png"
                    },
                    {
                        "id": 47,
                        "title": "Table Lamp",
                        "price": 49.99,
                        "quantity": 2,
                        "total": 99.98,
                        "discountPercentage": 13.74,
                        "discountedTotal": 86.24,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png"
                    },
                    {
                        "id": 134,
                        "title": "Vivo S1",
                        "price": 249.99,
                        "quantity": 5,
                        "total": 1249.95,
                        "discountPercentage": 5.64,
                        "discountedTotal": 1179.45,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png"
                    }
                ],
                "total": 65529.87,
                "discountedTotal": 63336.57,
                "userId": 194,
                "totalProducts": 4,
                "totalQuantity": 13
            },
            {
                "id": 10,
                "products": [
                    {
                        "id": 190,
                        "title": "IWC Ingenieur Automatic Steel",
                        "price": 4999.99,
                        "quantity": 5,
                        "total": 24999.949999999997,
                        "discountPercentage": 12.34,
                        "discountedTotal": 21914.96,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png"
                    },
                    {
                        "id": 94,
                        "title": "Longines Master Collection",
                        "price": 1499.99,
                        "quantity": 3,
                        "total": 4499.97,
                        "discountPercentage": 16.44,
                        "discountedTotal": 3760.17,
                        "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png"
                    }
                ],
                "total": 29499.92,
                "discountedTotal": 25675.13,
                "userId": 160,
                "totalProducts": 2,
                "totalQuantity": 8
            }
        ])
    }

}