import api from "api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
} from "reactstrap";
// core components
import Table from "../../../components/Table/index.js";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

const ListVisit = () => {
  const navigate = useNavigate();

  const [visits, setVisits] = useState([]);

  useEffect(() => {
    api.get('/visits')
      .then((response) => {
        setVisits(response.data);
      })
      .catch((error) => {
        toast.error('O sistema apresentou um erro ao listar as visitas')
      })
  }, []);

  const columns = [
    {
      header: 'Visitando',
      id: 'name',
      size: 250,
      accessorKey: 'visitor_name'
    },
    {
      header: 'Documento',
      id: 'visitor_document',
      size: 200,
      accessorKey: 'visitor_document'
    },
    {
      header: 'Laboratório',
      id: 'laboratory',
      size: 200,
      accessorFn: (row) => <span>{row.laboratory?.name}</span>
    },
    {
      header: 'Sair',
      id: 'exit',
      size: 100,
      enableColumnActions: false,
      muiTableBodyCellProps: {
        align: 'center',
      },
      accessorFn: (row) =>
        row.out_at ? <span>Liberado</span> :
          <div onClick={() => handleResponse(row)} style={{ color: 'white', cursor: 'pointer' }}> <IoLogOut size={25} color='#e93445' /></div >
    }
  ];

  const handleResponse = (e) => {
    api.patch(`/visits/${e.id}`)
      .then((response) => {

        const newData = visits.map((item) => {
          if (e.id === item.id)
            return { ...item, out_at: true }
          return item;
        })

        setVisits(newData);
        toast.success(`O estudante ${e.visitor_name} saiu do laboratório ${e.laboratory?.name}`);
      })
      .catch((error) => {
        const message = error.response.data?.message;
        toast.error(message || "Um erro desconhecido ocorreu");
      })
  }

  return (
    <div style={{ padding: 39 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        <Button color="primary" onClick={() => navigate('/admin/register-visit')}>
          <IoAddOutline color={"#fff"} size={20} />
        </Button>
      </div>

      <Table
        columns={columns}
        data={visits}
      />
    </div>
  );
};

export default ListVisit;
