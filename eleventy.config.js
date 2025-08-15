import { VentoPlugin } from 'eleventy-plugin-vento';
export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(VentoPlugin);
  eleventyConfig.addPassthroughCopy("src/wallpapers");
};

export const config = {
  dir: {
    input: "./src",
    output: "./dist"
  }
};