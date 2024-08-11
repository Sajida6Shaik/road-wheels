import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform any necessary processing here

    // Redirect to payment success page
    navigate("/user/SuccessPage");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <div className="card p-4 payment-card">
            <h2 className="mb-4" style={{ color: "Blue" }}>
              PAYMENT INFORMATION
            </h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Select Mode of Payment</Form.Label>
                <Form.Control as="select">
                  <option>GooglePay</option>
                  <option>PhonePay</option>
                  <option>PayPal</option>
                  <option>AmazonPay</option>
                </Form.Control>
              </Form.Group>
              <div className="d-grid">
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleSubmit}
                >
                  <h3> Proceed to Payment</h3>
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentForm;
