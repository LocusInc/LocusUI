import { Container, Text, useTheme } from "locus-ui";

export default function BoxPage() {
  const { appearance, onAppearanceChange } = useTheme();

  return (
    <Container className="p-4 w-[100vw] h-[100vh] bg-[rgb(var(--background-color-1))]">
      <Text>Theme</Text>

      <Text>Appearance - {appearance}</Text>

      <button
        style={{ padding: "4px 8px", border: "1px solid", margin: "4px" }}
        onClick={() => onAppearanceChange?.("light")}
      >
        <Text>Light</Text>
      </button>

      <button
        style={{ padding: "4px 8px", border: "1px solid", margin: "4px" }}
        onClick={() => onAppearanceChange?.("dark")}
      >
        <Text>Dark</Text>
      </button>
    </Container>
  );
}
