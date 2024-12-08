interface Event {
    date: string;
    title: string;
    cover: string;
}

const TIMELINE_EVENTS: Array<Event> = [
    {
        date: "1850",
        title: "Inaguration of the College",
        cover: "https://cdn.jsdelivr.net/gh/BirnadinErick/spc-cdn@master/about-st-pst-placeholder.webp"
    },
    {
        date: "2000",
        title: "2000 year",
        cover: "https://cdn.jsdelivr.net/gh/BirnadinErick/spc-cdn@master/forest.webp"
    }, {
        date: "2009",
        title: "something happened",
        cover: "https://cdn.jsdelivr.net/gh/BirnadinErick/spc-cdn@master/hands.webp"
    }, {
        date: "2019",
        title: "another thing happened",
        cover: "https://unsplash.com/photos/NV5_g30gPfE/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Q0R3dXdYSkFiRXd8fHx8fDJ8fDE3MjQ2NTk5NzV8&force=true"
    }, {
        date: "2020",
        title: "Covid-19 happened",
        cover: "https://unsplash.com/photos/w9KEokhajKw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29yb25hfGVufDB8fHx8MTcyNDY2NDI4MXww&force=true"
    }, {
        date: "2025",
        title: "175 Annivesery will happen, i guess",
        cover: "https://unsplash.com/photos/KH8sFmJhKEI/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8Q0R3dXdYSkFiRXd8fHx8fDJ8fDE3MjQ2NTk5NzV8&force=true"
    }];

export default TIMELINE_EVENTS;
