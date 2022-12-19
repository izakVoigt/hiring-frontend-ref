import { IDataComponent } from "./types";
import { Container, SvgContainer, Title, Value, PercentageGreen, PercentageRed, Desc } from "./styles";

export const DataComponent = ({ svg, color, title, value, percentage, desc }: IDataComponent) => {
  return (
    <Container role="contentinfo">
      <SvgContainer style={{ background: color }} role="figure">
        {svg}
      </SvgContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Desc>
        {parseInt(percentage) > 0 ? (
          <>
            <PercentageGreen>+{percentage}% </PercentageGreen>
            {desc}
          </>
        ) : (
          <>
            <PercentageRed>{percentage}% </PercentageRed>
            {desc}
          </>
        )}
      </Desc>
    </Container>
  );
};
