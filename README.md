# 🎨 Lohit UI

> Professional, clean, and modern UI component library for React Native & Expo applications

[![npm version](https://img.shields.io/npm/v/lohit-ui.svg)](https://www.npmjs.com/package/lohit-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🎯 **31 Production-Ready Components** - Everything you need to build beautiful apps
- 💎 **Clean Modern Design** - Flat design with 3px border radius, no shadows
- 📱 **Expo Compatible** - Works seamlessly with Expo
- 🎨 **Fully Customizable** - Style props for every component
- 📘 **TypeScript Support** - Full type definitions included
- 🎭 **Icon Ready** - Works great with @expo/vector-icons
- 🚀 **Zero Dependencies** - Only peer dependencies on React & React Native

## 📦 Installation

```bash
npm install lohit-ui
```

or

```bash
yarn add lohit-ui
```

## 🚀 Quick Start

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Input, Alert } from 'lohit-ui';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <Card>
      <Input 
        label="Email" 
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button 
        title="Submit" 
        onPress={() => console.log(email)} 
        variant="primary"
      />
      <Alert 
        type="success" 
        title="Welcome!"
        message="Your account has been created successfully."
        icon={<Ionicons name="checkmark-circle" size={24} color="#28A745" />}
      />
    </Card>
  );
}
```

## 📚 Components

### 🎛️ Form & Input Components (8)

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, and outline button variants with different sizes |
| **Input** | Text input with label, placeholder, and error state support |
| **Checkbox** | Checkbox with label and disabled state |
| **Switch** | Toggle switch with label |
| **Slider** | Range slider with customizable min/max values |
| **Rating** | Star rating component with custom icons |
| **SearchBar** | Search input with icons and clear button |
| **RadioGroup** | Radio button group with horizontal/vertical layout |

### 📐 Layout Components (7)

| Component | Description |
|-----------|-------------|
| **Card** | Container with border for grouping content |
| **Divider** | Horizontal or vertical line separator |
| **Accordion** | Collapsible content with smooth animation |
| **Tabs** | Tab navigation with icon support |
| **SegmentedControl** | iOS-style segmented picker |
| **Stepper** | Multi-step progress indicator |
| **Timeline** | Vertical timeline for events |

### 💬 Display Components (9)

| Component | Description |
|-----------|-------------|
| **Alert** | Colored alerts for success, warning, error, and info |
| **Badge** | Small status badges with color variants |
| **Chip** | Tags with optional delete button |
| **Avatar** | User avatar with initials or image |
| **AvatarGroup** | Stacked avatars with overflow count |
| **ListItem** | List row with left/right elements |
| **StatsCard** | Dashboard metric cards with trends |
| **EmptyState** | Empty placeholder with icon and action button |
| **Skeleton** | Loading placeholder animation |

### 🔔 Feedback Components (4)

| Component | Description |
|-----------|-------------|
| **Spinner** | Loading indicator with text |
| **ProgressBar** | Progress bar with percentage |
| **Modal** | Popup dialog with title and scrollable content |
| **ActionSheet** | Bottom sheet with action options |

### 🧭 Navigation Components (3)

| Component | Description |
|-----------|-------------|
| **BottomNavigation** | Bottom tab bar with badges and icons |
| **FAB** | Floating action button with positioning |
| **IconButton** | Circular icon button with variants |
| **Menu** | Dropdown menu with icons |

## 💡 Usage Examples

### Buttons

```jsx
import { Button } from 'lohit-ui';

// Primary button
<Button title="Submit" onPress={() => {}} variant="primary" />

// Secondary button
<Button title="Cancel" onPress={() => {}} variant="secondary" />

// Outline button
<Button title="Learn More" onPress={() => {}} variant="outline" />

// Different sizes
<Button title="Small" onPress={() => {}} size="small" />
<Button title="Large" onPress={() => {}} size="large" />
```

### Alerts with Icons

```jsx
import { Alert } from 'lohit-ui';
import { Ionicons } from '@expo/vector-icons';

<Alert 
  type="success" 
  title="Success!" 
  message="Your changes have been saved."
  icon={<Ionicons name="checkmark-circle" size={24} color="#28A745" />}
/>

<Alert 
  type="error" 
  title="Error" 
  message="Something went wrong. Please try again."
  icon={<Ionicons name="close-circle" size={24} color="#DC3545" />}
