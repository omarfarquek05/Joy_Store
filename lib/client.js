import { createClient } from '@sanity/client';
import  createImageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
  projectId: 'eoxbbz6h',
  dataset: 'production',
  apiVersion: '2023-03-29', // use current API version or specify your own
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN

});

// set up the image URL builder
export const imageUrlBuilder = createImageUrlBuilder({
  projectId: 'eoxbbz6h',
  dataset: 'production',
  apiVersion: '2023-03-29', // use current API version or specify your own
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// create a utility function to generate image URLs
export const urlFor = (source) => imageUrlBuilder.image(source);



// projectId: 'eoxbbz6h',
// dataset: 'production',
// apiVersion: '2023-03-29',
// useCdn: true,
// token: process.env.NEXT_PUBLIC_SANITY_TOKEN