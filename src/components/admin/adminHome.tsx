import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table,  } from "antd";

const AdminHome = () => {
  const { data: products,  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });

  const { data: categories,  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/categories");
      return data;
    },
  });

  const productColumns = [
    { title: "STT", 
      key: "stt",
      render: (_: any, __: any, index: number) => index + 1
     },

    { title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name" 
      },
    { title: "Ảnh sản phẩm", 
      dataIndex: "images", 
      key: "images", 
      render: (img: string) => <img src={img} width={80} /> 
    },
    { title: "Giá",
      dataIndex: "price",
     key: "price" 
    },
  ];

  const categoryColumns = [
    { title: "STT", 
      key: "stt", 
      render: (_: any, __: any, index: number) => index + 1 
    },
    { title: "Tên danh mục", 
      dataIndex: "name", 
      key: "name" 
    },
    { title: "Ảnh danh mục", 
      dataIndex: "images", 
      key: "images", render: (img: string) => <img src={img} width={80} /> 
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center mb-5"> Trang Quản Trị</h1>

    

      {products && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3 "> Danh sách sản phẩm</h2>
          <Table dataSource={products} columns={productColumns} rowKey={(record) => record.id} />
        </div>
      )}

      {categories && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Danh sách danh mục</h2>
          <Table dataSource={categories} columns={categoryColumns} rowKey={(record) => record.id} />
        </div>
      )}
    </div>
  );
};

export default AdminHome;
