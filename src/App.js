import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Background from "./assets/Banner.png"
import Header from "./components/Header"
import Chat from "./components/Chat"

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100vh",
        height: "100vh"
      }}
    >
      <Header />

      <Container>
        <Row>
          <Col sm="1" md="1" lg="1">
            <div className="text-light font-weight-bolder display-3 mt-4">
              Where words fail, Music speaks.
            </div>
          </Col>
          <Col sm="11" md="11" lg="11" />
        </Row>
      </Container>

      <Chat />
    </div>
  )
}

export default App
