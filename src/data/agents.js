// src/data/agents.js

const agents = [
  {
    id: 'agent1',
    name: 'Sarah Khan',
    title: 'Luxury Property Specialist',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Connecting discerning buyers with their dream homes in Islamabad.',
    bio: 'Sarah is a top-performing agent with over 10 years of experience in the Islamabad real estate market. She specializes in luxury residential properties and has a proven track record of exceeding client expectations. Her dedication, deep market knowledge, and exceptional negotiation skills make her the ideal partner for your next high-end property transaction. Sarah is committed to providing a seamless and personalized experience.',
    contact: {
      email: 'sarah.k@realestate.com',
      phone: '+92 (300) 123-4567'
    },
    social: {
      linkedin: 'https://linkedin.com/in/sarahkhanre',
      facebook: 'https://facebook.com/sarahkhanrealestate',
      instagram: 'https://instagram.com/sarahkhan_luxuryhomes'
    },
    areasServed: ['Islamabad (DHA, F-sectors, E-sectors)', 'Rawalpindi (Bahria Town)'],
    // These IDs must match properties defined in properties.js
    listings: ['prop1', 'prop4', 'prop6', 'prop8'],
    reviews: [
      { id: 'rev1', reviewer: 'Aisha Malik', rating: 5, comment: 'Sarah was incredibly professional and found us the perfect luxury apartment. Her attention to detail was exceptional!' },
      { id: 'rev2', reviewer: 'Usman Ali', rating: 5, comment: 'A smooth and hassle-free selling experience. Sarah negotiated a great deal for my villa.' }
    ]
  },
  {
    id: 'agent2',
    name: 'Ahmed Raja',
    title: 'Rental & Commercial Expert',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194d6dd1b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Your trusted partner for commercial and rental real estate solutions in Rawalpindi.',
    bio: 'Ahmed possesses a unique understanding of both the residential rental market and commercial properties in Rawalpindi. With 7 years of experience, he helps clients find optimal solutions for their business needs or secure comfortable rental homes. Ahmed is known for his thoroughness, responsiveness, and ability to close deals efficiently. He values long-term relationships and is dedicated to client satisfaction.',
    contact: {
      email: 'ahmed.r@realestate.com',
      phone: '+92 (333) 987-6543'
    },
    social: {
      linkedin: 'https://linkedin.com/in/ahmedraja',
      facebook: 'https://facebook.com/ahmedrajarealestate'
    },
    areasServed: ['Rawalpindi (Bahria Town, Saddar)', 'Islamabad (I-sectors, G-sectors)'],
    listings: ['prop2', 'prop9'],
    reviews: [
      { id: 'rev3', reviewer: 'Fatima Zafar', rating: 4, comment: 'Ahmed helped me find a great rental flat quickly. Very professional.' },
      { id: 'rev4', reviewer: 'Asad Shah', rating: 5, comment: 'Excellent service for our office space rental. Highly recommended!' }
    ]
  },
  {
    id: 'agent3',
    name: 'Maria Sohail',
    title: 'Lahore Investment Properties',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Expert guidance for profitable real estate investments in Lahore.',
    bio: 'Maria has been instrumental in helping clients make sound investment decisions in the dynamic Lahore real estate market for the past 9 years. Her analytical approach, keen market insights, and strong network allow her to identify lucrative opportunities, whether it\'s residential plots, commercial units, or new development projects. Maria is passionate about helping her clients build wealth through real estate.',
    contact: {
      email: 'maria.s@realestate.com',
      phone: '+92 (345) 543-2109'
    },
    social: {
      linkedin: 'https://linkedin.com/in/mariasohailre',
      instagram: 'https://instagram.com/mariasohail_investments'
    },
    areasServed: ['Lahore (Gulberg, DHA, Bahria Town)', 'Multan'],
    listings: ['prop3', 'prop5', 'prop7'],
    reviews: [
      { id: 'rev5', reviewer: 'Naveed Bhatti', rating: 5, comment: 'Maria gave us fantastic advice on our land purchase. Very knowledgeable.' },
      { id: 'rev6', reviewer: 'Sana Javed', rating: 4, comment: 'Quick and efficient service in finding a rental property. Maria is very responsive.' }
    ]
  }
];

export default agents;