# Deno Wallpapers

A site holding a collection of desktop wallpapers with a flovour of Deno

https://deno-wallpapers.philhawksworth.deno.net/

## About the site

Site built as a simple example of using Eleventy with Deno and hosting on Deno Deploy.

The site includes:

- Prebuild step to populate the site content data based on the wallpaper image assets found. This uses [Deno runtime APIs](https://docs.deno.com/api/deno/~/Deno) to inspect he files.
- [Eleventy](https://www.11ty.dev/) to generate the site
- [Eleventy Image Plugin](https://www.11ty.dev/docs/plugins/image/) to compress and optimise image thubmails for display
- [Vento templates](https://vento.js.org/) for some convenience

## Deploy your own

You can clone this repo and use it to create your own version of this example site on Deno Deploy by clicking the button below. From there you can explore the code and the capabilities of the [Deno Deploy](https://deno.com/deploy) platform for free

[![Deploy on Deno](https://deno.com/button)](https://app.deno.com/new?clone=https://github.com/philhawksworth/deno-wallpapers)
