export default {
    name: 'homepage',//groq query main data get kate hn
    title: 'Home Page',// ye dashboard main nazar ata h
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string', // Represents the main headline
      },
      {
        name: 'paragraph',
        title: 'Paragraph',
        type: 'text', // A larger block of text for descriptions
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string', // Short text for a button
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Image field to upload an image
      },
    ],
  };
  