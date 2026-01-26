import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        company: fields.text({ label: 'Company Name' }), // We could make this a relation later
        icon: fields.text({ label: 'Brand Icon Path', description: 'e.g. /icons/itau-icon-brand.svg' }), 
        coverImage: fields.text({ label: 'Cover Image', description: 'Path to image in public folder' }),
        heroImage: fields.text({ label: 'Hero Image', description: 'Path to image in public folder' }),
        description: fields.text({ label: 'Subtitle/Description', multiline: true }),
        content: fields.mdx({
            label: 'Case Study Content',
            options: {
                image: {
                    directory: 'public/images/content',
                    publicPath: '/images/content',
                }
            },
            components: {
                // Key Results Block
                KeyResults: {
                    label: 'Key Results (Stats)',
                    schema: {
                        title: fields.text({ label: 'Section Title', defaultValue: 'Key Results' }),
                        stats: fields.array(
                            fields.object({
                                value: fields.text({ label: 'Value (e.g. 54%)' }),
                                label: fields.text({ label: 'Label' }),
                            }),
                            {
                                label: 'Stat Item',
                                itemLabel: props => `${props.fields.value.value} - ${props.fields.label.value}`
                            }
                        )
                    }
                },

                // Grid List Block (Tenets, Foundations)
                GridList: {
                    label: 'Grid List (2 Cols)',
                    schema: {
                        columns: fields.array(
                            fields.object({
                                title: fields.text({ label: 'Column Title' }),
                                items: fields.array(fields.text({ label: 'Item' }), { label: 'List Items' }) 
                            }),
                            {
                                label: 'Column',
                                itemLabel: props => props.fields.title.value
                            }
                        )
                    }
                },

                // Full Width Image with Title
                FullWidthSection: {
                    label: 'Full Width Image',
                    schema: {
                         title: fields.text({ label: 'Section Title' }),
                         image: fields.text({ label: 'Image Path', description: 'Absolute path like /projects/image.jpg' }),
                         alt: fields.text({ label: 'Alt Text' }),
                    }
                },

                // Standard Project Section with Text (Layout wrapper)
                ProjectSection: {
                    label: 'Project Section',
                    schema: {
                        title: fields.text({ label: 'Title' }),
                        content: fields.child({
                            kind: 'block',
                            placeholder: 'Write section content here...',
                            formatting: 'inherit',
                        })
                    }
                },

                // Simple Grid Aligned Image
                GridImage: {
                    label: 'Grid Image (Standard)',
                    schema: {
                        image: fields.text({ label: 'Image Path' }),
                        alt: fields.text({ label: 'Alt Text' }),
                        caption: fields.text({ label: 'Caption' }),
                    }
                },

                // Text-only Section Header
                SectionHeader: {
                    label: 'Section Header (Label+Title)',
                    schema: {
                        label: fields.text({ label: 'Label / Supertitle' }),
                        title: fields.text({ label: 'Main Title' }),
                    }
                },

                // Before/After Slider
                BeforeAfterSlider: {
                    label: 'Before/After Comparison',
                    schema: {
                        beforeImage: fields.text({ label: 'Before Image Path' }),
                        afterImage: fields.text({ label: 'After Image Path' }),
                        beforeAlt: fields.text({ label: 'Before Alt Text' }),
                        afterAlt: fields.text({ label: 'After Alt Text' }),
                    }
                }
            }
        }),
      },
    }),
    companies: collection({
       label: 'Companies',
       slugField: 'name',
       path: 'src/content/companies/*',
       schema: {
         name: fields.slug({ name: { label: 'Name' } }),
         icon: fields.text({ label: 'Icon Path' }),
       }
    })
  },
});
