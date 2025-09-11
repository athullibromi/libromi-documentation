---
sidebar_position: 4
---

# Logic

Master the logic nodes that control conversation flow and decision-making in your chatbots.

## Overview

Logic nodes are the decision-making components of your chatbot. Libromi Connect provides 5 essential logic nodes that control conversation flow, evaluate conditions, and manage variables and timing.

## Set Node

### Purpose
Set and manipulate variables to store and manage data throughout conversations.

### Features
- **Variable Assignment**: Set variable values
- **Mathematical Operations**: Add, subtract, multiply, divide
- **String Operations**: Concatenate, substring, replace
- **Type Conversion**: Convert between data types

### Configuration
- **Variable Name**: Target variable to modify
- **Operation Type**: Assignment, calculation, or manipulation
- **Source Values**: Input values for operations
- **Result Storage**: Where to store the result

### Operations
- **Assignment**: Set variable to specific value
- **Arithmetic**: Mathematical calculations
- **String Manipulation**: Text processing
- **List Operations**: Array manipulation
- **Date/Time Operations**: Date calculations

### Use Cases
- Score calculations
- Data formatting
- Counter management
- String processing
- User data storage

### Example Configuration
```
Operation: Assignment
Variable: user_score
Value: 85
Type: Number

Operation: Concatenation
Variables: first_name + " " + last_name
Result: full_name
```

## Condition Node

### Purpose
Branch conversations based on specific conditions and criteria.

### Features
- **Multiple Conditions**: Support for complex logical expressions
- **Variable Comparison**: Compare stored variables
- **Operator Support**: Equals, not equals, greater than, less than, contains
- **Boolean Logic**: AND, OR, NOT operations

### Configuration
- **Condition Rules**: Define the criteria to evaluate
- **Variable Selection**: Choose variables to compare
- **Operators**: Select comparison operators
- **Output Paths**: Define different routes based on results

### Condition Types
- **Text Comparison**: Compare text values
- **Numeric Comparison**: Compare numbers and ranges
- **Boolean Evaluation**: True/false conditions
- **Pattern Matching**: Regular expression matching
- **List Membership**: Check if value exists in a list

### Use Cases
- User role-based routing
- Age-based content filtering
- Location-specific responses
- Purchase history evaluation
- Subscription status checking

### Example Configuration
```
Condition: user_age >= 18
True Path: → Adult Content Node
False Path: → Minor Content Node

Condition: user_location contains "New York"
True Path: → NYC Services Node
False Path: → General Services Node
```

## Chatbot Node

### Purpose
Transfer control to another chatbot or sub-conversation flow.

### Features
- **Chatbot Integration**: Connect to other chatbots
- **Flow Transfer**: Move conversation to different flows
- **Context Passing**: Share variables between chatbots
- **Return Handling**: Manage return from sub-conversations

### Configuration
- **Target Chatbot**: Which chatbot to transfer to
- **Transfer Type**: Temporary or permanent transfer
- **Variable Mapping**: Which data to pass along
- **Return Settings**: How to handle conversation return

### Transfer Types
- **Temporary Transfer**: Execute sub-flow and return
- **Permanent Transfer**: Complete handoff to another bot
- **Conditional Transfer**: Transfer based on conditions
- **Parallel Execution**: Run multiple bots simultaneously

### Use Cases
- Specialized conversation flows
- Department-specific chatbots
- Complex workflow management
- Multi-bot orchestration
- Escalation handling

### Example Configuration
```
Target: Technical_Support_Bot
Transfer Type: Temporary
Pass Variables: [user_id, issue_type, priority]
Return Action: Continue main flow
```

## Delay Node

### Purpose
Add pauses and timing control to conversations.

### Features
- **Flexible Duration**: Seconds, minutes, hours, or days
- **Dynamic Delays**: Calculate delay based on variables
- **Conditional Delays**: Different delays for different conditions
- **Timezone Awareness**: Respect user's local time

### Configuration
- **Delay Duration**: Set pause length
- **Delay Type**: Fixed or variable duration
- **Conditions**: When to apply delay
- **Timezone Settings**: Handle different time zones

### Delay Types
- **Fixed Delay**: Constant pause duration
- **Variable Delay**: Duration based on calculations
- **Random Delay**: Random duration within range
- **Scheduled Delay**: Wait until specific time

### Use Cases
- Simulate typing indicators
- Scheduled follow-up messages
- Rate limiting responses
- Natural conversation pacing
- Time-sensitive content delivery

### Example Configuration
```
Delay Type: Fixed
Duration: 2 seconds
Purpose: Simulate typing before response

Delay Type: Variable
Duration: {response_complexity} * 0.5 seconds
Purpose: Dynamic response timing
```

## Time Node

### Purpose
Handle time-based logic and scheduling operations.

### Features
- **Time Conditions**: Check current time, date, day of week
- **Schedule Management**: Set up timed actions
- **Timezone Handling**: Work with different timezones
- **Business Hours**: Define and check business hours

### Configuration
- **Time Conditions**: Define time-based rules
- **Schedule Settings**: Set up recurring actions
- **Timezone**: User or system timezone
- **Business Rules**: Operating hours and holidays

### Time Operations
- **Current Time Check**: Verify current time/date
- **Business Hours**: Check if within operating hours
- **Date Comparison**: Compare dates and times
- **Recurring Events**: Set up repeating actions
- **Holiday Handling**: Account for holidays and special dates

### Use Cases
- Business hours routing
- Scheduled message delivery
- Time-sensitive offers
- Appointment scheduling
- Reminder systems

### Example Configuration
```
Condition: Current time between 9 AM - 5 PM
True Path: → Business Hours Flow
False Path: → After Hours Flow

Schedule: Every Monday at 9 AM
Action: Send weekly newsletter
Timezone: User's local timezone
```

## Advanced Logic Features

### Variable Management
- **Global Variables**: Accessible throughout the conversation
- **Local Variables**: Limited to specific conversation branches
- **Session Variables**: Persist during user session
- **Persistent Variables**: Stored across multiple sessions

### Conditional Logic
- **Complex Expressions**: Combine multiple conditions with AND/OR
- **Nested Conditions**: Conditions within conditions
- **Dynamic Conditions**: Conditions that change based on context
- **Fallback Logic**: Default paths when conditions fail

### Flow Control
- **Sequential Processing**: Execute nodes in order
- **Parallel Processing**: Run multiple paths simultaneously
- **Loop Prevention**: Avoid infinite loops
- **Error Recovery**: Handle unexpected situations

## Best Practices

### Logic Design
- **Keep It Simple**: Avoid overly complex conditions
- **Test Thoroughly**: Verify all logical paths
- **Document Logic**: Explain complex conditions
- **Use Meaningful Names**: Clear variable and node names

### Performance
- **Optimize Conditions**: Order conditions by likelihood
- **Avoid Deep Nesting**: Keep logic structures flat
- **Cache Results**: Store expensive calculations
- **Monitor Performance**: Track execution times

### Maintainability
- **Modular Design**: Break complex logic into smaller parts
- **Consistent Patterns**: Use similar logic structures
- **Version Control**: Track logic changes
- **Testing Framework**: Automated logic testing

### Error Prevention
- **Validate Inputs**: Check variable values before use
- **Handle Edge Cases**: Plan for unexpected scenarios
- **Provide Fallbacks**: Always have alternative paths
- **Log Decisions**: Track logic execution for debugging

:::tip
Start with simple logic and gradually add complexity. Test each logical path thoroughly to ensure reliable conversation flow.
:::

:::warning
Always provide fallback paths for logic nodes to prevent users from getting stuck when conditions fail or produce unexpected results.
:::