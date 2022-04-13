import {
  Button,
  Container,
  Inner,
  İcons,
  HeadingSection,
  Links,
} from "../src/styles/İndex.styled";
import { Navbar } from "../src/components/Navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />

      <Inner>
        <HeadingSection>
          <Links>
            <Button></Button>
            <İcons></İcons>
          </Links>
        </HeadingSection>
      </Inner>
    </Container>
  );
}
