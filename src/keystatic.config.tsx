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
         company: fields.relationship({
             label: 'Company',
             collection: 'companies',
         }),
         // Icon removed, relation used instead
         coverImage: fields.image({ 
             label: 'Cover Image',
             directory: 'public/projects',
             publicPath: '/projects/',
         }),
         heroImage: fields.image({ 
             label: 'Hero Image',
             directory: 'public/projects',
             publicPath: '/projects/',
         }),
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
                 // ... components
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
                         image: fields.image({
                             label: 'Image',
                             directory: 'public/projects',
                             publicPath: '/projects/',
                         }),
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
                          image: fields.image({
                             label: 'Image',
                             directory: 'public/projects',
                             publicPath: '/projects/',
                         }),
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
                 StandardGridImage: {
                     kind: 'block',
                     label: 'Grid Image (Standard)',
                     icon: <ImageIcon />,
                     schema: {
                         image: fields.image({
                             label: 'Image',
                             directory: 'public/projects',
                             publicPath: '/projects/',
                         }),
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
                         beforeImage: fields.image({
                             label: 'Before Image',
                             directory: 'public/projects',
                             publicPath: '/projects/',
                         }),
                         afterImage: fields.image({
                             label: 'After Image',
                             directory: 'public/projects',
                             publicPath: '/projects/',
                         }),
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
          icon: fields.image({ 
              label: 'Brand Icon',
              directory: 'public/icons',
              publicPath: '/icons/',
          }),
        }
     })
   },
 });
