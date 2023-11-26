import api from "api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
} from "reactstrap";
import Table from "../../../components/Table/index.js";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ListLab = () => {
  const navigate = useNavigate();

  const [labs, setLabs] = useState([]);

  const isAdmin = true;

  useEffect(() => {
    api.get('laboratories')
      .then((response) => {
        setLabs(response.data);
      })
      .catch((error) => {
        toast.error('O sistema apresentou um erro ao listar os laboratórios')
      })
  }, []);

  const columns = [
    {
      header: 'Nome',
      id: 'name',
      size: 250,
      accessorKey: 'name'
    },
    {
      header: 'Local',
      id: 'local',
      size: 200,
      accessorKey: 'local'
    }
  ];

  const handleDelete = (e) => {
    api.delete(`/laboratories/${e.id}`)
      .then((response) => {
        setLabs(labs.filter(lab => lab.id !== e.id));

        toast.success('Laboratório deletado com sucesso!');
      })
      .catch((error) => {
        const message = error.response.data;
        toast.error(message || "Um erro desconhecido ocorreu");
      })
  }

  const handleEdit = (e) => {
    navigate('/admin/edit-lab/' + e.id)
  }

  return (
    <div style={{ padding: 39 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        <Button color="primary" onClick={() => navigate('/admin/register-lab')}>
          <IoAddOutline color={"#fff"} size={20} />
        </Button>
      </div>

      <Table
        columns={columns}
        data={labs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        canEdit={(e) => isAdmin}
        canDelete={(e) => isAdmin}
      />
    </div>
  );
};

export default ListLab;
