import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICate } from "../../../interface/category";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, message, Popconfirm, Table } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const CategoryList = () => {
  const { data } = useQuery<ICate[]>({
    queryKey: ["cate"],
    queryFn: async () => {
      try {
        const { data: cate } = await axios.get(
          " http://localhost:3000/categories"
        );
        return cate;
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
        await axios.delete(` http://localhost:3000/categories/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      message.success("Xoa thanh cong");
      queryclient.invalidateQueries({ queryKey: ["cate"] });
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
      title: "Ten danh muc",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Anh danh muc",
      dataIndex: "images",
      key: "images",
      render: (images: string) => <img src={images} width={90} />,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id: number) => (
        <>
          <Button
            className="mr-2"
            type="primary"
            onClick={() => nav(`/dashboard/category/edit/${id}`)}
          >
            <EditFilled />
            Sua
          </Button>
          <Popconfirm
            title="Xoa"
            description="Are you sure to delete this task?"
            onConfirm={() => DelProduct(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              <DeleteFilled />
              Xoa
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-[2rem text-center mb-5">Danh sách danh mục</h1>
      {data && (
        <Table dataSource={data} columns={columns} rowKey={(data) => data.id} />
      )}
    </div>
  );
};

export default CategoryList;
