const tips = [
  { content: "Use active learning strategies to enhance your study effectiveness!", author: "—Unknown" },
  { content: "Break your study sessions into smaller, manageable chunks.", author: "— John Doe" },
  { content: "Stay organized with a planner to track assignments and deadlines.", author: "— Jane Smith" },
  { content: "Prioritize tasks based on deadlines and importance.", author: "— Mary Johnson" },
  { content: "Practice mindfulness techniques to reduce stress during exams.", author: "— David Brown" }
        ];

//function to display tips
function displayTips() {
  //get a Random tips
  let current_Tip = getRandomItem(Tips);
  //displayTips
  Id('tipAuthor').innerText = `~${current_Tip.Author}`;
  Id('tipContent').innerText = current_Tip.Quoute;
}