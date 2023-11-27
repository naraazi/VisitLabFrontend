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


const RegisterVisit = () => {
  const navigate = useNavigate();

  const [allLabs, setAllLabs] = useState([]);
  const [lab, setLab] = useState({ value: '', name: '' });


  const [visitorName, setVisitorName] = useState('');
  const [visitorDocument, setVisitorDocument] = useState('');

  useEffect(() => {
    api.get('laboratories')
      .then((response) => {
        const data = response.data.map((role) => ({
          value: role.id,
          name: role.name
        }));

        setAllLabs(data);
        if (data.length > 0)
          setLab(null);
      })
      .catch((error) => {
        toast.error('O sistema apresentou um erro ao listar as visitas.')
      })
  }, []);


  const submit = () => {

    const data = {
      laboratory_id: lab,
      visitor_name: visitorName,
      visitor_document: String(visitorDocument),
    };

    //Cadastra o laboratório
    api.post('/visits', data)
      .then((response) => {
        toast.success('Laboratório cadastrado com sucesso!');
        navigate('/admin/visits')
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
                      <h3 className="mb-0">Cadastrar Visita</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informações da Visita
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Nome do Visitante
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              value={visitorName}
                              onChange={(e) => setVisitorName(e.target.value) /*Mantém a variável visitorName sempre atualizada e condizente com o digitado*/}
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
                              Documento do Visitante
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-local"
                              value={visitorDocument}
                              onChange={(e) => setVisitorDocument(e.target.value) /*Mantém a variável visitorDocument sempre atualizada e condizente com o digitado*/}
                              type="text"
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Laboratório
                            </label>

                            <Input
                              type={"select"}
                              size="1"
                              value={lab}
                              onChange={(e) => setLab(e.target.value) /*Mantém a variável role sempre atualizada e condizente com o digitado*/}
                            >
                            <option>Selecione</option>
                              {
                                allLabs.map((item) => (
                                  <option key={item.value} value={item.value}>{item.name}</option>
                                ))
                              }
                            </Input>
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

export default RegisterVisit;
