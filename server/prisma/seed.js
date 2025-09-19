import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const sampleUsers = [
  {
    email: "arjun.sharma@example.com",
    name: "Arjun Sharma",
    bio: "Full-stack developer specializing in MERN stack. Love building scalable web applications and mentoring junior developers.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
    locationUrl: "https://maps.google.com/?q=28.6139,77.209",
    locationLat: 28.6139,
    locationLang: 77.209,
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "priya.gupta@example.com",
    name: "Priya Gupta",
    bio: "UI/UX Designer passionate about creating intuitive digital experiences. 5+ years experience in product design.",
    skills: ["Design", "UI/UX", "Figma", "Photography", "Prototyping"],
    locationUrl: "https://maps.google.com/?q=28.5355,77.391",
    locationLat: 28.5355,
    locationLang: 77.391,
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "rahul.patel@example.com",
    name: "Rahul Patel",
    bio: "Data Scientist with expertise in machine learning and Python. Currently working on AI-powered analytics solutions.",
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "SQL",
      "TensorFlow",
    ],
    locationUrl: "https://maps.google.com/?q=28.4595,77.0266",
    locationLat: 28.4595,
    locationLang: 77.0266,
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sneha.singh@example.com",
    name: "Sneha Singh",
    bio: "Digital marketing strategist and content creator. Helping startups grow their online presence through data-driven campaigns.",
    skills: [
      "Marketing",
      "Content Writing",
      "SEO",
      "Social Media",
      "Analytics",
    ],
    locationUrl: "https://maps.google.com/?q=28.6692,77.4538",
    locationLat: 28.6692,
    locationLang: 77.4538,
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "vikram.mehta@example.com",
    name: "Vikram Mehta",
    bio: "Mobile app developer with 4+ years experience in React Native and Flutter. Love creating smooth user experiences.",
    skills: [
      "React Native",
      "Flutter",
      "JavaScript",
      "Dart",
      "Mobile Development",
    ],
    locationUrl: "https://maps.google.com/?q=28.4089,77.3178",
    locationLat: 28.4089,
    locationLang: 77.3178,
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "kavya.reddy@example.com",
    name: "Kavya Reddy",
    bio: "Product Manager with background in tech and design. Currently leading product development at a fintech startup.",
    skills: [
      "Product Management",
      "Strategy",
      "User Research",
      "Agile",
      "Analytics",
    ],
    locationUrl: "https://maps.google.com/?q=28.6304,77.2177",
    locationLat: 28.6304,
    locationLang: 77.2177,
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const sampleSpaces = [
  {
    name: "WeWork Cyber City",
    description:
      "Premium co-working space in the heart of Gurgaon's business district. Features modern amenities, high-speed internet, and a vibrant community of entrepreneurs and professionals.",
    address: "DLF Cyber City, Phase 2, Sector 24, Gurugram, Haryana 122002",
    lat: 28.4949,
    lang: 77.0787,
    amenities: [
      "WiFi",
      "Coffee",
      "Meeting Rooms",
      "Printer",
      "24/7 Access",
      "Air Conditioning",
      "Reception",
      "Security",
    ],
    hourlyPrice: 40000,
    dailyPrice: 200000,
    monthlyPrice: 3500000,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    ],
    isVerified: true,
  },
  {
    name: "The Hive Connaught Place",
    description:
      "Centrally located co-working hub perfect for freelancers and small teams. Offers flexible seating, creative spaces, and networking opportunities.",
    address: "Connaught Place, Inner Circle, New Delhi, Delhi 110001",
    lat: 28.6315,
    lang: 77.2167,
    amenities: [
      "WiFi",
      "Coffee",
      "Kitchen",
      "Whiteboard",
      "Projector",
      "Parking",
      "Phone Booths",
    ],
    hourlyPrice: 35000,
    dailyPrice: 180000,
    monthlyPrice: 2800000,
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    ],
    isVerified: true,
  },
  {
    name: "Innov8 Noida",
    description:
      "Modern workspace designed for tech startups and digital agencies. Features ergonomic furniture, gaming zone, and regular networking events.",
    address: "Sector 62, Noida, Uttar Pradesh 201309",
    lat: 28.619,
    lang: 77.3686,
    amenities: [
      "WiFi",
      "Coffee",
      "Meeting Rooms",
      "Gaming Zone",
      "Event Space",
      "Lockers",
      "Air Conditioning",
    ],
    hourlyPrice: 30000,
    dailyPrice: 150000,
    monthlyPrice: 2500000,
    images: [
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
    ],
    isVerified: true,
  },
  {
    name: "CoworkIn Rajouri Garden",
    description:
      "Affordable co-working space for students, freelancers, and remote workers. Community-focused environment with flexible plans.",
    address: "Rajouri Garden, New Delhi, Delhi 110027",
    lat: 28.6467,
    lang: 77.1213,
    amenities: [
      "WiFi",
      "Coffee",
      "Study Areas",
      "Kitchen",
      "Bike Parking",
      "Student Discounts",
    ],
    hourlyPrice: 20000,
    dailyPrice: 100000,
    monthlyPrice: 1500000,
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    ],
    isVerified: false,
  },
  {
    name: "Urban Vault Faridabad",
    description:
      "Contemporary co-working facility with focus on creativity and collaboration. Perfect for designers, developers, and digital marketers.",
    address: "Sector 16A, Faridabad, Haryana 121002",
    lat: 28.4089,
    lang: 77.3178,
    amenities: [
      "WiFi",
      "Coffee",
      "Creative Studios",
      "Podcast Room",
      "Printing",
      "Parking",
    ],
    hourlyPrice: 25000,
    dailyPrice: 120000,
    monthlyPrice: 2000000,
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    ],
    isVerified: false,
  },
  {
    name: "MyHQ Indirapuram",
    description:
      "Flexible workspace with day passes and monthly memberships. Great community of entrepreneurs and professionals from various industries.",
    address: "Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    lat: 28.6692,
    lang: 77.4538,
    amenities: [
      "WiFi",
      "Coffee",
      "Meeting Rooms",
      "Event Space",
      "Networking",
      "Reception",
    ],
    hourlyPrice: 28000,
    dailyPrice: 140000,
    monthlyPrice: 2200000,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    ],
    isVerified: true,
  },
];

