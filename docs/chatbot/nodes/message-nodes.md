---
sidebar_position: 1
---

# Messages

Learn how to use message nodes to send different types of content to your users.

## Overview

Message nodes are the primary way your chatbot communicates with users. Libromi Connect provides 10 different message node types to send various content formats and create engaging conversations.

## Text Node

### Purpose

Send plain text messages to users with support for formatting and variables.

### Features

- **Rich Text Support**: Bold, italic, and formatted text
- **Emoji Integration**: Add emojis to make messages more engaging
- **Variable Insertion**: Include dynamic content using variables
- **Multi-line Support**: Send longer messages with line breaks

### Configuration

- **Message Content**: Enter your text message
- **Variables**: Use `{variable_name}` to insert dynamic content
- **Formatting**: Apply text formatting options
- **Character Limit**: Up to 4096 characters per message

### Best Practices

- Keep messages concise and clear
- Use emojis sparingly for emphasis
- Include user's name for personalization
- Break long messages into multiple nodes

### Example

```
👋 Hi {user_name}!

Welcome to our customer support. I'm here to help you with:
• Product information
• Order status
• Technical support

How can I assist you today?
```

## Image Node

### Purpose

Send images, photos, and visual content to users.

### Features

- **Image Formats**: JPG, PNG, GIF, WebP support
- **Caption Support**: Add descriptive text to images
- **File Upload**: Upload images from your device
- **URL Support**: Link to external image files

### Configuration

- **Image Upload**: Select image file from device
- **Image URL**: Link to hosted image
- **Caption Text**: Optional descriptive text
- **Alt Text**: Accessibility description

### Use Cases

- Product photos and catalogs
- Visual instructions and guides
- Promotional images
- Infographics and charts
- Brand visuals

### Best Practices

- Optimize image sizes for faster loading
- Use descriptive captions
- Ensure images are relevant to conversation
- Test images on different devices

## Video Node

### Purpose

Send video content and multimedia messages to users.

### Features

- **Video Formats**: MP4, AVI, MOV support
- **Thumbnail Preview**: Show video preview
- **Caption Support**: Add video descriptions
- **File Size Management**: Optimize for delivery

### Configuration

- **Video Upload**: Select video file from device
- **Video URL**: Link to hosted video
- **Thumbnail**: Custom video thumbnail
- **Caption**: Video description text

### Use Cases

- Product demonstrations
- Tutorial videos
- Promotional content
- How-to guides
- Brand storytelling

## YouTube Node

### Purpose

Embed YouTube videos directly in conversations.

### Features

- **YouTube Integration**: Direct YouTube video embedding
- **Video Preview**: Show YouTube thumbnail
- **Auto-play Options**: Control video playback
- **Link Sharing**: Share YouTube links

### Configuration

- **YouTube URL**: Video link from YouTube
- **Preview Settings**: Thumbnail and title display
- **Playback Options**: Auto-play preferences
- **Description**: Custom video description

### Use Cases

- Educational content sharing
- Product demo videos
- Company presentations
- Training materials
- Entertainment content

## File Node

### Purpose

Send documents and files to users.

### Features

- **Document Formats**: PDF, DOC, DOCX, XLS, XLSX, TXT
- **File Preview**: Show file information
- **Download Options**: Allow file downloads
- **File Descriptions**: Add file context

### Configuration

- **File Upload**: Select document from device
- **File URL**: Link to hosted document
- **File Name**: Custom file naming
- **Description**: File purpose and content

### Use Cases

- Brochures and catalogs
- Forms and applications
- Instruction manuals
- Price lists
- Legal documents

## Audio Node

### Purpose

Send audio messages and sound files to users.

### Features

- **Audio Formats**: MP3, WAV, AAC support
- **Playback Controls**: Play, pause, seek controls
- **Duration Display**: Show audio length
- **Quality Options**: Audio quality settings

### Configuration

- **Audio Upload**: Select audio file from device
- **Audio URL**: Link to hosted audio
- **Title**: Audio file title
- **Description**: Audio content description

### Use Cases

- Voice messages
- Music and sound effects
- Podcast episodes
- Audio instructions
- Language pronunciation guides

