"use client";

import * as React from "react";

export type AnchorSide = "top" | "right" | "bottom" | "left";
export type AnchorAlign = "start" | "center" | "end";

export interface AnchorPosition {
  top: number;
  left: number;
}

export interface UseAnchorPositionOptions {
  /** The anchor element to position relative to */
  anchorRef: React.RefObject<HTMLElement | null>;
  /** The content element being positioned */
  contentRef: React.RefObject<HTMLElement | null>;
  /** Which side of the anchor to position on */
  side?: AnchorSide;
  /** Alignment along the side */
  align?: AnchorAlign;
  /** Offset from the anchor (perpendicular to side) */
  sideOffset?: number;
  /** Offset along the alignment axis */
  alignOffset?: number;
  /** Whether positioning is enabled */
  enabled?: boolean;
}

/**
 * Hook to calculate position for anchored content.
 * Returns the top/left position for the content element.
 */
export function useAnchorPosition({
  anchorRef,
  contentRef,
  side = "bottom",
  align = "center",
  sideOffset = 0,
  alignOffset = 0,
  enabled = true,
}: UseAnchorPositionOptions): AnchorPosition | null {
  const [position, setPosition] = React.useState<AnchorPosition | null>(null);
  // Force update counter to trigger recalculation
  const [, _forceUpdate] = React.useReducer((x) => x + 1, 0);

  const updatePosition = React.useCallback(() => {
    const anchor = anchorRef.current;
    const content = contentRef.current;

    if (!anchor || !content || !enabled) {
      setPosition(null);
      return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    let top = 0;
    let left = 0;

    // Calculate position based on side
    switch (side) {
      case "top":
        top = anchorRect.top - contentRect.height - sideOffset;
        break;
      case "bottom":
        top = anchorRect.bottom + sideOffset;
        break;
      case "left":
        left = anchorRect.left - contentRect.width - sideOffset;
        break;
      case "right":
        left = anchorRect.right + sideOffset;
        break;
    }

    // Calculate alignment
    if (side === "top" || side === "bottom") {
      switch (align) {
        case "start":
          left = anchorRect.left + alignOffset;
          break;
        case "center":
          left =
            anchorRect.left +
            (anchorRect.width - contentRect.width) / 2 +
            alignOffset;
          break;
        case "end":
          left = anchorRect.right - contentRect.width + alignOffset;
          break;
      }
    } else {
      // left or right side
      switch (align) {
        case "start":
          top = anchorRect.top + alignOffset;
          break;
        case "center":
          top =
            anchorRect.top +
            (anchorRect.height - contentRect.height) / 2 +
            alignOffset;
          break;
        case "end":
          top = anchorRect.bottom - contentRect.height + alignOffset;
          break;
      }
    }

    // Add scroll offset for fixed positioning
    top += window.scrollY;
    left += window.scrollX;

    // Clamp to viewport bounds
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Prevent going off-screen
    left = Math.max(0, Math.min(left, viewportWidth - contentRect.width));
    top = Math.max(
      0,
      Math.min(top, viewportHeight - contentRect.height + window.scrollY)
    );

    setPosition({ top, left });
  }, [anchorRef, contentRef, side, align, sideOffset, alignOffset, enabled]);

  // Update position when enabled changes or on mount
  React.useEffect(() => {
    if (!enabled) {
      setPosition(null);
      return;
    }

    // Try multiple times to ensure refs are set
    let attempts = 0;
    const maxAttempts = 10;

    const tryUpdate = () => {
      attempts++;
      if (anchorRef.current && contentRef.current) {
        updatePosition();
      } else if (attempts < maxAttempts) {
        requestAnimationFrame(tryUpdate);
      }
    };

    requestAnimationFrame(tryUpdate);

    // Update on scroll and resize
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [enabled, updatePosition, anchorRef, contentRef]);

  return position;
}