const sampleWorkBuddyPosts = [
  {
    title: "React Developer for E-commerce Project",
    description:
      "Building a modern e-commerce platform using React, Node.js, and MongoDB. Looking for an experienced React developer to collaborate on the frontend. Great opportunity to work on a real project and learn new techniques!",
    skillsNeeded: ["React", "JavaScript", "TypeScript", "CSS"],
    duration: "full-day",
  },
  {
    title: "UI Designer for Mobile App Design",
    description:
      "Working on a fitness tracking mobile app and need a UI designer to help with the interface design. Looking for someone with experience in mobile UI patterns and modern design trends.",
    skillsNeeded: ["Design", "UI/UX", "Mobile Design", "Figma"],
    duration: "half-day",
  },
  {
    title: "Python Data Scientist for ML Project",
    description:
      "Analyzing customer behavior data for a retail startup. Need a data scientist with Python and ML experience to help with feature engineering and model building. Interesting dataset to work with!",
    skillsNeeded: ["Python", "Data Analysis", "Machine Learning", "SQL"],
    duration: "multiple-days",
  },
  {
    title: "Marketing Partner for Content Strategy",
    description:
      "Launching a new SaaS product and need help with content marketing strategy. Looking for someone with experience in B2B marketing and content creation.",
    skillsNeeded: ["Marketing", "Content Writing", "Strategy", "SEO"],
    duration: "half-day",
  },
  {
    title: "Flutter Developer for Cross-platform App",
    description:
      "Building a productivity app using Flutter. Need another developer to pair program and share best practices. Perfect for skill exchange and learning!",
    skillsNeeded: ["Flutter", "Dart", "Mobile Development"],
    duration: "full-day",
  },
  {
    title: "Product Manager for Feature Planning",
    description:
      "Early-stage fintech startup looking for product management insights. Great opportunity to shape product direction and learn about the fintech space.",
    skillsNeeded: ["Product Management", "Strategy", "User Research"],
    duration: "few-hours",
  },
];

const sampleReviews = [
  {
    rating: 5,
    comment:
      "Amazing space with great community! The WiFi is super fast and the coffee is excellent. Perfect for focused work and networking.",
  },
  {
    rating: 4,
    comment:
      "Good facilities and professional environment. Meeting rooms are well-equipped. Only downside is parking can be challenging during peak hours.",
  },
  {
    rating: 5,
    comment:
      "Love the creative atmosphere here! Met some fantastic people and got great work done. The staff is very helpful and responsive.",
  },
  {
    rating: 3,
    comment:
      "Decent space but can get noisy during busy periods. Good value for money though, especially for freelancers on a budget.",
  },
  {
    rating: 4,
    comment:
      "Modern amenities and clean facilities. The location is convenient with good transport connectivity. Would definitely recommend!",
  },
  {
    rating: 5,
    comment:
      "Excellent co-working space! Great for networking and the community events are really valuable. The workspace is modern and well-designed.",
  },
];

