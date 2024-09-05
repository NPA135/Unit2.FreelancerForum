const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const randomNames = ["Dr. Chaos", "Prof. Zenith", "Dr. Surge", "Prof. Echo", "Dr. Orbit"];
const randomOccupations = ["engineer", "designer", "consultant", "developer", "architect"];
const priceRange = { min: 20, max: 100 };

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomFreelancer() {
  const randomName = randomNames[getRandomInt(0, randomNames.length - 1)];
  const randomOccupation = randomOccupations[getRandomInt(0, randomOccupations.length - 1)];
  const randomPrice = getRandomInt(priceRange.min, priceRange.max);
  freelancers.push({
    name: randomName,
    price: randomPrice,
    occupation: randomOccupation
  });
  render();
}

function render() {
  const tableBody = document.querySelector("#fr-table tbody");
  tableBody.innerHTML = "";
  const rows = freelancers.map((freelancer) => {
    const tr = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;
    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancer.occupation;
    const priceCell = document.createElement("td");
    priceCell.textContent = `$${freelancer.price}`;
    tr.appendChild(nameCell);
    tr.appendChild(occupationCell);
    tr.appendChild(priceCell);
    return tr;
  });

  tableBody.replaceChildren(...rows);
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = (totalPrice / freelancers.length).toFixed(2);
  const priceAverage = document.querySelector("#price-average");
  priceAverage.innerHTML = `Average Price: $${averagePrice}`;
}

render();
setInterval(addRandomFreelancer, 3000);

