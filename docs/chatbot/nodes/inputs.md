---
sidebar_position: 3
---

# Inputs

Learn how to collect and validate user input using various input node types.

## Overview

Input nodes are essential for gathering information from users during conversations. Libromi Connect provides 9 different input node types to collect various types of data with built-in validation and formatting.

## Text Input

### Purpose
Collect text responses from users with optional validation and formatting.

### Features
- **Free Text Input**: Users can type any text response
- **Character Limits**: Set minimum and maximum length
- **Validation Rules**: Apply custom validation patterns
- **Variable Storage**: Save responses for later use

### Configuration
- **Prompt Message**: Question or instruction for the user
- **Validation Rules**: Set text format requirements
- **Error Messages**: Custom messages for invalid input
- **Variable Name**: Where to store the collected text

### Validation Options
- **Length Validation**: Minimum and maximum character count
- **Pattern Matching**: Regular expressions for format validation
- **Forbidden Words**: Block specific words or phrases
- **Case Sensitivity**: Control uppercase/lowercase requirements

### Use Cases
- Name collection
- Address input
- Feedback and comments
- Custom requests and descriptions
- Open-ended survey responses

### Example Configuration
```
Prompt: "Please enter your full name:"
Min Length: 2 characters
Max Length: 50 characters
Variable: user_full_name
Error Message: "Please enter a valid name (2-50 characters)"
```

## Number Input

### Purpose
Collect numeric input with automatic validation and range checking.

### Features
- **Automatic Validation**: Ensures input is numeric
- **Range Limits**: Set minimum and maximum values
- **Decimal Support**: Allow or restrict decimal numbers
- **Format Options**: Control number display format

### Configuration
- **Prompt Message**: Ask for specific numeric input
- **Number Type**: Integer or decimal
- **Range Settings**: Minimum and maximum values
- **Variable Storage**: Save numeric value

### Validation Rules
- **Integer Only**: Restrict to whole numbers
- **Decimal Places**: Control precision for decimal numbers
- **Positive/Negative**: Allow or restrict negative numbers
- **Zero Handling**: Include or exclude zero as valid input

### Use Cases
- Age collection
- Quantity selection
- Rating scores (1-10)
- Price or budget input
- Measurement values

### Example Configuration
```
Prompt: "How many items would you like to order?"
Type: Integer
Min Value: 1
Max Value: 100
Variable: order_quantity
Error: "Please enter a number between 1 and 100"
```

## Email Input

### Purpose
Collect and validate email addresses with built-in format checking.

### Features
- **Automatic Validation**: Checks email format
- **Domain Validation**: Verify domain exists (optional)
- **Duplicate Prevention**: Check against existing emails
- **Format Standardization**: Convert to lowercase

### Configuration
- **Prompt Message**: Request email address
- **Validation Level**: Basic format or advanced checking
- **Error Handling**: Custom error messages
- **Storage Options**: Save to variables or database

### Validation Features
- **Format Checking**: Standard email format validation
- **Domain Verification**: Check if domain exists
- **Disposable Email Detection**: Block temporary email services
- **Whitelist/Blacklist**: Allow or block specific domains

### Use Cases
- Account registration
- Newsletter signup
- Contact information collection
- Lead generation forms
- Support ticket creation

### Example Configuration
```
Prompt: "Please enter your email address:"
Validation: Advanced (with domain check)
Variable: user_email
Error: "Please enter a valid email address"
```

## Website Input

### Purpose
Collect and validate website URLs and links.

### Features
- **URL Validation**: Check proper URL format
- **Protocol Support**: HTTP, HTTPS, FTP
- **Domain Verification**: Verify domain exists
- **Link Testing**: Check if URL is accessible

### Configuration
- **Prompt Message**: Request URL input
- **Protocol Requirements**: Required URL protocols
- **Validation Level**: Basic format or full verification
- **Error Handling**: Invalid URL messages

### Use Cases
- Website portfolio collection
- Social media profile links
- Reference material links
- Company website input
- Resource sharing

### Example Configuration
```
Prompt: "Please enter your website URL:"
Format: https://example.com
Validation: Check domain exists
Variable: user_website
Error: "Please enter a valid website URL"
```

## Date Input

### Purpose
Collect dates with calendar integration and format validation.

### Features
- **Calendar Widget**: Visual date selection
- **Format Options**: Multiple date formats
- **Range Validation**: Set minimum and maximum dates
- **Timezone Support**: Handle different timezones

### Configuration
- **Prompt Message**: Request specific date
- **Date Format**: Choose display format
- **Range Limits**: Set valid date range
- **Default Value**: Pre-selected date

### Validation Options
- **Future Dates Only**: Restrict to upcoming dates
- **Past Dates Only**: Historical dates only
- **Business Days**: Exclude weekends
- **Holiday Exclusion**: Skip specific dates

### Use Cases
- Appointment scheduling
- Event registration
- Delivery date selection
- Birth date collection
- Deadline setting

### Example Configuration
```
Prompt: "When would you like to schedule your appointment?"
Format: MM/DD/YYYY
Min Date: Today + 1 day
Max Date: Today + 30 days
Variable: appointment_date
```

## Time Input

### Purpose
Collect time information with format validation and constraints.

### Features
- **Time Picker**: Visual time selection interface
- **Format Options**: 12-hour or 24-hour format
- **Time Ranges**: Set available time slots
- **Business Hours**: Restrict to business hours only

