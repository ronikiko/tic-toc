import React from "react";
import './style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StartPage from './components/StartPage'

import { Container } from 'react-bootstrap'
export default () => (
    <Container>
        <Row className="justify-content-md-center">
            <Col className="bord-center">
                <StartPage />
            </Col>
        </Row>
    </Container>
);
