const initialStore = {
    shopProduct: [
        {
            id:1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },

        {
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
        },
        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 3500,
            countInStock: 2,
            rating: 2,
            image: 'https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7028878612.jpg'
        },
        {
            id:5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4400,
            countInStock: 2,
            rating: 1,
            image: 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty778/product/media/images/20230315/14/303988486/884804385/2/2_org_zoom.jpg'
        },
        {
            id:6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:7,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 6000,
            countInStock: 2,
            rating: 4,
            image: 'https://cdn.dsmcdn.com/ty778/product/media/images/20230315/16/304077641/886784003/1/1_org_zoom.jpg'
        },
        {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 3700,
            countInStock: 2,
            rating: 1,
            image: 'https://cdn.dsmcdn.com/ty876/product/media/images/20230511/14/345543537/932989570/3/3_org_zoom.jpg'
        },
        {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 3,
            image: 'https://cdn.dsmcdn.com/ty1331/product/media/images/prod/QC/20240525/16/c7a5d158-27f1-39c2-9a3e-638a430934ce/1_org_zoom.jpg'
        }, 
        {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 8800,
            countInStock: 2,
            rating: 4,
            image: 'https://cdn.dsmcdn.com/ty816/product/media/images/20230407/12/319907080/905209873/3/3_org_zoom.jpg'
        },
         {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5500,
            countInStock: 2,
            rating: 3,
            image: 'https://cdn.dsmcdn.com/ty1335/product/media/images/prod/QC/20240529/02/9d2b3ba8-06f4-323b-9cc2-b48dd04c3a26/1_org_zoom.jpg'
        }, 
        {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 5,
            image: 'https://cdn.dsmcdn.com/ty1176/product/media/images/prod/SPM/PIM/20240221/13/e4c8cae7-ed1c-3ba8-8216-4925442ab7b3/1_org_zoom.jpg'
        },

    ],
   shopDetails: {}
}

export const Reduser = (state = initialStore, action) => {
  switch (action.type) {
    case "":
        return {...state}
        default:
            return state
  }
}