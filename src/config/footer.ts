const MASS: Array<{ date: string; text: string; }> = [
    { "date": "01. Jan", "text": "Our Lady Mother of God" },
    { "date": "17. Mar", "text": "St. Patrick's Day" },
    { "date": "05. Mar", "text": "Ash Wednesday" },
    { "date": "20. Apr", "text": "Easter Celebration" },
    { "date": "08. Dec", "text": "Immaculate Holy Marry" },
    { "date": "25. Dec", "text": "Birth of Lord Jesus Christ" }
];

const QUICK_NAVI: Array<{ text: string; link: string; }> = [
    { "text": "Home", "link": "/" },
    { "text": "Academics", "link": "/academics/achievements" },
    { "text": "Blogs & News", "link": "/blogs" },
    { "text": "Our Spirituality", "link": "/alma-mater/our-spirituality" },
    { "text": "Projects", "link": "/projects" },
    { "text": "Our History", "link": "/alma-mater/history-of-the-college" },
    { "text": "Live Streams", "link": "https://www.youtube.com/@st.patrickscollegejaffna.8326/streams" },
    { "text": "175 Celebrations", "link": "#" },
    { "text": "Gallery", "link": "/gallery" },
    { "text": "Sports", "link": "/co-curriculum/sports" }
];

const CONTACT_INFO = [
    "info@spcjaffna.org", "0212222388", "St. Patrick's College, <br/> St. Patrick's Road, <br /> 40 000 Jaffna"
];

const SOCIAL: Array<{ icon: any; text: string; link: string; }> = [
    { "icon": "", "text": "Facebook", "link": "https://www.facebook.com/StPatricksCollegeJaffna/" },
    { "icon": "", "text": " YouTube", "link": "https://www.youtube.com/@st.patrickscollegejaffna.8326/streams" }
];

const FEEDBACK_TEXT = {
    placeholder: "Let the SPC Media Unit what you think of site and enable them to further enhance the experience.",
    rate: "Rate limited to once per 120 minutes for DDOS and Sloth protection!"
};

export { MASS, QUICK_NAVI, CONTACT_INFO, SOCIAL, FEEDBACK_TEXT };