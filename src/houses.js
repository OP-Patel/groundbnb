const houses = [
    {
        id: 1,
        houseLocation: "Innisfil, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/monet/Luxury-736940503519190941/original/58f4ad42-a9e9-4a28-8518-3a9f2b91a558?im_w=720",
        rentTime: "Sep. 19 — 24",
        rating: 5.0, 
        cost: 4123,
        description: {
            baths: 7,
            bedrooms: 7, 
            guests: 16
        } 
    }, 
    {
        id: 2,
        houseLocation: "Galesburg, US",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-16024637/original/1b25154f-2d74-4d4e-aa5a-b483aed1aa95.jpeg?im_w=720",
        rentTime: "Sep. 9 — 14",
        rating: 4.97, 
        cost: 929,
        description: {
            baths: 2,
            bedrooms: 3, 
            guests: 5
        } 
    }, 
    {
        id: 3,
        houseLocation: "Bowmanville, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-53007094/original/44718ff3-8e3e-4095-a867-aa9a46cf4873.jpeg?im_w=720",
        rentTime: "Oct. 1 — 6",
        rating: 4.88, 
        cost: 367,
        description: {
            baths: 2,
            bedrooms: 5, 
            guests: 9
        } 
    }, 
    {
        id: 4,
        houseLocation: "Lowbanks, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-813353726734847064/original/bf0d1464-0a12-4c47-b72d-d5a0554a748b.png?im_w=720",
        rentTime: "Sep. 4 — 9",
        rating: 4.78, 
        cost: 329,
        description: {
            baths: 4,
            bedrooms: 4, 
            guests: 6
        } 
    }, 
    {
        id: 5,
        houseLocation: "Erin, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-647970806267552103/original/02859c71-4ba0-405a-bf31-6ccf9f18f8ff.jpeg?im_w=720",
        rentTime: "Sep. 10 — 15",
        rating: 4.93, 
        cost: 260,
        description: {
            baths: 1,
            bedrooms: 2, 
            guests: 4
        } 
    }, 
    {
        id: 6,
        houseLocation: "Hamilton, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/053a408d-3b32-4fa6-b846-2c7b024f9270.jpg?im_w=720",
        rentTime: "Sep. 10 — 15",
        rating: 4.96, 
        cost: 343,
        description: {
            baths: 2,
            bedrooms: 3, 
            guests: 6
        } 
    }, 
    {
        id: 7,
        houseLocation: "Toronto, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/94031618/dde045e4_original.jpg?im_w=720",
        rentTime: "Sep. 29 — Oct. 4",
        rating: 4.9, 
        cost: 173,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 2
        } 
    }, 
    {
        id: 8,
        houseLocation: "Hamilton, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/053a408d-3b32-4fa6-b846-2c7b024f9270.jpg?im_w=720",
        rentTime: "Sep. 10 — 15",
        rating: 4.96, 
        cost: 343,
        description: {
            baths: 2,
            bedrooms: 3, 
            guests: 6
        } 
    }, 
    {
        id: 9,
        houseLocation: "Tiny, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-51844638/original/8b026fe7-ddeb-4c3e-b69a-94d816c37d05.jpeg?im_w=720",
        rentTime: "Sep. 4 — 9",
        rating: 4.81, 
        cost: 479,
        description: {
            baths: 2,
            bedrooms: 4, 
            guests: 8
        } 
    }, 
    {
        id: 10,
        houseLocation: "Arthur, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-729113094920911968/original/6381a20b-d869-4b1a-bb19-2af1d0bbabc4.jpeg?im_w=720",
        rentTime: "Nov. 19 — 24",
        rating: 4.99, 
        cost: 292,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 2
        } 
    }, 
    {
        id: 11,
        houseLocation: "Cambridge, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/88581493-452c-4a5c-8771-72cdf3bfded0.jpg?im_w=720",
        rentTime: "Sep. 11 — 16",
        rating: 4.94, 
        cost: 255,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 2
        } 
    }, 
    {
        id: 12,
        houseLocation: "Lakefield, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-27548604/original/e5758070-d55e-4204-bea8-070c34d6823d.jpeg?im_w=720",
        rentTime: "Nov. 20 — 25",
        rating: 4.95, 
        cost: 342,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 2
        } 
    }, 
    {
        id: 13,
        houseLocation: "Mississauga, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-944779854309855404/original/7a2d48ff-bfb2-4991-baf2-962829122869.jpeg?im_w=720",
        rentTime: "Sep. 1 — 6",
        rating: 5.0, 
        cost: 1573,
        description: {
            baths: 3,
            bedrooms: 2, 
            guests: 4
        } 
    }, 
    {
        id: 14,
        houseLocation: "Brampton, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-32403940/original/205b7295-6753-4e0c-baec-8668cef22728.jpeg?im_w=720",
        rentTime: "Dec. 21 — 26",
        rating: 4.91, 
        cost: 214,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 4
        } 
    }, 
    {
        id: 15,
        houseLocation: "Morin-Heights, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-762210224202432339/original/5cc7c219-68fe-4b60-be8e-44a370439721.jpeg?im_w=720",
        rentTime: "Jun. 1 — 6",
        rating: 5, 
        cost: 2477,
        description: {
            baths: 6,
            bedrooms: 5, 
            guests: 16
        } 
    }, 
    {
        id: 16,
        houseLocation: "Minesing, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-637175604247757338/original/dc92128c-b5c9-4064-9cd4-26a73d11b676.jpeg?im_w=720",
        rentTime: "Sep. 11 — 16",
        rating: 4.79, 
        cost: 218,
        description: {
            baths: 1,
            bedrooms: 1, 
            guests: 4
        } 
    }, 
    {
        id: 17,
        houseLocation: "Fort Erie, Canada",
        imageURL: "https://a0.muscache.com/im/pictures/3f37610e-5862-45ff-9606-03271d46a2ed.jpg?im_w=720",
        rentTime: "Sep. 11 — 16",
        rating: 4.88, 
        cost: 413,
        description: {
            baths: 2,
            bedrooms: 3, 
            guests: 8
        } 
    }, 
    {
        id: 18,
        houseLocation: "New Port, US",
        imageURL: "https://a0.muscache.com/im/pictures/miso/Hosting-51023151/original/aca27b32-f75c-4309-9925-f3834bee7706.jpeg?im_w=720",
        rentTime: "Sep. 4 — 9",
        rating: 4.97, 
        cost: 234,
        description: {
            baths: 1,
            bedrooms: 2, 
            guests: 6
        } 
    }
]

export default houses; 