import React from 'react'
import { Layout, Menu, Row, Col, Card, Button } from 'antd'
import Header from '../Components/Header'

function Landing(props){
    return (
        <div>
            <Layout>
                <Header />
                <Layout.Content>
                    <Row type="flex" justify="center" align="middle">
                        <Col span={6}>
                            <h1>lorem ipsum salesae ccc poasdasd</h1>
                        </Col>

                        <Col span={6}>
                            <Card style={{width: 300}}>
                                <div style={{textAlign: 'center'}}>
                                    <h1>¿Sos Parte de la comunidad?</h1>
                                </div>

                                <Row>
                                    
                                    <Col span={12}>
                                        <Button type="primary">
                                            Registrarse Ya
                                        </Button>
                                    </Col>
                                        
                                    <Col span={12}>
                                        <Button type="default">
                                            Loguearse
                                        </Button>
                                    </Col>
                                </Row>
                                {/* <Row type="flex" justify="center">
                                    <Col span={12}>
                                        <h1>¿Sos Parte de la comunidad?</h1>
                                    </Col>
                                    <Col span={12}>
                                        <Button type="primary">
                                            Registrarse Ya
                                        </Button>
                                    </Col>
                                        
                                    <Col span={12}>
                                        <Button type="default">
                                            Loguearse
                                        </Button>
                                    </Col>
                                </Row> */}
                            </Card>
                        </Col>
                    </Row>
                </Layout.Content>
                <Layout.Content style={{marginTop: 100, backgroundColor: '#111111', color: 'white'}}>
                <Row type="flex" justify="center" align="center">
                        <Col span={4}>Paso 1°</Col>
                        <Col span={4}>Paso 2°</Col>
                        <Col span={4}>Paso 31°</Col>
                    </Row>
                </Layout.Content>
            </Layout>
        </div>
    )
}

export default Landing