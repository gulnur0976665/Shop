const initialStore = {
  shopProduct: [
    {
      id: 1,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 40,
      countInStock: 2,
      rating: 4,
      image:
        "https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg",
    },

    {
      id: 2,
      title: "The Select Moscow ",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 23,
      countInStock: 2,
      rating: 3,
      image: "https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg",
    },
    {
      id: 3,
      title: "A-A Awesome Apparel ",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 90,
      countInStock: 2,
      rating: 5,
      image:
        "https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg",
    },
    {
      id: 4,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 35,
      countInStock: 2,
      rating: 2,
      image: "https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7028878612.jpg",
    },
    {
      id: 5,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 44,
      countInStock: 2,
      rating: 1,
      image:
        "https://cdn.dsmcdn.com/mnresize/1200/1800/ty778/product/media/images/20230315/14/303988486/884804385/2/2_org_zoom.jpg",
    },
    {
      id: 6,
      title: "Jolifashn",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 20,
      countInStock: 2,
      rating: 3,
      image:
        "https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg",
    },
    {
      id: 7,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 60,
      countInStock: 2,
      rating: 4,
      image:
        "https://cdn.dsmcdn.com/ty778/product/media/images/20230315/16/304077641/886784003/1/1_org_zoom.jpg",
    },
    {
      id: 8,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 37,
      countInStock: 2,
      rating: 1,
      image:
        "https://cdn.dsmcdn.com/ty876/product/media/images/20230511/14/345543537/932989570/3/3_org_zoom.jpg",
    },
    {
      id: 9,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 49,
      countInStock: 2,
      rating: 3,
      image:
        "https://cdn.dsmcdn.com/ty1331/product/media/images/prod/QC/20240525/16/c7a5d158-27f1-39c2-9a3e-638a430934ce/1_org_zoom.jpg",
    },
    {
      id: 10,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 88,
      countInStock: 2,
      rating: 4,
      image:
        "https://cdn.dsmcdn.com/ty816/product/media/images/20230407/12/319907080/905209873/3/3_org_zoom.jpg",
    },
    {
      id: 11,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 56,
      countInStock: 2,
      rating: 3,
      image:
        "https://cdn.dsmcdn.com/ty1335/product/media/images/prod/QC/20240529/02/9d2b3ba8-06f4-323b-9cc2-b48dd04c3a26/1_org_zoom.jpg",
    },
    {
      id: 12,
      title: "Love Republic",
      description: "Вискоза - 80%, Полиэстер - 20%",
      price: 88,
      countInStock: 2,
      rating: 5,
      image:
        "https://cdn.dsmcdn.com/ty1176/product/media/images/prod/SPM/PIM/20240221/13/e4c8cae7-ed1c-3ba8-8216-4925442ab7b3/1_org_zoom.jpg",
    },
  ],
  search: [],
  backet: JSON.parse(localStorage.getItem("backet")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  kurs: 1,
};

export const Reduser = (state = initialStore, action) => {
  switch (action.type) {
    case "":
      return { ...state };
    case "SORT_PRODUCT":
      if (action.payload === "cheap") {
        let cheap = state.shopProduct.sort((a, b) => a.price - b.price);
        return {
          ...state,
          shopProduct: cheap,
        };
      } else if (action.payload === "expensive") {
        let expensive = state.shopProduct.sort((a, b) => b.price - a.price);
        return {
          ...state,
          shopProduct: expensive,
        };
      } else if (action.payload === "1-5") {
        let rating1 = state.shopProduct.sort((a, b) => a.rating - b.rating);
        return {
          ...state,
          shopProduct: rating1,
        };
      } else if (action.payload === "5-1") {
        let rating5 = state.shopProduct.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          shopProduct: rating5,
        };
      }
    case "SEARCH":
      state.search = state.shopProduct.filter((el) =>
        el.title.includes(action.payload)
      );
      return { ...state, search: state.search };
    case "ADD_TO_BACKET":
      action.payload.quantity = 1;
      let bac = [...state.backet, action.payload];
      localStorage.setItem("backet", JSON.stringify(bac));
      return { ...state, backet: bac };

    case "REMOVE_ALL":
      localStorage.removeItem("backet");
      return { ...state, backet: [] };

    case "DELETE_BACKET":
      let filterBacket = state.backet.filter((el) => el.id !== action.payload);
      localStorage.setItem("backet", JSON.stringify(filterBacket));
      return { ...state, backet: filterBacket };

    case "INCREMENT_QUANTITY":
      let change = state.backet.map((el) => el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el);
      localStorage.setItem("backet", JSON.stringify(change));
      return { ...state,backet: change};
    case "DECREMENT_QUANTITY":
      let expensive = state.backet.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("backet", JSON.stringify(expensive));
      return {
        ...state,
        backet: expensive,
      };

    case "CREATE_FAVORITE":
      localStorage.setItem(
        "favorite",
        JSON.stringify([...state.favorite, action.payload])
      );
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "DELETE_FAVORITE":
      let deleteFavorite = state.favorite.filter(
        (fav) => fav.id !== action.payload
      );
      localStorage.setItem("favorite", JSON.stringify(deleteFavorite));
      return { ...state, favorite: deleteFavorite };
    case "FILTER_FAVORITE":
      return { ...state, favorite: action.payload };
    case "KURS_PRODUCT":
      if (action.payload === "dollar") {
        return { ...state, kurs: 1 };
      } else if (action.payload === "rub") {
        return { ...state, kurs: 90.44 };
      } else if (action.payload === "com") {
        return { ...state, kurs: 87.2 };
      }

    default:
      return state;
  }
};
