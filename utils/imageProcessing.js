import { COLORS } from './cubeUtils';

// RGB values for standard Rubik's cube colors
// These might need calibration based on lighting
const REFERENCE_COLORS = {
  [COLORS.WHITE]: { r: 255, g: 255, b: 255 },
  [COLORS.YELLOW]: { r: 255, g: 255, b: 0 },
  [COLORS.BLUE]: { r: 0, g: 0, b: 255 },
  [COLORS.GREEN]: { r: 0, g: 255, b: 0 },
  [COLORS.RED]: { r: 255, g: 0, b: 0 },
  [COLORS.ORANGE]: { r: 255, g: 165, b: 0 },
};

// Calculate Euclidean distance between two colors
const colorDistance = (c1, c2) => {
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
};

// Find the closest reference color
export const detectColor = (r, g, b) => {
  let minDistance = Infinity;
  let closestColor = COLORS.WHITE;

  const inputColor = { r, g, b };

  for (const [hex, refColor] of Object.entries(REFERENCE_COLORS)) {
    const dist = colorDistance(inputColor, refColor);
    if (dist < minDistance) {
      minDistance = dist;
      closestColor = hex;
    }
  }

  return closestColor;
};

// Helper to get average color of a region
// pixels: Uint8Array of RGBA values
// width: width of the image
// x, y: center coordinates
// radius: radius of the sample area
export const getAverageColor = (pixels, width, x, y, radius = 5) => {
  let r = 0, g = 0, b = 0, count = 0;

  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const px = Math.floor(x + dx);
      const py = Math.floor(y + dy);
      
      // Check bounds (assuming height is enough)
      if (px >= 0 && px < width && py >= 0) {
        const offset = (py * width + px) * 4;
        if (offset + 3 < pixels.length) {
          r += pixels[offset];
          g += pixels[offset + 1];
          b += pixels[offset + 2];
          count++;
        }
      }
    }
  }

  if (count === 0) return { r: 0, g: 0, b: 0 };

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  };
};
