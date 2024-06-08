// Instead of calling a real API, we Simulate a successful response with mock data
import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("https://dummyjson.com/products/search", () => {
    return HttpResponse.json({
      products: [
        {
          id: 7,
          title: "Chanel Coco Noir Eau De",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
        {
          id: 9,
          title: "Dolce Shine Eau de",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
        {
          id: 31,
          title: "Gucci Bloom Eau de",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
        {
          id: 88,
          title: "Nike Air Jordan 1 Red And Black",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
        {
          id: 10,
          title: "Apple HomePod Mini Cosmic Grey",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
        {
          id: 19,
          title: "Olay Ultra Moisture Butter Body Wash",
          price: 139,
          images: ["https://dummyimage.com/24x24/000/fff"],
        },
      ],
    });
  }),
];
