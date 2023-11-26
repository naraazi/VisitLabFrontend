import api from "api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
} from "reactstrap";
import Table from "../../../components/Table/index.js";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdVerified } from 'react-icons/md';
import { TiDelete } from "react-icons/ti";

const OPTIONS_STATUS = {
  'p': "Pendente",
  'a': "Aceito",
  'r': "Rejeitado"
};

const ListPreRegistration = () => {
  const navigate = useNavigate();

  const [preRegistrations, setPreRegistrations] = useState([]);

  const isAdmin = true;

  useEffect(() => {
    api.get('/pre-registrations/my')
      .then((response) => {
        setPreRegistrations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        const message = error.response.data?.message;
        toast.error(message || "O sistema apresentou um erro ao listar os pré registros");
      })
  }, []);

  const columns = [
    {
      header: 'Login',
      id: 'login',
      size: 250,
      accessorKey: 'login'
    },
    {
      header: 'Status',
      id: 'status',
      size: 200,
      accessorFn: (row) => `${OPTIONS_STATUS[row.status]}`
    },
    {
      header: 'Perfil',
      id: 'role',
      size: 200,
      accessorFn: (row) => `${row.role.name}`
    },
    {
      header: 'Laboratório',
      id: 'laboratory',
      size: 200,
      accessorFn: (row) => `${row.laboratory?.name || ""}`
    },
    {
      header: null,
      id: 'accept',
      size: 50,
      enableColumnActions: false,
      muiTableBodyCellProps: {
        align: 'center',
      },
      accessorFn: (row) =>
        row.status === "a" ? <span>Aceito</span> :
          row.status === "r" ? <span>Rejeitado</span> :
            <div onClick={() => handleResponse(row, true)} style={{ color: 'white', cursor: 'pointer' }}> <MdVerified size={25} color='#32ba7c' /></div>
    },
    {
      header: null,
      id: 'reject',
      size: 50,
      enableColumnActions: false,
      muiTableBodyCellProps: {
        align: 'center',
      },
      accessorFn: (row) =>
        row.status === "p" ?
          < div onClick={() => handleResponse(row, false)} style={{ color: 'white', cursor: 'pointer' }}> <TiDelete size={33} color='#e93445' /></div > : false
    }
  ];

  const handleResponse = (e, r) => {
    api.patch(`/pre-registrations/${e.id}`, { response: r })
      .then((response) => {
        toast.success('Pré registro aceito com sucesso');
      })
      .catch((error) => {
        const message = error.response.data?.message;
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
        data={preRegistrations}
      />
    </div>
  );
};

export default ListPreRegistration;
