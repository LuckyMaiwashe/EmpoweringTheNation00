import 'react-native-reanimated';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image, ScrollView, Linking, TextInput } from 'react-native';
import Map from './Components/Map';
import CourseCalculator from './Components/CourseCalculator';



function HomeScreen({ navigation }) {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/etnlogo.jpg')} style={styles.logo} />
        <Text style={styles.title}>Empowering The Nation</Text>
      </View>
      <Text style={styles.introText}>
        Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained in both 6-month and 6-week programs to empower themselves and gain more marketable skills.
      </Text>
      <View style={styles.linkContainer}>
        <Button title="6-Month Courses" onPress={() => navigation.navigate('6-Month Courses')} />
      </View>
      <View style={styles.linkContainer}>
        <Button title="6-Week Courses" onPress={() => navigation.navigate('6-Week Courses')} />
      </View>
    </ScrollView>
  );
}

function CoursesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.halfPage}>
        <Text style={styles.viewTitle}>6-Month Courses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('First Aid')}>
          <Text style={styles.courseLink}>First Aid</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sewing')}>
          <Text style={styles.courseLink}>Sewing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Landscaping')}>
          <Text style={styles.courseLink}>Landscaping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Life Skills')}>
          <Text style={styles.courseLink}>Life Skills</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.halfPage}>
        <Text style={styles.viewTitle}>6-Week Courses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Child Minding')}>
          <Text style={styles.courseLink}>Child Minding</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cooking')}>
          <Text style={styles.courseLink}>Cooking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Garden Maintenance')}>
          <Text style={styles.courseLink}>Garden Maintenance</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
function CampusesScreen() {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.container}>
      
      <Text style={styles.heading}>Our Campuses</Text>
      <Text style={styles.paragraph}>
        Discover our vibrant campuses, each with its unique charm and community spirit!
      </Text>

      
      <View style={styles.campusSection}>
        <Text style={styles.subHeading}>Polokwane Campus</Text>
        <Text style={styles.paragraph}>
          Situated in the city of stars, Polokwane Campus shines with a warm and welcoming community.
        </Text>
        <Text style={styles.listItem}>• Famous for its vibrant cultural festivals held every semester.</Text>
        <Text style={styles.listItem}>• Home to a botanical garden perfect for study breaks.</Text>
        <Text style={styles.listItem}>• Fun fact: Students claim the campus has the friendliest security staff who double as campus historians!</Text>
      </View>

      
      <View style={styles.campusSection}>
        <Text style={styles.subHeading}>Pretoria Campus</Text>
        <Text style={styles.paragraph}>
          A serene and scenic campus surrounded by lush greenery.
        </Text>
        <Text style={styles.listItem}>• Famous for its coffee shop that serves the best cappuccinos.</Text>
        <Text style={styles.listItem}>• Offers a student-run art gallery open to the public.</Text>
        <Text style={styles.listItem}>• Fun fact: There's a resident cat named "Professor Whiskers" who loves attention!</Text>
      </View>
    </ScrollView>
      
    </View>
  );
}

function AboutUsScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
      
      <Text style={styles.heading}>
        Empowering the Nation, founded by Precious Radebe in 2018,
        provides skills training for domestic workers and gardeners in Johannesburg.
      </Text>
      <Text style={styles.paragraph}>
        Our mission is to enhance employability and support individuals in starting their own businesses.
      </Text>

      
      <View style={styles.section}>
        <Text style={styles.subHeading}>What We Do</Text>
        <Text style={styles.paragraph}>
          We offer comprehensive training programs, including:
        </Text>
        <Text style={styles.listItem}>• Six-Month Training Programmes</Text>
        <Text style={styles.listItem}>• Six-Week Short Skills Training Programmes</Text>
        <Text style={styles.paragraph}>
          Our focus is on practical skills that meet market demands.
        </Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.subHeading}>What We Provide</Text>
        <Text style={styles.paragraph}>We offer:</Text>
        <Text style={styles.listItem}>• Career counseling</Text>
        <Text style={styles.listItem}>• Networking opportunities</Text>
        <Text style={styles.listItem}>• Support in business development</Text>
      </View>
    </View>
    </View>
  );
}

