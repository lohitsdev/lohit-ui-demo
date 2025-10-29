import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { 
  Button, Card, Input, Badge, Avatar, Checkbox, Switch, 
  Divider, Spinner, Modal, Alert, Chip, ProgressBar, IconButton, ListItem,
  Tabs, StatsCard, ActionSheet, RadioGroup, Skeleton, SkeletonText, SegmentedControl,
  Accordion, Slider, Rating, SearchBar, Stepper, Timeline, FAB, EmptyState, 
  BottomNavigation, AvatarGroup, Menu
} from 'lohit-ui';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [progress, setProgress] = useState(45);
  const [activeTab, setActiveTab] = useState('home');
  const [radioValue, setRadioValue] = useState('option1');
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [rating, setRating] = useState(3);
  const [searchText, setSearchText] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [bottomTab, setBottomTab] = useState('home');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Lohit UI Components</Text>

        {/* Stats Cards */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Stats Cards</Text>
          <View style={styles.statsRow}>
            <StatsCard 
              label="Total Users"
              value="12.5K"
              icon={<Ionicons name="people" size={20} color="#007AFF" />}
              trend={{ value: '12%', isPositive: true }}
              style={styles.statCard}
            />
            <StatsCard 
              label="Revenue"
              value="$45K"
              icon={<Ionicons name="trending-up" size={20} color="#28A745" />}
              trend={{ value: '5%', isPositive: false }}
              style={styles.statCard}
            />
          </View>
        </Card>

        {/* Tabs */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Tabs</Text>
          <Tabs 
            tabs={[
              { label: 'Home', value: 'home', icon: <Ionicons name="home" size={18} color={activeTab === 'home' ? '#007AFF' : '#666'} /> },
              { label: 'Search', value: 'search', icon: <Ionicons name="search" size={18} color={activeTab === 'search' ? '#007AFF' : '#666'} /> },
              { label: 'Profile', value: 'profile', icon: <Ionicons name="person" size={18} color={activeTab === 'profile' ? '#007AFF' : '#666'} /> },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </Card>

        {/* Segmented Control */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Segmented Control</Text>
          <SegmentedControl 
            segments={['Day', 'Week', 'Month', 'Year']}
            selectedIndex={segmentIndex}
            onIndexChange={setSegmentIndex}
          />
        </Card>

        {/* Buttons */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Buttons</Text>
          <Button 
            title="Primary Button" 
            onPress={() => alert('Primary clicked')} 
            variant="primary"
            style={styles.button}
          />
          <Button 
            title="Secondary Button" 
            onPress={() => alert('Secondary clicked')} 
            variant="secondary"
            style={styles.button}
          />
          <Button 
            title="Outline Button" 
            onPress={() => alert('Outline clicked')} 
            variant="outline"
            style={styles.button}
          />
        </Card>

        {/* Input */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Input Fields</Text>
          <Input
            label="Email"
            placeholder="Enter your email"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry
          />
          <Input
            label="With Error"
            placeholder="This field has error"
            error="This field is required"
          />
        </Card>

        {/* Alert - Updated Design */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Alerts</Text>
          <Alert 
            type="success" 
            title="Success!" 
            message="Your changes have been saved successfully." 
            icon={<Ionicons name="checkmark-circle" size={24} color="#28A745" />}
            style={styles.alert} 
          />
          <Alert 
            type="warning" 
            title="Warning" 
            message="Please review your inputs before proceeding." 
            icon={<Ionicons name="warning" size={24} color="#FFC107" />}
            style={styles.alert} 
          />
          <Alert 
            type="error" 
            title="Error" 
            message="Failed to process request. Please try again." 
            icon={<Ionicons name="close-circle" size={24} color="#DC3545" />}
            style={styles.alert} 
          />
          <Alert 
            type="info" 
            title="Information" 
            message="Your account will be activated within 24 hours." 
            icon={<Ionicons name="information-circle" size={24} color="#17A2B8" />}
            style={styles.alert} 
          />
        </Card>

        {/* Radio Group */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Radio Group</Text>
          <RadioGroup 
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Disabled', value: 'option3', disabled: true },
            ]}
            selectedValue={radioValue}
            onValueChange={setRadioValue}
          />
        </Card>

        {/* Badges */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Badges</Text>
          <View style={styles.badgeContainer}>
            <Badge text="Success" variant="success" style={styles.badge} />
            <Badge text="Warning" variant="warning" style={styles.badge} />
            <Badge text="Error" variant="error" style={styles.badge} />
            <Badge text="Info" variant="info" style={styles.badge} />
          </View>
        </Card>

        {/* Avatars */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Avatars</Text>
          <View style={styles.avatarContainer}>
            <Avatar name="John Doe" size="small" style={styles.avatar} />
            <Avatar name="Jane Smith" size="medium" style={styles.avatar} />
            <Avatar name="Bob Wilson" size="large" style={styles.avatar} />
          </View>
        </Card>

        {/* Checkbox & Switch */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Checkbox & Switch</Text>
          <Checkbox 
            checked={checked} 
            onPress={() => setChecked(!checked)}
            label="Accept terms and conditions"
            style={styles.checkbox}
          />
          <Switch 
            value={switchValue}
            onValueChange={setSwitchValue}
            label="Enable notifications"
            containerStyle={styles.switch}
          />
        </Card>

        {/* Chips */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Chips</Text>
          <View style={styles.chipContainer}>
            <Chip label="React Native" variant="filled" style={styles.chip} />
            <Chip label="Expo" variant="outlined" style={styles.chip} />
            <Chip label="TypeScript" variant="filled" color="#3178C6" style={styles.chip} />
            <Chip 
              label="Deletable" 
              onDelete={() => alert('Deleted')}
              style={styles.chip}
            />
          </View>
        </Card>

        {/* Progress Bar */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Progress Bar</Text>
          <ProgressBar progress={progress} showPercentage style={styles.progressBar} />
          <View style={styles.buttonRow}>
            <Button 
              title="-" 
              onPress={() => setProgress(Math.max(0, progress - 10))}
              size="small"
              style={styles.progressButton}
            />
            <Button 
              title="+" 
              onPress={() => setProgress(Math.min(100, progress + 10))}
              size="small"
              style={styles.progressButton}
            />
          </View>
        </Card>

        {/* Icon Buttons */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Icon Buttons</Text>
          <View style={styles.iconButtonContainer}>
            <IconButton onPress={() => alert('Home')} variant="default">
              <Ionicons name="home" size={24} color="#666" />
            </IconButton>
            <IconButton onPress={() => alert('Favorite')} variant="primary">
              <Ionicons name="heart" size={24} color="#FFF" />
            </IconButton>
            <IconButton onPress={() => alert('Delete')} variant="danger">
              <Ionicons name="trash" size={24} color="#FFF" />
            </IconButton>
          </View>
        </Card>

        {/* List Items */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>List Items</Text>
          <ListItem 
            title="User Profile"
            subtitle="View and edit your profile"
            leftElement={<Ionicons name="person-circle" size={40} color="#007AFF" />}
            rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
          />
          <Divider />
          <ListItem 
            title="Settings"
            subtitle="App preferences and configuration"
            leftElement={<Ionicons name="settings" size={40} color="#666" />}
            rightElement={<Badge text="New" variant="info" />}
          />
          <Divider />
          <ListItem 
            title="Notifications"
            subtitle="Manage your notifications"
            leftElement={<Ionicons name="notifications" size={40} color="#FFC107" />}
            rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
          />
        </Card>

        {/* Skeleton Loaders */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Skeleton Loaders</Text>
          <Skeleton width="100%" height={40} style={styles.skeleton} />
          <Skeleton width="80%" height={20} style={styles.skeleton} />
          <SkeletonText lines={3} />
        </Card>

        {/* Spinner */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Spinner</Text>
          <Spinner text="Loading..." />
        </Card>

        {/* Modal */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Modal</Text>
          <Button 
            title="Open Modal" 
            onPress={() => setModalVisible(true)}
          />
          <Modal 
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            title="Example Modal"
          >
            <View style={styles.modalContent}>
              <Ionicons name="checkmark-circle" size={60} color="#28A745" style={styles.modalIcon} />
              <Text style={styles.modalText}>This is a modal component!</Text>
              <Text style={styles.modalSubtext}>You can put any content here.</Text>
              <Button 
                title="Close" 
                onPress={() => setModalVisible(false)}
                style={{ marginTop: 16 }}
              />
            </View>
          </Modal>
        </Card>

        {/* Action Sheet */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Action Sheet</Text>
          <Button 
            title="Open Action Sheet" 
            onPress={() => setActionSheetVisible(true)}
          />
        </Card>

        <ActionSheet 
          visible={actionSheetVisible}
          onClose={() => setActionSheetVisible(false)}
          title="Choose an action"
          message="Select one of the options below"
          options={[
            { 
              label: 'Share', 
              onPress: () => alert('Share'),
              icon: <Ionicons name="share-social" size={22} color="#007AFF" />
            },
            { 
              label: 'Edit', 
              onPress: () => alert('Edit'),
              icon: <Ionicons name="create" size={22} color="#007AFF" />
            },
            { 
              label: 'Delete', 
              onPress: () => alert('Delete'),
              destructive: true,
              icon: <Ionicons name="trash" size={22} color="#DC3545" />
            },
          ]}
        />

        {/* Accordion */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Accordion</Text>
          <Accordion 
            title="What is Lohit UI?"
            icon={<Ionicons name="information-circle" size={20} color="#007AFF" />}
            style={{ marginBottom: 8 }}
          >
            <Text>Lohit UI is a professional React Native UI component library for Expo applications.</Text>
          </Accordion>
          <Accordion 
            title="How to use?"
            icon={<Ionicons name="help-circle" size={20} color="#007AFF" />}
            defaultExpanded
          >
            <Text>Simply install the package and import the components you need. All components are fully customizable.</Text>
          </Accordion>
        </Card>

        {/* Slider */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Slider</Text>
          <Slider 
            min={0}
            max={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            showValue
          />
        </Card>

        {/* Rating */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Rating</Text>
          <Rating 
            rating={rating}
            onRatingChange={setRating}
            maxRating={5}
            size={36}
          />
          <Text style={{ marginTop: 8, color: '#666' }}>Rating: {rating} / 5</Text>
        </Card>

        {/* SearchBar */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Search Bar</Text>
          <SearchBar 
            placeholder="Search..."
            onSearch={setSearchText}
            leftIcon={<Ionicons name="search" size={20} color="#666" />}
          />
          {searchText.length > 0 && (
            <Text style={{ marginTop: 8, color: '#666' }}>Searching for: {searchText}</Text>
          )}
        </Card>

        {/* Stepper */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Stepper</Text>
          <Stepper 
            steps={['Cart', 'Shipping', 'Payment', 'Done']}
            currentStep={currentStep}
          />
          <View style={[styles.buttonRow, { marginTop: 16 }]}>
            <Button 
              title="Previous"
              onPress={() => setCurrentStep(Math.max(0, currentStep - 1))}
              size="small"
              disabled={currentStep === 0}
            />
            <Button 
              title="Next"
              onPress={() => setCurrentStep(Math.min(3, currentStep + 1))}
              size="small"
              disabled={currentStep === 3}
            />
          </View>
        </Card>

        {/* Timeline */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Timeline</Text>
          <Timeline 
            items={[
              {
                title: 'Order Placed',
                description: 'Your order has been confirmed',
                time: '2 hours ago',
                icon: <Ionicons name="checkmark-circle" size={12} color="#FFF" />
              },
              {
                title: 'Processing',
                description: 'Order is being prepared',
                time: '1 hour ago',
                icon: <Ionicons name="time" size={12} color="#FFF" />
              },
              {
                title: 'Shipped',
                description: 'Package has been dispatched',
                time: '30 mins ago',
                icon: <Ionicons name="airplane" size={12} color="#FFF" />
              },
            ]}
          />
        </Card>

        {/* Avatar Group */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Avatar Group</Text>
          <AvatarGroup max={3}>
            {[
              <Avatar key="1" name="John Doe" size="medium" />,
              <Avatar key="2" name="Jane Smith" size="medium" />,
              <Avatar key="3" name="Bob Wilson" size="medium" />,
              <Avatar key="4" name="Alice Brown" size="medium" />,
              <Avatar key="5" name="Mike Davis" size="medium" />,
            ]}
          </AvatarGroup>
        </Card>

        {/* Menu */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Menu</Text>
          <Button 
            title={menuVisible ? "Hide Menu" : "Show Menu"}
            onPress={() => setMenuVisible(!menuVisible)}
          />
          {menuVisible && (
            <View style={{ marginTop: 12 }}>
              <Menu 
                visible={menuVisible}
                items={[
                  {
                    label: 'Profile',
                    onPress: () => { alert('Profile'); setMenuVisible(false); },
                    icon: <Ionicons name="person" size={20} color="#666" />
                  },
                  {
                    label: 'Settings',
                    onPress: () => { alert('Settings'); setMenuVisible(false); },
                    icon: <Ionicons name="settings" size={20} color="#666" />
                  },
                  {
                    label: 'Logout',
                    onPress: () => { alert('Logout'); setMenuVisible(false); },
                    destructive: true,
                    icon: <Ionicons name="log-out" size={20} color="#DC3545" />
                  },
                ]}
              />
            </View>
          )}
        </Card>

        {/* Empty State */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Empty State</Text>
          <EmptyState 
            title="No Data Available"
            description="There are no items to display at the moment"
            icon={<Ionicons name="folder-open-outline" size={80} color="#999" />}
            action={
              <Button 
                title="Refresh"
                onPress={() => alert('Refreshing...')}
                size="small"
              />
            }
          />
        </Card>

        {/* Bottom Navigation Preview */}
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Bottom Navigation</Text>
          <Text style={{ color: '#666', marginBottom: 12 }}>This would typically be at the bottom of your screen</Text>
          <BottomNavigation 
            tabs={[
              {
                key: 'home',
                label: 'Home',
                icon: <Ionicons name="home-outline" size={24} color="#666" />,
                activeIcon: <Ionicons name="home" size={24} color="#007AFF" />,
              },
              {
                key: 'search',
                label: 'Search',
                icon: <Ionicons name="search-outline" size={24} color="#666" />,
                activeIcon: <Ionicons name="search" size={24} color="#007AFF" />,
              },
              {
                key: 'notifications',
                label: 'Notifications',
                icon: <Ionicons name="notifications-outline" size={24} color="#666" />,
                activeIcon: <Ionicons name="notifications" size={24} color="#007AFF" />,
                badge: 5,
              },
              {
                key: 'profile',
                label: 'Profile',
                icon: <Ionicons name="person-outline" size={24} color="#666" />,
                activeIcon: <Ionicons name="person" size={24} color="#007AFF" />,
              },
            ]}
            activeTab={bottomTab}
            onTabPress={setBottomTab}
          />
        </Card>

        <View style={{ height: 80 }} />
      </ScrollView>

      <FAB 
        onPress={() => alert('FAB Pressed')}
        icon={<Ionicons name="add" size={24} color="#FFF" />}
        position="bottom-right"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
  },
  button: {
    marginBottom: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    marginRight: 8,
    marginBottom: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 12,
  },
  checkbox: {
    marginBottom: 12,
  },
  switch: {
    marginTop: 8,
  },
  alert: {
    marginBottom: 12,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  progressBar: {
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  progressButton: {
    minWidth: 60,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  skeleton: {
    marginBottom: 12,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalIcon: {
    marginBottom: 16,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
