import api from "../../api";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { toast } from "react-toastify";


const Register = () => {
  const [name, setName] = useState('');
  const [showSelectLaboratory, setShowSelectLaboratory] = useState(false);

  const [lab, setLab] = useState({ value: '', name: '' });


  const [allLabs, setAllLabs] = useState([]);
  const [allRoles, setAllRoles] = useState([]); //Lista de todos os roles disponíveis
  const [role, setRole] = useState({ value: '', name: '' }); //Armazena o value do role selecionado

  useEffect(() => {
    api.get('/roles')
      .then((response) => {
        //Cada index desse array é um objeto que contém dois atributos
        //name -> opção mostrada para o usuário
        //value -> valor que será enviado para a API e utilizada no componente select

        const data = response.data.map((role) => {
          return ({
            value: role.id,
            name: role.name
          })
        });

        setAllRoles(data);

        if (data.length > 0)
          setRole(data[0].value);
      })

    api.get('laboratories')
      .then((response) => {
        const data = response.data.map((role) => {
          return ({
            value: role.id,
            name: role.name
          })
        });

        setAllLabs(data);
        if (data.length > 0)
          setLab(data[0].value);
      })
      .catch((error) => {
        toast.error('O sistema apresentou um erro ao listar os laboratórios')
      })

  }, [])


  const submit = () => {

    const data = {
      login: name,
      role_id: parseInt(role), //Converte de String para inteiro '0' -> 0
      laboratory_id: parseInt(lab)
    };

    //Cadastra o usuario
    api.post('/pre-registrations', data)
      .then((response) => {
        toast.success('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        const message = error.response.data;
        toast.error(message || "Um erro desconhecido ocorreu");
      })

  }

  const handleChangeRole = (e) => {
    setRole(e.target.value);

    const role = allRoles.filter((r) => r.value === parseInt(e.target.value))[0];

    setShowSelectLaboratory(role.name === "monitor" || role.name === "professor");
  }


  return (
    <>
      {/* Page content */}
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Cadastrar Usuário</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <h6 className="heading-small text-muted mb-4">
                      Informações do Usuário
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nome de Usuário
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              value={name}
                              onChange={(e) => setName(e.target.value) /*Mantém a variável name sempre atualizada e condizente com o digitado*/}
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Rerfil
                            </label>

                            <Input
                              type={"select"}
                              size="1"
                              value={role}
                              onChange={handleChangeRole /*Mantém a variável role sempre atualizada e condizente com o digitado*/}
                            >
                              {
                                //Vetor allRoles criado dentro do select
                                allRoles.map((item) => (
                                  <option key={item.value} value={item.value}>{item.name}</option>
                                ))
                              }
                            </Input>
                          </FormGroup>
                        </Col>
                        {
                          showSelectLaboratory ?
                            <Col lg="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Laboratório
                                </label>

                                <Input
                                  type={"select"}
                                  size="1"
                                  value={lab}
                                  onChange={(e) => setLab(e.target.value) /*Mantém a variável lab sempre atualizada e condizente com o digitado*/}
                                >
                                  {
                                    allLabs.map((item) => (
                                      <option key={item.value} value={item.value}>{item.name}</option>
                                    ))
                                  }
                                </Input>
                              </FormGroup>
                            </Col> : false
                        }

                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                          <Button className="my-4" color="primary" type="button" onClick={submit}> {/*Chama a função submit ao clicar no botão */}
                            Cadastrar
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
