import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
        link:{
         linkOne:"How it work ?",
         linkTwo:"Hosting",
         linkThree:"Faq",
         linkFour:"Help Center",
         linkOther:"Assurance",
         linkFive:"Language",
         linkSix:"Contact us",
        },
         faq:{
          noResults: "No Results",
          searchPlaceholder:"Search for a question",
          searchPlaceholderdeux:"Doha , New york , Dubai , Paris",
          searchPlaceholderTrois:"Audi , BMW , Mercedes , Toyota",
          title:"Help center",
          question1:"Is there a rating system for renters and owners?",
          answer1:"Yes, Limitles has a rating system where both renters and owners can provide feedback and rate their experiences.",
          question2:"Can I cancel a rental reservation if I change my mind?",
          answer2:"Users can cancel a rental reservation, but it is important to do so within the specified cancellation policy to avoid any penalties.",
          question3:"How does  Limitles ensure the safety and security of rented vehicles?",
          answer3:"Limitles verifies renters' identities and conducts driver history checks to help ensure the safety and security of your vehicle.",
          question4:"Are users in control of how much they charge for renting their cars?",
          answer4:"Yes, users have full control over the pricing of their rental cars.",
          question5:"Can users set their own rental prices?",
          answer5:"Yes, users have the freedom to set their own rental prices based on their preferences and the market demand.",
          question6:"Is there a limit on the number of weeks a car can be rented in a month?",
          answer6:"Yes, users can specify the maximum number of weeks they are willing to rent out their cars within a given month.",
          question7:"Are there any registration or listing fees for using  Limitles?",
          answer7:"No, there are no registration or listing fees for using  Limitles. It's free to sign up and list your cars.",
          question8:"What is  Limitles?",
          answer8:"Limitles is a car rental app where people can list their cars for rent and have assurance coverage for their vehicles.",
          question9:"Can I specify certain requirements for renters, such as age or driving experience?",
          answer9:"Yes, you can set specific requirements for renters, including age restrictions and driving experience criteria.",
          question10:"How do I receive payments for renting out my car?",
          answer10:"Payments for car rentals are processed securely through the app, and you will receive your earnings directly to your preferred payment method",
          question11:"How can I join  Limitles as a car owner or renter?",
          answer11:"To join  Limitles as a car owner or renter, simply download the app from your app store and follow the registration process to get started.",
          question12:"Can I provide additional services or amenities with my rented car?",
          answer12:"Yes, you can offer additional services or amenities with your rented car, such as GPS devices, child seats, or premium audio systems.",
          question13:"Are there any penalties for renters who damage or misuse the rented cars?",
          answer13:"Yes, renters are responsible for any damages or misuse of the cars they rent, and penalties may be applied accordingly.",
          question14:"Is  Limitles similar to other car rental companies like Gateround?",
          answer14:"Yes , Limitles operates as a car rental company, offering a platform for users to rent out their vehicles.",
          question15:"Can I list multiple cars on  Limitles?",
          answer15:"Yes, you can list multiple cars for rent on the  Limitles app.",
          question16:"What if I don't have the assurance plan?",
          answer16:"If you don't have the assurance plan, you will be responsible for any damages to your car while it is being rented.",
          question17:"How can I contact customer support if I have any issues or questions?",
          answer17:"You can contact customer support through the app or by emailing us",
          question18:"Can I rent a car through  Limitles if I don't own a vehicle?",
          answer18:"Yes, you can rent cars from other users on  Limitles even if you don't own a vehicle yourself.",
         },
         home:{
          searchbtn:"Find a car",
           middletext:"Get the app",
           brandtext:"Best cars brands for you",
           text1:"Rent a car worldwide",
           text2:"Select your vehicule",
           paragraphNew:"Explore our wide selection of vehicles, easily accessible at your convenience. Discover the ideal car that suits both your requirements and personal style. ",
           paragraph2:"Browse through our inventory and select the vehicle that best suits your needs and preferences. ",
           text3:"Send your documents",
           paragraph3: "Complete the necessary document submission process to ensure compliance and approval for your booking. ",
           text4:"Request in seconds, rent in minutes. ",
           paragraph5: "Confirm your date",
           text5:"Choose your preferred pickup date to begin your rental period securely.",
           paragraph6:"Your Security, Our Priority",
           paragraph7:"Submit your necessary documents and personal information with ease, and you'll gain access to renting a car from fellow individuals. Our cutting-edge AI system takes care of generating rental contracts automatically, guaranteeing a secure and seamless rental experience. ",
           paragraph8:"Dowload your contract",
           testemonialtext:"Is the best app to rent a car , I'm very happy with the service",
           testemonialAuthor:"Renan",
           testemonialPosition:"Car renter",
           testemonialtextDeux:"I love this app , I can rent a car in 5 minutes",
           testemonialAuthorDeux:"Olivier",
           testemonialPositionDeux:"Car renter",

           testemonialtextTrois:"I use this app to rent my car , I'm very happy with the service. Most apps would have charged me a fee for canceling my reservation, but Limitles didn't charge me anything. I will definitely use this app again.",
           testemonialAuthorTrois:"Michael",
           testemonialPositionTrois:"Car renter",
           testemonialBigText:"Testemonial",
           paragraph9:"Once your booking is confirmed, download your rental contract, outlining the terms and conditions for your convenience and reference.",
           title6:"Join our thriving community of car enthusiasts, adventurers, and savvy travelers who have embraced the Qatar experience through our app. It's more than just car rental; it's a lifestyle.",
           paragraph10:"Earn Money While Your Car Rests: Does your car sit idle in your driveway? Transform it into a profitable asset! With our app, you can easily list your car for rent, allowing others to relish the joy of driving while you earn extra income. ",
           paragraph11:"Exclusive Access: Enjoy exclusive access to the finest car rental options in Qatar. Whether it's a sleek sedan for business, an SUV for family adventures, or a convertible for scenic coastal drives, we've got you covered. ",
           paragraph12:"24/7 Availability: Whether you're arriving at the airport in the dead of night or planning an impromptu road trip, our app stands ready to serve you 24/7, ensuring you never miss a moment.  ",
          },
          Hosting:{
            btn:"Let's go",
            btndeux:"Help center",
            hostingtext:"Got questions? Check out the frequently asked questions below.",
            hostingTitles:"FAQ",
            hosttext:"Hosting",
            text1:"Welcome to Limitles: Your Key to Earning and Managing Money with Your Car",
            text2:"Are you looking to make the most of your car while effortlessly managing your finances? Look no further than Limitles, the innovative app that opens the door to a world of possibilities. With Limitles, you can turn your vehicle into a money-making machine and take control of your finances with our integrated wallet feature.",
            text3: "Get Your Key",
            text4: "Start your journey by signing up with limitles. Once you're registered, you can obtain your virtual key. This key is your gateway to the world of car rentals and making money with your own car. ",
            text5:"Upload Your Driver License ",
            text6:"For added security and verification, renters will be required to upload their driver's license. This step ensures that every rental experience is safe and reliable. ",
            text7:"Earn Money with Your Car",
            text8:"With Limitles, your car is more than just a mode of transportation – it's a source of income. You have complete control over your rental terms and pricing. Earn money when you want, and how you want. Plus, our integrated wallet feature makes it simple to keep track of your earnings. ",
            text9:"Why Choose Limitles? ",
            text10:"Safety First",
            text11:"We prioritize safety and security, ensuring that renters and car owners have peace of mind throughout the entire rental process. ",
            text12:"User-Friendly Interface ",
            text13:"Our app is designed with you in mind. It's intuitive, easy to navigate, and ensures a seamless experience for both car owners and renters. ",
            text14:"Earning Potential ",
            text15:"Unlock the full potential of your vehicle and watch as it becomes a steady source of income. ",
            text16:"Financial Control: ",
            text17:"The Limitles wallet feature puts you in charge of your finances, making it easier to manage your earnings.",
          },
          Contact:{
            text1:"Contact us",
            text2:"We are here to help you. You can send a email in carrentallimitles@gmail.com",
            text3:"Send us a message",
            text4:"Name",
            text5:"Email",
            text6:"Subject",
            text7:"Your Message",
            text8:"Send",
            text9:"Your email",

          },
          Footer:{
            textassurance:"Assurance for renters",
            textassurancedeux:"Assurance for Hosters",
            text1:"Privacy Policy",
            text2:"Terms and Conditions",
            text3:"License agreement",
            text4:"IOS",
            text5:"Android",
            text11:"I lost my car ?",
            text6:"Where is the help center?",
            text7:"How to rent my car?",
            text8:"Careers",
            text9:"Contact us",
            text10:"About us",
            text14:"Hosting",
            text16:"Deals and discussions",
            text17:"Share a car",
            text18:"Can I list multiple cars on Limitles?",
            text19:"Limitles for designers and developers",
            text20:"Limitles in Doha",
          }
         }
        }
      },
      arab: {
        translation: {
          home:{
            text1:"استئجار سيارة في جميع أنحاء العالم "
          }
        }
      }
    }
);

export default i18n;