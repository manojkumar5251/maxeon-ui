import React from "react"
import { Card, Button, Form } from "react-bootstrap"
import classes from "./styles.module.css"
import ActionButtonImg from "../../assets/Sparrow Bird.png"
import FavIcon from "../../assets/favicon.png"

class Chat extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { open: false, startmsg: true, messages: [], message: "" }
  }

  recieveMsg = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => {
        res.json().then(data => {
          let messages = [...this.state.messages]
          messages.push({ type: "recieved", value: data.slip.advice })
          this.setState({ messages })
        })
      })
      .catch(err => console.log(err.response))
  }

  sendMsg = () => {
    let msg = this.state.message.trim()
    this.setState({ message: msg })

    if (msg === "") {
      return
    }

    let messages = [...this.state.messages]

    messages.push({ type: "sent", value: msg })
    this.setState({ messages })
    this.recieveMsg()
    this.setState({ message: "" })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.open && (
          <Card
            style={{
              maxWidth: "25rem",
              bottom: "6rem",
              right: "4rem"
            }}
            className="position-fixed ml-3 mr-n5 mr-sm-0 mb-n4 mb-sm-0"
          >
            <Card.Body className="px-3 pt-3 pb-0">
              <Card
                body
                className="border-0 rounded-lg text-white mb-3"
                style={{ backgroundColor: "#7F8AC5" }}
              >
                <Card.Title className="font-weight-bolder">Hi There</Card.Title>

                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {this.state.startmsg
                    ? "Hello Ask Us Anything. Share Your Feedback."
                    : "The team typically replies in a few minutes."}
                </Card.Text>
              </Card>

              {this.state.startmsg && (
                <Card className="px-4 px-sm-5 border-0">
                  <div
                    style={{ fontSize: "0.8rem" }}
                    className="font-weight-bold"
                  >
                    Start a Conversation.
                  </div>

                  <div style={{ fontSize: "0.7rem" }}>
                    The team typically replies in few minutes.
                  </div>

                  <Button
                    onClick={() => this.setState({ startmsg: false })}
                    className="d-flex align-items-center justify-content-center rounded-pill mt-2 mb-4 font-weight-bolder px-0 py-2 border-0"
                    style={{
                      fontSize: "0.85rem",
                      maxWidth: "12rem",
                      backgroundColor: "#13A884"
                    }}
                  >
                    New Conversation
                    <span className="ml-2 material-icons">send</span>
                  </Button>
                </Card>
              )}
            </Card.Body>

            {!this.state.startmsg && (
              <div>
                <div className={classes.Messages}>
                  <div className="m-0 px-3">
                    {this.state.messages.map((msg, i) => {
                      return (
                        <div
                          key={i}
                          className={
                            "mb-4 d-inline-flex w-100 align-items-end " +
                            (msg.type === "sent"
                              ? "justify-content-end text-white"
                              : "justify-content-start text-dark")
                          }
                        >
                          {msg.type === "recieved" && (
                            <div
                              className={classes.Thumbnail + " mr-2 mb-n2"}
                            />
                          )}
                          <Card
                            className={"px-3 py-2 rounded-lg border-0 "}
                            style={{
                              backgroundColor:
                                msg.type === "sent" ? "#4C5AA1" : "#ECF1FB",
                              fontSize: "0.8rem",
                              maxWidth: "75%"
                            }}
                          >
                            {msg.value}
                            <div
                              className={classes[msg.type + "MsgIndicator"]}
                            ></div>
                          </Card>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div
                  style={{ fontSize: "0.7rem" }}
                  className="text-center mb-2 text-secondary"
                >
                  <img
                    src={FavIcon}
                    alt=""
                    className="mr-2"
                    style={{ height: "15px", width: "15px" }}
                  />
                  we run on surveysparrow
                </div>

                <div style={{ height: "1.5px", backgroundColor: "grey" }} />

                <Card className="px-0 d-flex flex-row align-items-center border-0">
                  <Form.Control
                    as="textarea"
                    placeholder="Write a reply"
                    rows="1"
                    className="border-0 py-3"
                    value={this.state.message}
                    onKeyUp={e => {
                      e.keyCode === 13 && this.sendMsg()
                    }}
                    onChange={e => {
                      this.setState({ message: e.target.value })
                    }}
                  />

                  <div
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={this.sendMsg}
                  >
                    <span className="mx-2 material-icons">send</span>
                  </div>
                </Card>
              </div>
            )}
          </Card>
        )}

        <Button
          variant="light"
          onClick={() =>
            this.setState((state, props) => {
              return { open: !state.open }
            })
          }
          className={`${classes.FloatingButton} position-fixed d-flex align-items-center justify-content-center mr-n5 mr-sm-0 mb-n3 mb-sm-0`}
        >
          {this.state.open ? (
            <span className={classes.Close}>&#x2715;</span>
          ) : (
            <img src={ActionButtonImg} alt="" className={classes.Icon} />
          )}
        </Button>
      </React.Fragment>
    )
  }
}

export default Chat
