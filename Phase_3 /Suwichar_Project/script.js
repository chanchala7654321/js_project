
let body = document.body;
let colorQuote = document.getElementById("colorQuote");
let show = document.getElementById("show");
let fpara = document.getElementById("fpara");

let quoteArray = [
    "Believe in yourself 💪 and all that you are 🌟.",
    "Push yourself 🚀 because no one else will do it for you 💥.",
    "Don’t watch the clock ⏰; do what it does — keep going 🔥.",
    "Every day 🌞 is a new beginning 🌈.",
    "Your only limit 🚫 is your mind 🧠.",
    "Stay positive 🌻, work hard 💼, and make it happen 💫.",
    "You are stronger 💪 than you think 🦋.",
    "Success 🏆 doesn’t come to you; you go to it 🚶‍♂️.",
    "Start where you are 📍. Use what you have 🛠️. Do what you can 💪.",
    "Be a reason 😊 someone smiles today 🌞.",
    "Change 🌀 is the only constant in life 🌿.",
    "Small steps 👣 every day lead to big results 🌄.",
    "Dreams 💭 don’t work unless you do 🔨.",
    "Be the energy ⚡ you want to attract 💖.",
    "Focus 🎯 on progress 📈, not perfection 💎.",
    "The best way 🌍 to predict your future 🔮 is to create it 🛠️.",
    "Stay focused 🧘‍♂️ and never give up 🙌.",
    "Difficult roads 🛤️ often lead to beautiful destinations 🏞️.",
    "Go with the flow 🌊 but don’t forget your goal 🎯.",
    "Be patient 🕰️ — good things take time 🌹.",
    "Make today 🌅 so awesome that yesterday 😎 gets jealous 😂.",
    "Create your own sunshine ☀️ and spread positivity 🌈.",
    "Let go 🕊️ of what you can’t control 🌪️.",
    "Every mistake 📖 is a lesson 🎓.",
    "Rise up 🌄 and attack the day 💥 with enthusiasm 😄.",
    "Do something today 🗓️ that your future self 👤 will thank you for 🙏.",
    "Kindness 💖 is free, sprinkle it everywhere ✨.",
    "Dream big 🌙, work hard 💪, stay humble 🌿.",
    "You are capable 💫 of amazing things 🌻.",
    "Don’t limit your challenges 🚫; challenge your limits ⚡."
];





colorQuote.addEventListener("click", function () {

    fpara.style.display = "none";

    let randQuote = Math.floor(Math.random() * quoteArray.length);

    let para = document.createElement("p");
    para.innerText = quoteArray[randQuote];

    show.innerHTML = "";

    show.appendChild(para);
    colorQuote.innerText = "Next Quote";



    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;


});

