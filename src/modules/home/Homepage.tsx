import Container from "@components/Container";
import Hero from "@modules/home/sections/Hero";
import Trusted from "@modules/home/sections/Trusted";

function Homepage() {
  return (
    <Container>
      <Hero />
      <Trusted />
    </Container>
  )
}

export default Homepage;