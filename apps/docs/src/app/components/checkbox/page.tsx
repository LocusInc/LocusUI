"use client";

import { Checkbox, Container, Text } from "locus-ui";

const CheckboxPage = () => {
  const labelPositions = ["top", "bottom", "left", "right"] as const;
  const variants = ["outlined", "solid"] as const;

  return (
    <Container className="p-4 w-[100vw] h-[100vh] bg-[rgb(var(--background-color-1))]">
      <h1 className="text-2xl font-bold mb-4">Checkbox Component</h1>

      <div className="flex flex-col gap-2">
        <Text>Label Positions</Text>

        <div className="flex gap-8">
          {labelPositions.map((position) => (
            <Checkbox key={position}>
              <Checkbox.Label position={position}>{position}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4">Variants</Text>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Checkbox key={variant} variant={variant}>
              <Checkbox.Label>{variant}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4">States</Text>

        <div className="flex gap-4">
          <Checkbox disabled>
            <Checkbox.Label>Disabled</Checkbox.Label>
          </Checkbox>

          <Checkbox defaultChecked>
            <Checkbox.Label>Default Checked</Checkbox.Label>
          </Checkbox>
        </div>

        <Text mt="4">Indeterminate</Text>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Checkbox key={variant} variant={variant} indeterminate>
              <Checkbox.Label>{variant}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4">High Contrast</Text>

        <div className="flex gap-4">
          <Checkbox highContrast>
            <Checkbox.Label>Solid</Checkbox.Label>
          </Checkbox>

          <Checkbox indeterminate highContrast>
            <Checkbox.Label>Solid Indeterminate</Checkbox.Label>
          </Checkbox>
        </div>
      </div>
    </Container>
  );
};

export default CheckboxPage;
