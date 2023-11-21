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

  //Lista de todos os roles disponíveis
  const [allRoles, setAllRoles] = useState([]);
  //Armazenar o value do role selecionado 
  const [role, setRole] = useState({ value: '', name: '' });

  useEffect(() => {
    //Busca a lista de roles disponíveis
    api.get('/role')
      .then((response) => {
        //Array de opções de perfis -> cada índice é um objeto, esse objeto contém dois atributos
        //name -> mostrada para o usuário
        //value -> valor bruto para a API e utilizada no select

        const data = response.data.map((role) => {
          return ({
            value: role.id,
            name: role.name
          })
        });

        setAllRoles(data);

        //Primeiro role como opção padrão
        if (data.length > 0)
          setRole(data[0].value);
      })

  }, [])


  const submit = () => {

    const data = {
      login: name,
      role_id: parseInt(role), //Conversão de string para inteiro '0' -> 0
    };

    //Cadastra o usuario
    api.post('/pre-registration', data)
      .then((response) => {
        toast.success('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        const message = error.response.data;
        toast.error(message || "Um erro desconhecido ocorreu");
      })

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
                  <Form>
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
                              onChange={(e) => setRole(e.target.value) /*Mantém a variável role sempre atualizada e condizente com o digitado*/}
                            >
                              {
                                allRoles.map((item) => (
                                  <option key={item.value} value={item.value}>{item.name}</option>
                                ))
                              }
                            </Input>
                          </FormGroup>
                        </Col>

                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                          <Button className="my-4" color="primary" type="button" onClick={submit}> {/* chama a função submit ao clicar no botão */}
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
