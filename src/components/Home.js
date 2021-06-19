import React from "react";
// import "./Home.css";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://i.ibb.co/dpXKFFW/model-s.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://i.ibb.co/4MQrxX8/model-x.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://i.ibb.co/9pkp3d5/model-y.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://i.ibb.co/J5WhGLq/model-3.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panles in America"
        description="Money-back Guarentee"
        // backgroundImg="https://i.ibb.co/f29kjvy/solar-roof.jpg"
        backgroundImg="https://i.ibb.co/XbYXLdW/solar-panel.jpg"
        leftbtnText="Order Now"
        rightbtnText="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roofs Costs Less Than a New Roofs Plus Solar Panels"
        backgroundImg="https://i.ibb.co/f29kjvy/solar-roof.jpg"
        leftbtnText="Order Now"
        rightbtnText="Learn More"
      />
      <Section
        title="Accessories"
        // description="Solar Roofs Costs Less Than a New Roofs Plus Solar Panels"
        backgroundImg="https://i.ibb.co/12nq4V0/accessories.jpg"
        leftbtnText="Shop Now"
        // rightbtnText="Explore More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;
