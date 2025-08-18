import { VentoPlugin } from 'eleventy-plugin-vento';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { preBuild } from './pre-build.ts';

export default async function(eleventyConfig) {

  eleventyConfig.addPlugin(VentoPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("src/wallpapers");
  eleventyConfig.addPassthroughCopy("src/og.png");

  eleventyConfig.on("eleventy.before", async () => {
    const result = await preBuild();
    console.log(result);
  });
};

export const config = {
  dir: {
    input: "./src",
    output: "./dist"
  }
};