function ContactUsScreen() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    
    Alert.alert("Thank You!", "We can't wait to engage with you!");

    
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
  };
  
  return (
    <><><View style={styles.inputColumn}>
      <Image source={require('./assets/phone.png')} style={styles.icon} />
      <Text style={styles.labelicon}>0715223941</Text>
    </View>
      <View style={styles.inputColumn}>
        <Image source={require('./assets/email.png')} style={styles.icon} />
        <Text style={styles.labelicon}>plk@etnation.co.za</Text>
      </View>
      <View style={styles.inputColumn}>
        <Image source={require('./assets/facebook.png')} style={styles.icon} />
        <Text style={styles.labelicon}>Facebook</Text>
      </View>
      <View style={styles.inputColumn}>
        <Image source={require('./assets/linkedin.png')} style={styles.icon} />
        <Text style={styles.labelicon}>Linkedin</Text>
      </View>
      <View style={styles.inputColumn}>
        <Image source={require('./assets/Instagram.png')} style={styles.icon} />
        <Text style={styles.labelicon}>Instagram</Text>
      </View>
      <Text style={styles.etitle}>Let Us Call you Back</Text>
      <View style={styles.inputRow}>
        <Text style={styles.label1}>First Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your first name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName} />
      </View><View style={styles.inputRow}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your last name"
          onChangeText={(text) => setLastName(text)}
          value={lastName} />
      </View><View style={styles.inputRow}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your cellphone number"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber} />
      </View><View style={styles.inputRow}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email} />
      </View></>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity></>
  )
};

function SixMonthCoursesScreen() {
  return (
    <View style={styles.listContainer}>
        <Text style={styles.listItem}>First Aid</Text>
      
        <Text style={styles.listItem}>Sewing</Text>

        <Text style={styles.listItem}>Landscaping</Text>
      
        <Text style={styles.listItem}>Life Skills</Text>
      
    </View>
  );
}

function SixWeekCoursesScreen() {
  return (
    <View style={styles.listContainer}>
        <Text style={styles.listItem}>Child Minding</Text>
      
        <Text style={styles.listItem}>Cooking</Text>

        <Text style={styles.listItem}>Garden Maintenance</Text>


    </View>
  );
}
function FirstAidScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>First Aid</Text>
        <Text style={styles.subtitle}>
        Fees: R1500
          Purpose: To provide first aid awareness and basic life support Content:
        <Text style={styles.listItem}>•	Wounds and bleeding</Text>
      
        <Text style={styles.listItem}>•	Burns and fractures</Text>

        <Text style={styles.listItem}> •	Emergency scene management</Text>
      
        <Text style={styles.listItem}>•	Cardio-Pulmonary Resuscitation (CPR)</Text>
      
        <Text style={styles.listItem}>•	Respiratory distress e.g., Choking, blocked airway</Text>
        </Text>
    </View>
  );
}

function SewingScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Sewing</Text>
        <Text style={styles.subtitle}>
        Fees: R1500
Purpose: To provide alterations and new garment tailoring services Content:

<Text style={styles.listItem}> •	Types of stitches</Text>
<Text style={styles.listItem}> •	Threading a sewing machine</Text>
<Text style={styles.listItem}> •	Sewing buttons, zips, hems and seams</Text>
<Text style={styles.listItem}> •	Alterations</Text>
<Text style={styles.listItem}> •	Designing and sewing new garments</Text>
        </Text>
    </View>
  );
}

function LandscapingScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Landscaping</Text>
        <Text style={styles.subtitle}>
        Fees: R1500

Purpose: To provide landscaping services for new and established gardens

Content:
<Text style={styles.listItem}> •	Indigenous and exotic plants and trees</Text>
<Text style={styles.listItem}> •	Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
<Text style={styles.listItem}> •	Balancing of plants and trees in a garden</Text>
<Text style={styles.listItem}> •	Garden layout</Text>

        </Text>
    </View>
  );
}

function LifeSkillsScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Life Skills</Text>
      <Text style={styles.subtitle}>
      Fees: R1500

Purpose: To provide skills to navigate basic life necessities

Content:
<Text style={styles.listItem}> •	Opening a bank account</Text>
<Text style={styles.listItem}> •	Basic labour law (know your rights)</Text>
<Text style={styles.listItem}> •	Basic reading and writing literacy</Text>
<Text style={styles.listItem}> •	Basic numeric literacy</Text>
        </Text>
    </View>
  );
}

function ChildMindingScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Child Minding</Text>
      <Text style={styles.subtitle}>
      Fees: R750

Purpose: : To provide basic child and baby care

Content:
<Text style={styles.listItem}> •	Birth to six-month old baby needs</Text>
<Text style={styles.listItem}> •	Seven-month to one year old needs</Text>
<Text style={styles.listItem}> •	Toddler needs</Text>
<Text style={styles.listItem}> •	Educational toys</Text>
        </Text>
    </View>
  );
}

function CookingScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Cooking</Text>
      <Text style={styles.subtitle}>
        Fees: R750

Purpose: To prepare and cook nutritious family meals

Content:

<Text style={styles.listItem}> •	Nutritional requirements for a healthy body</Text>
<Text style={styles.listItem}> •	Types of protein, carbohydrates and vegetables</Text>
<Text style={styles.listItem}> •	Planning meals</Text>
<Text style={styles.listItem}> •	Preparation and cooking of meals</Text>
      </Text>
      

    </View>
  );
}

function GardenMaintenanceScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Garden Maintenance</Text>
      <Text style={styles.subtitle}>
      Fees: R750

Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden.

Content:

<Text style={styles.listItem}> •	Water restrictions and the watering requirements of indigenous and exotic plants</Text>
<Text style={styles.listItem}> •	Pruning and propagation of plants</Text>
<Text style={styles.listItem}> •	Planting techniques for different plant types</Text>

</Text>
    </View>
  );
}




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Courses" component={CoursesScreen} />
        <Drawer.Screen name="Campuses" component={CampusesScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="CourseCalculator" component={CourseCalculator} />
        <Drawer.Screen name="6-Month Courses" component={SixMonthCoursesScreen} />
        <Drawer.Screen name="6-Week Courses" component={SixWeekCoursesScreen} />
        <Drawer.Screen name="First Aid" component={FirstAidScreen} />
        <Drawer.Screen name="Sewing" component={SewingScreen} />
        <Drawer.Screen name="Landscaping" component={LandscapingScreen} />
        <Drawer.Screen name="Life Skills" component={LifeSkillsScreen} />
        <Drawer.Screen name="Child Minding" component={ChildMindingScreen} />
        <Drawer.Screen name="Cooking" component={CookingScreen} />
        <Drawer.Screen name="Garden Maintenance" component={GardenMaintenanceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 65,
    height: 65,
  },
  icon: {
    marginLeft: 30,
    marginTop: 15,
    marginBottom: 10,
    width:39,
    height:39,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#c70808',
    marginLeft: 25,
  },
  etitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#c70808',
    marginLeft: 170,
  },
  listItem: {
    margin: 15,
    padding: 20,
  },
  introText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  linkContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  halfPage: {
    flex: 0.5,
    justifyContent:'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  viewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pageDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
  courseLink: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  map: {
    flex: 1,
  },
  input: {
    flex: 1,
    margin: 3,
  },
  inputColumn: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  label: {
    marginBottom: 5,
    marginLeft: 8,
    justifyContent: 'center',
  },
labelicon: {
  marginLeft: 15,
    justifyContent: 'center',
},
  label1: {
    marginTop: 50,
    justifyContent: 'center',
  },
  input: {
    padding: 8,
    marginTop: 5,
    marginBottom:15,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  section: {
    marginTop: 20,
  },
  campusSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});