async function main() {
  console.log("Starting database seeding...");

  try {
    console.log("Cleaning existing data...");
    await prisma.review.deleteMany();
    await prisma.message.deleteMany();
    await prisma.checkIn.deleteMany();
    await prisma.workBuddyPost.deleteMany();
    await prisma.space.deleteMany();
    await prisma.user.deleteMany();

    // Create users
    console.log("Creating users...");
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const user = await prisma.user.create({
        data: userData,
      });
      createdUsers.push(user);
      console.log(`Created user: ${user.name}`);
    }

    // Create spaces
    console.log("Creating co-working spaces...");
    const createdSpaces = [];
    for (let i = 0; i < sampleSpaces.length; i++) {
      const spaceData = sampleSpaces[i];
      const space = await prisma.space.create({
        data: {
          ...spaceData,
          ownerId: createdUsers[i % createdUsers.length].id,
        },
      });
      createdSpaces.push(space);
      console.log(`Created space: ${space.name}`);
    }

    // Create work buddy posts
    console.log("Creating work buddy posts...");
    const createdPosts = [];
    for (let i = 0; i < sampleWorkBuddyPosts.length; i++) {
      const postData = sampleWorkBuddyPosts[i];
      const post = await prisma.workBuddyPost.create({
        data: {
          ...postData,
          userId: createdUsers[i % createdUsers.length].id,
          spaceId: createdSpaces[i % createdSpaces.length].id,
        },
      });
      createdPosts.push(post);
      console.log(`Created work buddy post: ${post.title}`);
    }

    // Create reviews
    console.log("Creating reviews...");
    const createdReviews = [];
    for (let i = 0; i < sampleReviews.length; i++) {
      const reviewData = sampleReviews[i];
      const review = await prisma.review.create({
        data: {
          ...reviewData,
          userId: createdUsers[i % createdUsers.length].id,
          spaceId: createdSpaces[i % createdSpaces.length].id,
        },
      });
      createdReviews.push(review);
      console.log(
        `Created review for ${createdSpaces[i % createdSpaces.length].name}`
      );
    }

    // Create some check-ins (people currently at spaces)
    console.log("Creating check-ins...");
    const checkInData = [
      { userIndex: 0, spaceIndex: 0 }, // Arjun at WeWork Cyber City
      { userIndex: 1, spaceIndex: 1 }, // Priya at The Hive
      { userIndex: 2, spaceIndex: 0 }, // Rahul at WeWork Cyber City
      { userIndex: 3, spaceIndex: 2 }, // Sneha at Innov8
    ];

    const createdCheckIns = [];
    for (const checkIn of checkInData) {
      const checkInRecord = await prisma.checkIn.create({
        data: {
          userId: createdUsers[checkIn.userIndex].id,
          spaceId: createdSpaces[checkIn.spaceIndex].id,
          checkInTime: new Date(),
          // checkOutTime can be left null
        },
      });
      createdCheckIns.push(checkInRecord);
      console.log(
        `${createdUsers[checkIn.userIndex].name} checked into ${
          createdSpaces[checkIn.spaceIndex].name
        }`
      );
    }

    // Create sample messages
    console.log("Creating messages...");
    const messageData = [
      {
        senderId: createdUsers[0].id, // Arjun
        receiverId: createdUsers[1].id, // Priya
        content:
          "Hi Priya! I saw your UI design post. I'd love to collaborate on my e-commerce project. Are you available this week?",
        isRead: false,
        createdAt: new Date(),
      },
      {
        senderId: createdUsers[1].id, // Priya
        receiverId: createdUsers[0].id, // Arjun
        content:
          "Hi Arjun! Thanks for reaching out. I'd be interested to learn more about your project. Can we meet at The Hive tomorrow?",
        isRead: false,
        createdAt: new Date(),
      },
      {
        senderId: createdUsers[2].id, // Rahul
        receiverId: createdUsers[3].id, // Sneha
        content:
          "Hey Sneha! I need help with marketing strategy for my ML project. Would you be interested in a quick consultation?",
        isRead: false,
        createdAt: new Date(),
      },
    ];

    for (const msgData of messageData) {
      const message = await prisma.message.create({
        data: msgData,
      });
      console.log(`Created message between users`);
    }

    console.log("Database seeding completed successfully!");
    console.log("\nSummary:");
    console.log(`  Users: ${createdUsers.length}`);
    console.log(`  Spaces: ${createdSpaces.length}`);
    console.log(`  Work Buddy Posts: ${createdPosts.length}`);
    console.log(`  Reviews: ${createdReviews.length}`);
    console.log(`  Check-ins: ${createdCheckIns.length}`);
    console.log(`  Messages: ${messageData.length}`);
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
