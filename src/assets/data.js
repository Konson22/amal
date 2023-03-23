import { FaHandsHelping, FaHandPeace, FaHandHoldingHeart } from "react-icons/fa"


export const aboutUsData = [
    {
        title:'Who are we?',
        text:`We are a group of students from the University of Juba in South Sudan's GDSC club, and we are passionate about using technology to solve issues in our local communities.`
    },
    {
        title:'Our focus',
        text:`We focus on helping those who have been forcibly uprooted from their homes due to wars, including the most vulnerable individuals and families (conflicts). We accomplish this by developing the Amal platform, which provides a user-friendly application or web interface and links refugees and internally displaced persons with the outside world so they can get assistance Also, we think that by doing this, more contributors will be inspired to assist the neediest individuals and families as quickly as they can.`
    },
    {
        title:'Our Mission',
        text:`We intend to use technology to link refugees and internally displaced persons to donors who could supply them with food, shelter, medical care, and other essential items.`
    },
    {
        title:'Our Vission',
        text:`To see people impacted by conflict live regular lives, with access to basic necessities and opportunities to thrive..`
    },
]


export const getInvolveData = [
    {
        title:'Donate or fundraise',
        text:`Because of your generous donations and incredible fundraising efforts, Amal is able to help refugees who shouldn't have to deal with problems alone. Learn about the various ways you may help us, from making a one-time donation to leaving a gift in your Will. Anything helps!`,
        btn:'Donate',
        path:'/donate',
        icon:<FaHandsHelping />
    },
    {
        title:'Become a campaigner',
        text:`Speak up on the important issues affecting refugees every day. We won't let up until every refugee receives assistance, therefore`,
        btn:'Donate',
        path:'/donate',
        icon:<FaHandPeace />
    },
    {
        title:'Volunteering',
        text:`Amal's core mission is volunteerism. We depend on the enthusiasm, kindness, and dedication of people who are willing to volunteer their time and skills in order to assist refugees all over the world!`,
        btn:'Join us',
        path:'/join-us',
        icon:<FaHandHoldingHeart />
    },
]