import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import axios from "axios";
import { API } from "../HomePage";
import { Link } from "react-router-dom";

type Props = {
  data: Product[];
};

const Products = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const getProduct = async () => {
    try {
      const { data } = await axios.get(API);
      setProduct(data);
    } catch (error) {}
  };
  useEffect(() => {
    getProduct();
  }, []);

  const checkId = async (id: string) => {
    const check = confirm("Bạn có muốn xóa không");
    if (check) {
      console.log(id);
      const { data } = await axios.delete(API + "/" + id);
      getProduct();
    }
  };
  return (
    <>
      <div className="  shadow-md h-full">
        <Link to="/admin/products/add">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-3"
          >
            Thêm Sản Phẩm
          </button>
        </Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <>
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title.substring(0, 28) + "..."}
                    </th>
                    <td className="px-6 py-4">
                      {item.description.substring(0, 28) + "..."}
                    </td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">
                      <img src={item.image} alt="" className="w-[50px]" />
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to={`/admin/products/${item._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      >
                        <button onClick={() => checkId(item._id)}>
                          Remove
                        </button>
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
