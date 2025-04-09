import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, message, Popconfirm, Table } from "antd";
import { DeleteFilled, EditFilled, WarningFilled } from "@ant-design/icons";

const ListProduct = () => {
  const { data } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data: products } = await axios.get(
          "http://localhost:3000/products"
        );
        return products;
      } catch (error) {
        return [];
      }
    },
  });
  const nav = useNavigate();
  const queryclient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      message.success("Xoa thanh cong");
      queryclient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const DelProduct = (id: number) => {
    mutation.mutate(id);
  };
  const columns = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Anh san pham",
      dataIndex: "images",
      key: "images",
      render: (image: string) => <img src={image} width={90} />,
    },
    {
      title: "Gia san pham",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Danh muc san pham",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id: number) => {
        return (
          <>
            <Button
              className="mr-2"
              type="primary"
              onClick={() => nav(`/dashboard/product/edit/${id}`)}
            >
              <EditFilled /> Sửa
            </Button>
            <Popconfirm
              title="Thông báo"
              icon={<WarningFilled />}
              description="Bạn thực sự muốn xóa sản phẩm này?"
              onConfirm={() => DelProduct(id)}
              okText="Đồng ý xóa"
              cancelText="Hủy"
            >
              <Button danger>
                <DeleteFilled /> Xóa
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <h1 className="text-[2rem] text-center mb-5">Danh sách sản phẩm</h1>
      {data && (
        <Table dataSource={data} columns={columns} rowKey={(data) => data.id} />
      )}
    </div>
  );
};

export default ListProduct;
