---
sidebar_position: 2
---

# Choices

Learn how to create interactive choice nodes for user selection and menu navigation.

## Overview

Choice nodes allow users to select from predefined options, making conversations more interactive and guided. They provide structured navigation and help users quickly find what they're looking for.

## Quick Reply Choices

### Purpose
Present users with up to 3 clickable buttons for quick responses.

### Features
- **Button Limit**: Maximum 3 quick reply buttons
- **Custom Labels**: Define button text (max 20 characters)
- **Action Mapping**: Connect each button to different conversation paths
- **Fallback Handling**: Handle text responses when users don't click buttons

### Configuration
- **Message Text**: Main message above the buttons
- **Button Setup**: Define label and action for each button
- **Flow Connections**: Link buttons to specific nodes
- **Text Fallback**: Handle typed responses

### Use Cases
- Yes/No questions
- Service category selection
- Menu navigation
- Confirmation dialogs
- Simple decision points

### Example
```
Message: "What type of support do you need?"
Buttons:
  [Technical Help] → Technical Support Flow
  [Billing Question] → Billing Flow
  [General Info] → Information Flow
```

### Best Practices
- Use clear, action-oriented button labels
- Keep button text short and descriptive
- Always provide fallback for text responses
- Test button functionality across devices

## List Choices

### Purpose
Display structured lists with multiple items and descriptions.

### Features
- **Item Limit**: Up to 10 list items
- **Rich Content**: Title, description, and image for each item
- **Interactive Elements**: Buttons for each list item
- **Scrollable Interface**: Users can scroll through long lists

### Configuration
- **Header Text**: Introduction message for the list
- **List Items**: Configure title, description, and image
- **Action Buttons**: Add buttons to each list item
- **Footer Text**: Optional closing message

### Use Cases
- Product catalogs
- Service menus
- FAQ sections
- Location listings
- Feature comparisons

### Example
```
Header: "Choose from our available services:"

Items:
1. Web Development
   Description: Custom website creation and maintenance
   Button: [Learn More]

2. Mobile Apps
   Description: iOS and Android app development
   Button: [Get Quote]

3. Digital Marketing
   Description: SEO, social media, and online advertising
   Button: [Start Now]
```

## Button Choices

### Purpose
Send messages with persistent buttons that remain visible.

### Features
- **Button Limit**: Up to 3 buttons per message
- **Persistent Display**: Buttons stay visible after message
- **Custom Actions**: Each button can trigger different flows
- **Rich Formatting**: Combine with text and media

### Configuration
- **Message Content**: Main message text
- **Button Configuration**: Set label and action for each button
- **Button Type**: Choose from reply, URL, or phone call buttons
- **Styling Options**: Customize button appearance

### Button Types
- **Reply Buttons**: Send predefined responses
- **URL Buttons**: Open web links
- **Phone Buttons**: Initiate phone calls

### Use Cases
- Call-to-action messages
- Contact information sharing
- Website redirections
- Phone number dialing
- Social media links

## Carousel Choices

### Purpose
Display multiple cards in a horizontal scrollable format.

### Features
- **Card Limit**: Up to 10 cards per carousel
- **Rich Media**: Images, titles, and descriptions
- **Multiple Buttons**: Up to 3 buttons per card
- **Horizontal Scrolling**: Swipe through options

### Configuration
- **Card Setup**: Define content for each card
- **Image Settings**: Upload or link to images
- **Button Configuration**: Set actions for each card
- **Navigation Options**: Control scrolling behavior

### Use Cases
- Product showcases
- Service portfolios
- Team member introductions
- Event listings
- News articles

### Example
```
Carousel: "Featured Products"

Card 1: Smartphone
  Image: phone.jpg
  Description: Latest model with advanced features
  Buttons: [View Details] [Buy Now]

Card 2: Laptop
  Image: laptop.jpg
  Description: High-performance laptop for professionals
  Buttons: [Specifications] [Purchase]

Card 3: Tablet
  Image: tablet.jpg
  Description: Portable tablet for work and entertainment
  Buttons: [Learn More] [Add to Cart]
```

## Single Choice Selection

### Purpose
Allow users to select one option from multiple choices.

### Features
- **Radio Button Style**: Only one selection allowed
- **Visual Indicators**: Clear selection feedback
- **Validation**: Ensure a choice is made
- **Custom Options**: Define unlimited choices

