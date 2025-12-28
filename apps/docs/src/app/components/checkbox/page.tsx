"use client";

import { Checkbox, Container, Text } from "locus-ui";
import { PropertyTable } from "../../../components/property-table";

const CheckboxPage = () => {
  const labelPositions = ["top", "bottom", "left", "right"] as const;
  const variants = ["outlined", "solid"] as const;

  return (
    <Container className="p-4 min-h-fit w-[100vw] h-[100vh] bg-[rgb(var(--background-color-1))]">
      <h1 className="text-2xl font-bold mb-4">Checkbox Component</h1>

      <div className="flex flex-col gap-2">
        <Text>Unstyled</Text>

        <Checkbox>
          <Checkbox.Label>Unstyled</Checkbox.Label>
        </Checkbox>

        <Text className="mt-4">Label Positions</Text>

        <div className="flex gap-8">
          {labelPositions.map((position) => (
            <Checkbox key={position} variant="solid">
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
          <Checkbox disabled variant="solid">
            <Checkbox.Label>Disabled</Checkbox.Label>
          </Checkbox>

          <Checkbox defaultChecked variant="solid">
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
          <Checkbox defaultChecked highContrast variant="solid">
            <Checkbox.Label>Solid</Checkbox.Label>
          </Checkbox>

          <Checkbox indeterminate highContrast variant="solid">
            <Checkbox.Indicator />
            <Checkbox.Label>Solid Indeterminate</Checkbox.Label>
          </Checkbox>
        </div>

        <Text mt="4">Styling Properties</Text>

        <div className="flex flex-col gap-2">
          <Text px="4" mt="2" className="font-bold">
            Root
          </Text>

          <PropertyTable
            properties={[
              {
                name: "disabled",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "false",
              },
              {
                name: "checked",
                type: "boolean",
                values: '"true" | "false"',
              },
            ]}
          />

          <Text px="4" mt="2" className="font-bold">
            Indicator
          </Text>

          <PropertyTable
            properties={[
              {
                name: "variant",
                type: "enum",
                values: '"solid" | "outlined"',
              },
              {
                name: "indeterminate",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "-",
              },
              {
                name: "highContrast",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "-",
              },
            ]}
          />

          <Text px="4" mt="2" className="font-bold">
            Label
          </Text>

          <PropertyTable
            properties={[
              {
                name: "position",
                type: "enum",
                values: '"top" | "bottom" | "left" | "right"',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckboxPage;
