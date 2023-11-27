import api from "../../../api";
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
import { useNavigate } from "react-router-dom";
// core components


const RegisterLab = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [local, setLocal] = useState('');

  const submit = () => {

    const data = {
      name: name,
      local: local,
    };

    //Cadastra o laboratório
    api.post('/laboratories', data)
      .then((response) => {
        toast.success('Laboratório cadastrado com sucesso!');
        navigate('/admin/lab')
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
                      <h3 className="mb-0">Cadastrar Laboratório</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informações do Laboratório
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nome de Laboratório
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Nome"
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
                              htmlFor="input-local"
                            >
                              Local do Laboratório
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-local"
                              placeholder="Local"
                              value={local}
                              onChange={(e) => setLocal(e.target.value) /*Mantém a variável local sempre atualizada e condizente com o digitado*/}
                              type="text"
                            />
                          </FormGroup>
                        </Col>

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

export default RegisterLab;