### Configuration
- **Question Text**: Prompt for selection
- **Option List**: Define available choices
- **Validation Rules**: Require selection
- **Default Selection**: Pre-selected option (optional)

### Use Cases
- Survey questions
- Preference settings
- Category selection
- Rating scales
- Agreement confirmations

### Example
```
Question: "How did you hear about us?"
Options:
  ○ Social Media
  ○ Google Search
  ○ Friend Referral
  ○ Advertisement
  ○ Other
```

## Multiple Choice Selection

### Purpose
Allow users to select multiple options from a list.

### Features
- **Checkbox Style**: Multiple selections allowed
- **Selection Limits**: Set minimum/maximum selections
- **Visual Feedback**: Show selected items
- **Validation**: Ensure proper selection count

### Configuration
- **Question Text**: Instruction for selection
- **Option List**: Available choices
- **Selection Limits**: Min/max selections allowed
- **Validation Messages**: Error messages for invalid selections

### Use Cases
- Interest surveys
- Feature selection
- Service combinations
- Preference collection
- Multi-option forms

### Example
```
Question: "Which services interest you? (Select all that apply)"
Options:
  ☐ Web Design
  ☐ SEO Optimization
  ☐ Social Media Marketing
  ☐ Content Writing
  ☐ Email Marketing
Minimum: 1 selection
Maximum: 3 selections
```

## Conditional Choices

### Purpose
Show different choice options based on previous user responses or data.

### Features
- **Dynamic Options**: Choices change based on conditions
- **Personalization**: Tailored options for each user
- **Context Awareness**: Consider conversation history
- **Rule-based Display**: Show/hide options based on rules

### Configuration
- **Condition Rules**: When to show specific options
- **Variable Dependencies**: Which data affects choices
- **Default Options**: Fallback choices if conditions aren't met
- **Priority Rules**: Order of option evaluation

### Use Cases
- Personalized recommendations
- Role-based menus
- Location-specific options
- Purchase history-based choices
- Subscription tier options

### Example
```
Condition: If user_type = "premium"
  Show: [Premium Support] [VIP Services] [Exclusive Offers]

Condition: If user_type = "basic"
  Show: [Standard Support] [Upgrade Account] [Basic Services]

Default:
  Show: [General Help] [Create Account] [Learn More]
```

## Advanced Choice Features

### Analytics and Tracking
- **Selection Tracking**: Monitor which options are chosen most
- **A/B Testing**: Test different choice presentations
- **Conversion Metrics**: Track choice-to-action conversion
- **User Behavior**: Analyze selection patterns

### Personalization
- **User Preferences**: Remember previous choices
- **Behavioral Targeting**: Suggest relevant options
- **Dynamic Ordering**: Reorder based on popularity
- **Smart Recommendations**: AI-powered suggestions

### Accessibility
- **Screen Reader Support**: Proper labeling for accessibility
- **Keyboard Navigation**: Support for keyboard-only users
- **High Contrast**: Visual accessibility options
- **Voice Commands**: Voice-activated selection

## Best Practices

### Design Guidelines
- **Clear Labels**: Use descriptive, action-oriented text
- **Logical Grouping**: Organize related choices together
- **Visual Hierarchy**: Make important choices prominent
- **Consistent Styling**: Maintain uniform appearance

### User Experience
- **Limit Options**: Avoid overwhelming users with too many choices
- **Progressive Disclosure**: Break complex choices into steps
- **Clear Instructions**: Explain how to make selections
- **Immediate Feedback**: Confirm user selections

### Technical Considerations
- **Mobile Optimization**: Ensure choices work on all devices
- **Loading Performance**: Optimize for fast display
- **Error Handling**: Handle selection failures gracefully
- **Fallback Options**: Provide alternatives when choices fail

### Testing
- **Cross-platform Testing**: Verify functionality on all platforms
- **User Testing**: Get feedback on choice clarity
- **A/B Testing**: Optimize choice presentation
- **Analytics Review**: Monitor choice performance regularly

:::tip
Keep choice options clear and limited to prevent decision paralysis. Users prefer 3-5 well-defined options over many unclear ones.
:::

:::warning
Always provide fallback handling for choice nodes in case users type responses instead of clicking buttons, or if the choice interface fails to load.
:::