### Configuration
- **Prompt Message**: Request specific time
- **Time Format**: 12-hour (AM/PM) or 24-hour format
- **Available Hours**: Set time range limits
- **Interval Settings**: Time slot intervals (15min, 30min, etc.)

### Validation Options
- **Business Hours Only**: Restrict to working hours
- **Available Slots**: Show only available time slots
- **Timezone Handling**: Consider user's timezone
- **Minimum/Maximum**: Set earliest and latest times

### Use Cases
- Appointment scheduling
- Meeting time selection
- Service booking
- Event timing
- Reminder scheduling

### Example Configuration
```
Prompt: "What time works best for your appointment?"
Format: 12-hour (AM/PM)
Available: 9:00 AM - 5:00 PM
Intervals: 30 minutes
Variable: appointment_time
```

## Phone Input

### Purpose
Collect phone numbers with international format support and validation.

### Features
- **International Support**: Multiple country formats
- **Format Validation**: Check phone number structure
- **Auto-formatting**: Standardize number format
- **Country Detection**: Identify country from number

### Configuration
- **Prompt Message**: Request phone number
- **Country Settings**: Default country or international
- **Format Options**: Display format preference
- **Validation Rules**: Required format standards

### Format Support
- **International Format**: +1234567890
- **National Format**: (123) 456-7890
- **Local Format**: 123-456-7890
- **Custom Formats**: Define specific patterns

### Use Cases
- Contact information collection
- Appointment booking
- Delivery coordination
- Emergency contact details
- SMS verification setup

### Example Configuration
```
Prompt: "Please enter your phone number:"
Format: International (+country code)
Variable: user_phone
Error: "Please enter a valid phone number with country code"
```

## File Input

### Purpose
Allow users to send files, images, or documents.

### Features
- **Multiple Formats**: Support various file types
- **Size Limits**: Control maximum file size
- **Validation**: Check file type and content
- **Storage Options**: Save files to different locations

### Configuration
- **Prompt Message**: Request file upload
- **Allowed Types**: Specify accepted file formats
- **Size Limits**: Maximum file size
- **Storage Location**: Where to save uploaded files

### Supported Types
- **Images**: JPG, PNG, GIF, WebP
- **Documents**: PDF, DOC, DOCX, TXT
- **Spreadsheets**: XLS, XLSX, CSV
- **Audio**: MP3, WAV, AAC
- **Video**: MP4, AVI, MOV

### Use Cases
- Document submission
- Image sharing
- Resume uploads
- Proof of purchase
- Identity verification

### Security Considerations
- **Virus Scanning**: Check uploaded files
- **File Type Validation**: Verify actual file type
- **Size Restrictions**: Prevent large uploads
- **Content Filtering**: Block inappropriate content

## Location Input

### Purpose
Collect geographical location information from users.

### Features
- **GPS Coordinates**: Precise location data
- **Address Input**: Text-based address entry
- **Map Integration**: Visual location selection
- **Location Validation**: Verify location accuracy

### Configuration
- **Input Method**: GPS, address, or map selection
- **Accuracy Requirements**: Precision level needed
- **Validation Rules**: Geographic boundaries
- **Privacy Settings**: Location data handling

### Input Methods
- **Current Location**: Use device GPS
- **Address Entry**: Type full address
- **Map Selection**: Click on map
- **Landmark Selection**: Choose from predefined locations

### Use Cases
- Delivery address collection
- Service area verification
- Event location sharing
- Store locator
- Emergency services

## Advanced Input Features

### Conditional Validation
- **Dynamic Rules**: Change validation based on previous inputs
- **Context-Aware**: Adapt to conversation context
- **User Profile**: Validate against user information
- **Business Rules**: Apply company-specific validation

### Auto-completion
- **Predictive Text**: Suggest completions as user types
- **Historical Data**: Use previous inputs for suggestions
- **External APIs**: Integrate with address/company databases
- **Custom Lists**: Predefined completion options

### Input Formatting
- **Real-time Formatting**: Format input as user types
- **Standardization**: Convert to consistent formats
- **Masking**: Hide sensitive input (passwords)
- **Currency Formatting**: Automatic currency symbols

## Error Handling

### Validation Errors
- **Clear Messages**: Explain what went wrong
- **Format Examples**: Show correct input format
- **Retry Limits**: Maximum number of attempts
- **Progressive Hints**: More help after multiple failures

### Recovery Options
- **Alternative Input**: Offer different input methods
- **Skip Options**: Allow users to skip optional fields
- **Help Integration**: Connect to human support
- **Fallback Flows**: Alternative conversation paths

## Best Practices

### User Experience
- **Clear Instructions**: Provide specific guidance
- **Format Examples**: Show expected input format
- **Progress Indicators**: Show completion status
- **Error Recovery**: Help users fix mistakes

### Data Quality
- **Validation Rules**: Implement appropriate checks
- **Standardization**: Convert to consistent formats
- **Completeness**: Ensure required fields are filled
- **Accuracy**: Verify important information

### Security
- **Input Sanitization**: Clean user input
- **Data Encryption**: Protect sensitive information
- **Access Control**: Limit who can view collected data
- **Compliance**: Follow data protection regulations

### Performance
- **Efficient Validation**: Quick input checking
- **Caching**: Store validation results
- **Async Processing**: Non-blocking validation
- **Resource Management**: Optimize memory usage

:::tip
Always provide clear instructions and examples for input nodes to improve user experience and data quality.
:::

:::warning
Implement proper validation and security measures for all input nodes, especially when collecting sensitive information like emails, phones, or personal data.
:::