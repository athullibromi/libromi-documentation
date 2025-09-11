---
sidebar_position: 3
---

# 🤖 Building a WhatsApp Chatbot with Libromi Connect

This guide will walk you through creating a powerful and interactive WhatsApp chatbot using the **Libromi Connect** no-code chatbot builder.

---

## 🚀 Getting Started: Initial Setup

Before building your chatbot, complete the following steps:

1. **Sign Up** — Create an account on [Libromi.com](https://libromi.com) and activate a suitable package.
2. **Connect Your Number** — Complete the embedded sign-up form to connect your phone number with Meta.
3. **Access the Chatbot Builder** — Once your account is set up, go to the main dashboard. From the left navigation menu, click the **Chatbot** icon.

---

## 🆕 Creating a New Chatbot

- Inside the chatbot builder, click **➕ Create a Bot**.
- A new **canvas** will open — this is your workspace for building the chatbot flow.

---

## 🖥️ Understanding the Chatbot Builder Interface

The chatbot builder is a **visual drag-and-drop interface**.

### Key Components
- **Start Module** — Every chatbot flow begins here.
- **Modules Panel** — Located on the right, containing various modules you can drag onto the canvas.

---

## 📦 Module Categories

### 1. **Messages**
- **Text** — Simple text messages.
- **Image** — Include an image.
- **Video** — Send a video.
- **File** — Send a PDF or document.
- **Audio** — Send audio files.
- **Location** — Share a location.
- **Contact** — Send a contact card.

### 2. **Choices**
- **Quick Reply** — Up to 3 tappable buttons for quick responses.
- **List** — Up to 10 selectable options.

### 3. **Inputs**
- **Text, Number, Email, Website, Date, Time, Phone, File, Location** — Capture and validate specific data types.

### 4. **Logic**
- **Set** — Modify variables.
- **Condition** — Create conditional paths.
- **Delay** — Add time gaps between messages.

### 5. **Integrations**
- **Connect** — Libromi Connect CRM.
- **REST API** — Send/receive data from external APIs.
- **Google Sheets** — Read/write data.
- **Zapier, Make.com, Pabbly** — Connect to other apps.

---

## 🏡 Tutorial: Building a Real Estate Lead Generation Bot

We’ll build a sample chatbot for **PropertyKit**.

---

### **Step 1 — Welcome Message**
1. Drag a **Quick Reply** module from *Choices*.
2. Connect **Start** → **Quick Reply**.
3. Configure:
   - **Header**: Optional image.
   - **Body**:  
     `Welcome to PropertyKit! Please select an option to get started.`
   - **Buttons**:  
     - Buy  
     - Rent  
     - Sell

---

### **Step 2 — Asking for Budget**
1. For **Buy**, drag a **List** module.
2. Connect **Buy** → **List**.
3. Configure:
   - **Body**: `What's your budget? (in AED)`
   - **Button Text**: `"View Options"`
   - **Options**: Below 500K, 500K–1M, 1M–2M, etc.
   - **Save answer in variable**: `budget`

---

### **Step 3 — Collecting User Details**

#### Native Country
- Drag **Text Message** + **Text Input**.
- Ask: `Your Native Country?`
- Save in variable: `country`.

#### Age
- Drag **Text Message** + **Number Input**.
- Ask: `May I know your age?`
- Save in variable: `age`.

#### Nature of Interest
- Drag **Quick Reply**.
- Ask: `What's the nature of your interest in this property?`
- Buttons: Investment, Own use.
- Save in variable: `nature_of_investment`.

---

### **Step 4 — Final Steps**

#### Move-in Plans
- Drag **Quick Reply**.
- Ask: `When do you expect to move in?`
- Buttons: Immediately, In 3–6 months, Next year.
- Save in variable: `move_in_plan`.

#### Collect Email
- Drag **Text Message** + **Email Input**.
- Ask: `Enter Your Email ID for updates.`
- Save in variable: `email`.

#### Confirmation Message
- (Optional) Add **Delay** (2s).
- Message example:
Thank you for providing the details. Here's what you've told us:



One of our property consultants will contact you shortly.

---

## 🟢 Step 8 — Saving & Testing Your Chatbot

**Save Your Bot:**
- 💾 Click the **Save** button in the top-right corner.

**Test Your Bot:**
- 📲 Send a message to your connected WhatsApp number.
- 🏷️ (Optional) In bot settings, set a **ShortCode keyword** to trigger this chatbot.

---

✅ **Done!** You’ve built a functional **WhatsApp lead generation chatbot**.  
For advanced bots, try **REST API calls** or **third-party integrations** for even more capabilities.