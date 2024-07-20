import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BacketProduct from "../BacketProduct";
import empty from "../../assets/image/empty_cart.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";
import load from "../../assets/image/loading.svg";
import { FcOk } from "react-icons/fc";

const Backet = () => {
  const { backet } = useSelector((s) => s);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("+996");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [success, setSuccess] = useState(false);

  const errorMessage = (messege) => {
    toast.error(messege, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const formSumbit = () => {
    const my_id = `1501699577`;
    const token = `7207814575:AAEiJeabSV_7zMSzFNQO_mA3zJ26h_9TXBQ`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    if (
      userName.trim() === "" ||
      userAddress.trim() === "" ||
      userPhone.trim() === ""
    ) {
      errorMessage("Заполните пустые ячейки!");
    } else {
      let newOrder = {
        chat_id: my_id,
        parse_model: "html",
        text: `order:
    name: ${userName},
    address: ${userAddress},
    phone: ${userPhone}
    `,
      };
      
      setTimeout(() => {
        axios.post(url_api, newOrder);
        setLoading(false);
        setSuccess(true);
      }, 2000);
      setLoading(true);
      setModalText(true);
      setUserName("");
      setUserAddress("");
      setUserPhone("+996");
    }
  };

  const openModal = () => {
    if (
      userName.trim() === "" ||
      userAddress.trim() === "" ||
      userPhone.trim() === ""
    ) {
      errorMessage("Заполните пустые ячейки!");
    } else {
      setModal(true);
    }
  };

  const resetState = () => {
    setLoading(false);
    setModalText(false);
    setSuccess(false);
  };

  const totalPrice = backet.reduce((acc, el) => {
    let sale = el.price > 3000 ? el.price - (el.price / 100) * 20 : el.price;
    return acc + +sale * el.quantity;
  }, 0);
  
  useEffect(() => {
    resetState();
  }, [modal]);
  return (
    <div className="my-[40px]">
      <div className="container">
        {backet.length ? (
          <div className="flex justify-between items-start relative">
            <div className="">
              <div class="relative  shadow-md sm:rounded-lg overflow-x-scroll h-[70vh]">
                <table class="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xl text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                      <th scope="col" class="px-16 py-3">
                        <span class="sr-only">Image</span>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Qty
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {backet.map((el, idx) => (
                      <BacketProduct el={el} key={el.id} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className=" flex items-center justify-between mt-[30px]">
                <h1 className="text-[40px] font-bold">
                  Total price: {totalPrice} com
                </h1>

                <button
                  onClick={() => dispatch({ type: "REMOVE_ALL" })}
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Remove All
                </button>
              </div>
            </div>

            <div className="w-[37%]  flex items-center justify-center flex-col gap-3">
              <h1 className="text-[25px]  font-bold text-black">
                Оформление заказа:
              </h1>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  User Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserAddress(e.target.value)}
                  value={userAddress}
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  User Address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserPhone(e.target.value)}
                  value={userPhone}
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  User Phone
                </label>
              </div>
              <h1 className="text-[20px] font-medium">
                <i>Ваш заказ будет отправлен в телеграмм...</i>
              </h1>
              <button
                onClick={() => openModal()}
                className="text-[20px] font-bold px-[50px] py-[6px] rounded-[10px] bg-transparent border-2 border-blue-900">
                Оформить
              </button>
              <ToastContainer />
            </div>

            {modal ? (
              <div className="absolute top-[10%] left-[28%] z-30 bg-black  text-white w-[570px] h-[360px] rounded-[20px]  flex items-center justify-center flex-col gap-4">
                <a
                  onClick={() => setModal(false)}
                  className="absolute top-[10px] right-[10px] text-[30px] cursor-pointer">
                  <IoMdClose />
                </a>
                {!modalText ? (
                  <div className="flex items-center justify-center flex-col gap-5">
                    <h1 className="text-[35px] font-medium">
                      Проверьте данные:
                    </h1>
                    {userName ? (
                      <h1 className="text-[20px]">
                        {userName}, {userAddress}, {userPhone}
                      </h1>
                    ) : null}
                    <button
                      onClick={() => formSumbit()}
                      className="text-[20px] font-bold px-[50px] py-[6px] rounded-[10px] bg-transparent border-2 border-blue-900">
                      Подтвердить
                    </button>
                  </div>
                ) : null}
                {loading ? <img src={load} alt="loading" width={140} /> : null}
                {success ? (
                  <div className="flex items-center flex-col">
                    <a className="text-[200px]">
                      <FcOk />
                    </a>
                    <h1 className="text-[20px] font-bold">
                      Продукт успешно отправлен
                    </h1>
                  </div>
                ) : null}
              </div>
            ) : null}
            {/* /MODAL_BG */}
            {modal ? (
              <div
                onClick={() => setModal(false)}
                className="absolute top-0 left-0 bg-[#ffffff9a] w-[100%] h-[80vh]  "></div>
            ) : null}
          </div>
        ) : (
          <div className="flex items-center justify-center w-[50%]  mx-auto">
            <img src={empty} alt="" className="w-[90%]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Backet;
