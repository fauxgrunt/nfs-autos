// schemaTypes/car.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'car',
  title: 'Inventory (Cars)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Car Title (e.g. 2008 Toyota Mark X)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available (Show in Inventory)', value: 'available' },
          { title: 'Sold (Move to Recently Sold)', value: 'sold' },
          { title: 'Coming Soon', value: 'coming_soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'mileage',
      title: 'Mileage (km)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'engine',
      title: 'Engine (e.g., "2.5L")',
      type: 'string',
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'mainImage',
      title: 'Main Feature Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          { title: 'Automatic (6-Speed)', value: 'Automatic (6-Speed)' },
          { title: 'Automatic (8-Speed)', value: 'Automatic (8-Speed)' },
          { title: 'Automatic (CVT)', value: 'Automatic (CVT)' },
          { title: 'Automatic (Standard)', value: 'Automatic (Standard)' },
          { title: 'Manual (5-Speed)', value: 'Manual (5-Speed)' },
          { title: 'Manual (6-Speed)', value: 'Manual (6-Speed)' },
        ],
      },
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'fuelType',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: [
          { title: 'Petrol', value: 'Petrol' },
          { title: 'Diesel', value: 'Diesel' },
          { title: 'Hybrid', value: 'Hybrid' },
        ],
      },
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'bodyType',
      title: 'Body Type',
      type: 'string',
      options: {
        list: [
          { title: 'Sedan', value: 'Sedan' },
          { title: 'SUV', value: 'SUV' },
          { title: 'Coupe', value: 'Coupe' },
          { title: 'Hatchback', value: 'Hatchback' },
          { title: 'Wagon', value: 'Wagon' },
          { title: 'Van', value: 'Van' },
        ],
      },
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'exteriorColor',
      title: 'Exterior Color',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'White' },
          { title: 'Black', value: 'Black' },
          { title: 'Silver', value: 'Silver' },
          { title: 'Gray', value: 'Gray' },
          { title: 'Blue', value: 'Blue' },
          { title: 'Red', value: 'Red' },
          { title: 'Green', value: 'Green' },
          { title: 'Brown', value: 'Brown' },
          { title: 'Beige', value: 'Beige' },
          { title: 'Yellow', value: 'Yellow' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location (e.g., "Japan Auction", "Dhaka Ready Stock")',
      type: 'string',
      hidden: ({ document }) => document?.status === 'sold',
    },
    {
      name: 'grade',
      title: 'Auction Grade (e.g. 4.0, 3.5)',
      type: 'string',
      hidden: ({ document }) => document?.status === 'sold',
    },
  ],
})