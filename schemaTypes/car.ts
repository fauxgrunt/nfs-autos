import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'car',
  title: 'Inventory (Cars)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Car Title (e.g. 2002 Nissan Silvia S15)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Under Offer (Deposit Taken)', value: 'reserved' },
          { title: 'Sold', value: 'sold' },
          { title: 'Coming Soon (In Transit)', value: 'transit' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'price',
      title: 'Price (AUD)',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Feature Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    // JDM Specific Specs
    defineField({
      name: 'mileage',
      title: 'Mileage (km)',
      type: 'number',
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [ { title: 'Manual', value: 'manual' }, { title: 'Automatic', value: 'auto' } ]
      }
    }),
    defineField({
      name: 'vin',
      title: 'VIN / Chassis Number',
      type: 'string',
    }),
  ],
})