## Location Node

### Purpose

Share location information and maps with users.

### Features

- **GPS Coordinates**: Precise location sharing
- **Map Integration**: Interactive map display
- **Address Display**: Show formatted address
- **Navigation Links**: Direct to map applications

### Configuration

- **Location Coordinates**: Latitude and longitude
- **Address**: Formatted address text
- **Location Name**: Custom location title
- **Map Provider**: Choose map service

### Use Cases

- Business location sharing
- Meeting point coordination
- Delivery addresses
- Event locations
- Store finder results

## Contact Node

### Purpose

Share contact information and business cards.

### Features

- **Contact Cards**: Formatted contact information
- **Multiple Fields**: Name, phone, email, address
- **Save to Contacts**: Allow users to save contact
- **Business Information**: Company details

### Configuration

- **Contact Name**: Person or business name
- **Phone Number**: Contact phone number
- **Email Address**: Contact email
- **Address**: Physical address
- **Organization**: Company or organization name

### Use Cases

- Business card sharing
- Customer service contacts
- Sales representative information
- Support team details
- Emergency contacts

## Link Node

### Purpose

Share website links and external resources.

### Features

- **URL Sharing**: Direct website links
- **Link Preview**: Show website preview
- **Custom Titles**: Override link titles
- **Open Options**: Control how links open

### Configuration

- **Website URL**: Target website address
- **Link Title**: Custom link display name
- **Description**: Link description text
- **Preview Settings**: Show/hide link preview

### Use Cases

- Website redirections
- Resource sharing
- External tool access
- Social media links
- Documentation links

## Request Node

### Purpose

Request specific information or actions from users.

### Features

- **Information Requests**: Ask for specific data
- **Action Prompts**: Request user actions
- **Follow-up Logic**: Handle user responses
- **Validation Options**: Verify requested information

### Configuration

- **Request Type**: Type of information or action needed
- **Prompt Message**: Clear request instructions
- **Validation Rules**: Requirements for responses
- **Follow-up Actions**: Next steps after request

### Use Cases

- Information collection
- Document requests
- Action confirmations
- Feedback requests
- Survey responses

## Message Node Best Practices

### Content Guidelines

- **Clear Communication**: Use simple, understandable language
- **Appropriate Length**: Keep messages concise but informative
- **Visual Appeal**: Use media to enhance understanding
- **Accessibility**: Ensure content is accessible to all users

### Technical Considerations

- **File Sizes**: Optimize media files for faster delivery
- **Format Compatibility**: Use widely supported file formats
- **Loading Times**: Consider user's internet connection speed
- **Mobile Optimization**: Ensure content works on mobile devices

### User Experience

- **Relevance**: Send content that matches user needs
- **Timing**: Send messages at appropriate times
- **Personalization**: Use user data to customize content
- **Engagement**: Create interactive and engaging content

## Advanced Features

### Message Scheduling

- **Delayed Sending**: Schedule messages for later delivery
- **Time Zones**: Consider user's local time
- **Business Hours**: Send during appropriate times
- **Follow-up Sequences**: Chain multiple scheduled messages

### Personalization

- **User Data**: Include personal information in messages
- **Conversation History**: Reference previous interactions
- **Preferences**: Adapt content to user preferences
- **Dynamic Content**: Generate messages based on user actions

### Analytics

- **Delivery Rates**: Track message delivery success
- **Read Receipts**: Monitor message engagement
- **Response Rates**: Measure user interaction
- **Performance Metrics**: Analyze message effectiveness

## Troubleshooting

### Common Issues

- **Media Not Loading**: Check file size and format
- **Buttons Not Working**: Verify flow connections
- **Text Formatting Issues**: Check character encoding
- **Template Rejection**: Review template compliance

### Solutions

- **File Optimization**: Compress large media files
- **Connection Testing**: Verify all node connections
- **Format Validation**: Use supported text formats
- **Policy Review**: Ensure template policy compliance

:::tip
Test all message nodes thoroughly before deploying your chatbot to ensure proper formatting and functionality.
:::

:::warning
Always respect WhatsApp's messaging policies and avoid sending spam or unsolicited promotional content.
:::
