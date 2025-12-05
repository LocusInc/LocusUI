import { Box, Container } from "locus-ui";

const PaddingPage = () => {
  const paddingValues = [0, 1, 2, 3, 4, 5, 6, 8] as const;
  const marginValues = [0, 1, 2, 3, 4, 5, 6, 8, "auto"] as const;
  const negativeMarginValues = [-8, -6, -5, -4, -3, -2, -1] as const;
  const spacingValues = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <Container className="p-4 w-[100vw] h-[100vh] bg-[var(--background-color)]">
      <Box className="border" p="4" m="4">
        This is the spacing page
      </Box>

      <Box className="flex gap-2 py-4 items-center">
        {paddingValues.map((num) => (
          <Box key={num} className="border h-fit" p={`${num}`}>
            {num}
          </Box>
        ))}
      </Box>

      <Box className="flex gap-2 py-4 items-center">
        <Box p="2" className="border">
          p = 2
        </Box>
        <Box pt="2" className="border">
          pt = 2
        </Box>
        <Box pb="2" className="border">
          pb = 2
        </Box>
        <Box pl="2" className="border">
          pl = 2
        </Box>
        <Box pr="2" className="border">
          pr = 2
        </Box>
        <Box px="2" className="border">
          px = 2
        </Box>
        <Box py="2" className="border">
          py = 2
        </Box>
      </Box>

      <Box className="border w-fit" p="17px">
        p = 17px
      </Box>

      <Box py="4" className="flex gap-2 items-center">
        {marginValues.map((num) => (
          <Box key={num} className="border h-fit" m={`${num}`}>
            {num}
          </Box>
        ))}
      </Box>

      <Box py="4" className="flex gap-2 items-center">
        {negativeMarginValues.map((num) => (
          <Box key={num} className="border h-fit" mb={`${num}`}>
            {num}
          </Box>
        ))}
      </Box>

      <Box py="4" className="flex gap-2 items-center">
        <Box m="2" className="border">
          m = 2
        </Box>
        <Box mt="2" className="border">
          mt = 2
        </Box>
        <Box mb="2" className="border">
          mb = 2
        </Box>
        <Box ml="2" className="border">
          ml = 2
        </Box>
        <Box mr="2" className="border">
          mr = 2
        </Box>
        <Box mx="2" className="border">
          mx = 2
        </Box>
        <Box my="2" className="border">
          my = 2
        </Box>
      </Box>

      <Box className="border w-fit" m="17px">
        m = 17px
      </Box>

      <Box py="4" className="flex gap-2 items-center">
        {spacingValues.map((size) => (
          <Box p="4" key={size} className="border" spacing={size}>
            {size}
          </Box>
        ))}
      </Box>

      <Box spacing="xl" className="border" p="1">
        Parent Box
        <Box className="border" p="1">
          Child 1
        </Box>
      </Box>
    </Container>
  );
};

export default PaddingPage;
