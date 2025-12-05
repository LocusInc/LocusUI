"use client";

import { Box, Container, Text } from "locus-ui";

export default function BoxPage() {
  const numbers = ["1", "2", "3", "4", "5", "6"] as const;
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <Container className="p-4 w-[100vw] h-[100vh] bg-[var(--background-color)]">
      <Box p="2" m="4" className="border">
        <Text>This box uses the default theme</Text>
      </Box>

      <Text>All Radii/Roundness</Text>

      <Box p="4" className="flex flex-col gap-2">
        {numbers.map((number) => (
          <Box key={number} className="flex gap-2">
            {radii.map((radius) => (
              <Box
                p="2"
                key={radius}
                radius={radius}
                roundness={number}
                className="border"
              >
                <Text>
                  {radius}, {number}
                </Text>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Text>Inheritance</Text>

      <Box radius="none" p="2" className="border">
        <Text>No Radius</Text>

        <Box radius="xl" p="2" className="border">
          <Text>XL Radius</Text>

          <Box p="2" className="border">
            <Text>Default/Theme</Text>
          </Box>
        </Box>

        <Box radius="inherit" p="2" className="border mt-2">
          <Text>Inherit</Text>

          <Box p="2" className="border">
            <Text>Default/Theme</Text>
          </Box>
        </Box>
      </Box>

      <Box radius="9px" p="2" mt="4" className="border">
        <Text>This box has a custom radius (9px)</Text>

        <Box radius="inherit" p="2" mt="2" className="border">
          <Text>Inherit</Text>
        </Box>

        <Box p="2" mt="2" className="border">
          <Text>Default/Theme</Text>
        </Box>
      </Box>

      <Box
        p="2"
        my="4"
        radius={{ initial: "xs", sm: "xl", md: "full" }}
        className="border"
      >
        <Text>
          This box has breakpoint-specific radii (sm on sm, 10px on lg)
        </Text>
      </Box>

      <Text>Individual Corner Radii</Text>

      <Box my="4" p="2" className="flex gap-2">
        <Box p="2" radiusT="xl" radius="none" className="border">
          <Text>This box has xl top radius only</Text>
        </Box>

        <Box p="2" radiusL="xl" radius="none" className="border">
          <Text>This box has xl left radius only</Text>
        </Box>

        <Box p="2" radiusB="xl" radius="none" className="border">
          <Text>This box has xl bottom radius only</Text>
        </Box>

        <Box p="2" radiusR="xl" radius="none" className="border">
          <Text>This box has xl right radius only</Text>
        </Box>
      </Box>

      <Box my="4" p="2" className="flex gap-2">
        <Box p="2" radiusTL="xl" radius="none" className="border">
          <Text>This box has xl top radius only</Text>
        </Box>

        <Box p="2" radiusTR="xl" radius="none" className="border">
          <Text>This box has xl left radius only</Text>
        </Box>

        <Box p="2" radiusBR="xl" radius="none" className="border">
          <Text>This box has xl bottom radius only</Text>
        </Box>

        <Box p="2" radiusBL="xl" radius="none" className="border">
          <Text>This box has xl right radius only</Text>
        </Box>
      </Box>
    </Container>
  );
}
