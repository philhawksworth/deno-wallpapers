import { VentoPlugin } from 'eleventy-plugin-vento';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default async function(eleventyConfig) {

  eleventyConfig.addPlugin(VentoPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["avif"],

		// output image widths
		widths: ["auto"],


	});

  eleventyConfig.addPassthroughCopy("src/wallpapers");
};

export const config = {
  dir: {
    input: "./src",
    output: "./dist"
  }
};