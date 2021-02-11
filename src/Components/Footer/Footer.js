import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../Style/Footer.css';

export default function Footer() {
    return (
        <Container className="themed-container" fluid >
            <Row>
                <Col sm={4}>
                    <h2>About</h2>
                    <p> This is a personal web for practicing and learning </p>
                </Col>
                <Col sm={4}>
                    <h2>Bookmarks</h2>
                    <ul>
                        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Reactjs.org</a></li>
                        <li><a href="https://spring.io/" target="_blank" rel="noopener noreferrer">Spring Boot offical</a></li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                    </ul>
                </Col>
                <Col sm={4}>
                    <h2>Others</h2>
                </Col>
            </Row>   
        </Container> 
    )
}
