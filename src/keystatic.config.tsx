import { config, fields, collection } from '@keystatic/core';
import { 
    BarChart3, 
    LayoutGrid, 
    MessageSquare, 
    ImageIcon, 
    Type, 
    ArrowLeftRight,
    StickyNote
} from 'lucide-react';

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
                    kind: 'block',
                    label: 'Key Results (Stats)',
                    icon: <BarChart3 />,
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
                    kind: 'block',
                    label: 'Grid List (2 Cols)',
                    icon: <LayoutGrid />,
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

                // Highlight Block (Image + Title + Label)
                HighlightBlock: {
                    kind: 'block',
                    label: 'Highlight Block',
                    icon: <MessageSquare />,
                    schema: {
                        label: fields.text({ label: 'Label' }),
                        title: fields.text({ label: 'Title' }),
                        image: fields.text({ label: 'Image Path' }),
                        alt: fields.text({ label: 'Alt Text' }),
                        caption: fields.text({ label: 'Caption' }),
                    }
                },

                // Full Width Image with Title
                FullWidthSection: {
                    kind: 'block',
                    label: 'Full Width Image',
                    icon: <ImageIcon />,
                    schema: {
                         title: fields.text({ label: 'Section Title' }),
                         image: fields.text({ label: 'Image Path', description: 'Absolute path like /projects/image.jpg' }),
                         alt: fields.text({ label: 'Alt Text' }),
                    }
                },

                // Standard Project Section with Text (Layout wrapper)
                ProjectSection: {
                    kind: 'block',
                    label: 'Project Section',
                    icon: <StickyNote />,
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
                    kind: 'block',
                    label: 'Grid Image (Standard)',
                    icon: <ImageIcon />,
                    schema: {
                        image: fields.text({ label: 'Image Path' }),
                        alt: fields.text({ label: 'Alt Text' }),
                        caption: fields.text({ label: 'Caption' }),
                    }
                },

                // Text-only Section Header
                SectionHeader: {
                    kind: 'block',
                    label: 'Section Header (Label+Title)',
                    icon: <Type />,
                    schema: {
                        label: fields.text({ label: 'Label / Supertitle' }),
                        title: fields.text({ label: 'Main Title' }),
                    }
                },

                // Before/After Slider
                BeforeAfterSlider: {
                    kind: 'block',
                    label: 'Before/After Comparison',
                    icon: <ArrowLeftRight />,
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
      // ... company collection below
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