/>
```

### Forms

```jsx
import { Input, Checkbox, Switch, Rating } from 'lohit-ui';

const [email, setEmail] = useState('');
const [agree, setAgree] = useState(false);
const [notifications, setNotifications] = useState(true);
const [rating, setRating] = useState(0);

<Input 
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
/>

<Input 
  label="Password"
  placeholder="Enter password"
  secureTextEntry
  error="Password must be at least 8 characters"
/>

<Checkbox 
  checked={agree}
  onPress={() => setAgree(!agree)}
  label="I agree to terms and conditions"
/>

<Switch 
  value={notifications}
  onValueChange={setNotifications}
  label="Enable notifications"
/>

<Rating 
  rating={rating}
  onRatingChange={setRating}
  maxRating={5}
/>
```

### Navigation

```jsx
import { BottomNavigation, Tabs, FAB } from 'lohit-ui';
import { Ionicons } from '@expo/vector-icons';

// Bottom Navigation
<BottomNavigation 
  tabs={[
    {
      key: 'home',
      label: 'Home',
      icon: <Ionicons name="home" size={24} color="#666" />,
      activeIcon: <Ionicons name="home" size={24} color="#007AFF" />,
      badge: 3
    },
    // ... more tabs
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>

// Floating Action Button
<FAB 
  onPress={() => console.log('Add')}
  icon={<Ionicons name="add" size={24} color="#FFF" />}
  position="bottom-right"
/>
```

### Modal & ActionSheet

```jsx
import { Modal, ActionSheet, Button } from 'lohit-ui';

const [visible, setVisible] = useState(false);

// Modal
<Modal 
  visible={visible}
  onClose={() => setVisible(false)}
  title="Confirmation"
>
  <Text>Are you sure you want to continue?</Text>
  <Button title="Confirm" onPress={() => setVisible(false)} />
</Modal>

// Action Sheet
<ActionSheet 
  visible={sheetVisible}
  onClose={() => setSheetVisible(false)}
  title="Select Action"
  options={[
    { 
      label: 'Share', 
      onPress: () => console.log('Share'),
      icon: <Ionicons name="share-social" size={22} color="#007AFF" />
    },
    { 
      label: 'Delete', 
      onPress: () => console.log('Delete'),
      destructive: true,
      icon: <Ionicons name="trash" size={22} color="#DC3545" />
    },
  ]}
/>
```

### Progress & Loading

```jsx
import { ProgressBar, Spinner, Skeleton, SkeletonText } from 'lohit-ui';

// Progress Bar
<ProgressBar progress={65} showPercentage />

// Spinner
<Spinner text="Loading..." size="large" />

// Skeleton Loaders
<Skeleton width="100%" height={40} />
<SkeletonText lines={3} />
```

### Advanced Components

```jsx
import { Stepper, Timeline, Accordion, StatsCard } from 'lohit-ui';

// Stepper
<Stepper 
  steps={['Cart', 'Shipping', 'Payment', 'Done']}
  currentStep={2}
/>

// Timeline
<Timeline 
  items={[
    {
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      time: '2 hours ago'
    },
    // ... more items
  ]}
/>

// Accordion
<Accordion title="What is Lohit UI?">
  <Text>A professional React Native UI library...</Text>
</Accordion>

// Stats Card
<StatsCard 
  label="Total Users"
  value="12.5K"
  trend={{ value: '12%', isPositive: true }}
  icon={<Ionicons name="people" size={20} color="#007AFF" />}
/>
```

## 🎨 Customization

All components accept custom styles through props:

```jsx
<Button 
  title="Custom Button"
  onPress={() => {}}
  style={{ backgroundColor: '#FF6B6B', borderRadius: 20 }}
  textStyle={{ fontSize: 18, fontWeight: 'bold' }}
/>

<Card style={{ padding: 24, backgroundColor: '#F0F0F0' }}>
  {/* Your content */}
</Card>

<Alert 
  type="info"
  message="Custom alert"
  style={{ borderRadius: 8 }}
  titleStyle={{ fontSize: 18 }}
/>
```

## 📱 Demo App

Check out the demo app in the `lohit-ui-demo` folder to see all components in action.

```bash
cd lohit-ui-demo
npm install
npx expo start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © [Your Name]

## 🙏 Acknowledgments

- Built with React Native and TypeScript
- Designed for Expo applications
- Icons by @expo/vector-icons

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Made with ❤️ by [Your Name]
