import { Flex, Box as RebassBox } from "rebass";
import styled from "styled-components";

const Box = styled(RebassBox)`
  background-color: #00000020;
  border: solid 1px red;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  height: 100vh;
  background: orange;
  width: 1px;
`;

const Title = styled.h3`
  margin: 0;
`;

export default function App() {
  return (
    <Flex flexDirection="column" px="16px" sx={{ position: "relative" }}>
      <VerticalLine left={16} />
      <VerticalLine left={194} />

      <Title>With negative margins</Title>
      <p>nested</p>
      <Flex mx="-16px">
        <Box width={1 / 2} px="16px">
          <Flex mx="-16px">
            <Box width={1 / 2} px="16px" backgroundColor="cyan">
              Column 1
            </Box>
            <Box width={1 / 2} px="16px" backgroundColor="lime">
              Column 2
            </Box>
          </Flex>
        </Box>
      </Flex>

      <p>flat</p>
      <Flex mx="-16px">
        <Box width={1 / 4} px="16px" backgroundColor="cyan">
          Column 1
        </Box>
        <Box width={1 / 4} px="16px" backgroundColor="lime">
          Column 2
        </Box>
      </Flex>
      <br />
      <Title>Without negative margins</Title>
      <p>nested</p>
      <Flex>
        <Box width={1 / 2} mx="16px">
          <Flex>
            <Box width={1 / 2} backgroundColor="cyan" mx="16px">
              Column 1
            </Box>
            <Box width={1 / 2} backgroundColor="lime" mx="16px">
              Column 2
            </Box>
          </Flex>
        </Box>
      </Flex>

      <p>flat</p>
      <Flex>
        <Box width={1 / 4} minHeight="18px" mx="16px">
          Column 1
        </Box>
        <Box width={1 / 4} minHeight="18px" mx="16px">
          Column 2
        </Box>
      </Flex>
    </Flex>
  );
}
