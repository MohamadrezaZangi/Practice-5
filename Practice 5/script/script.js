var data = [
  {
    name: "Merrill Turner",
    phone: "1-281-761-1427",
    region: "Valle del Cauca",
    numberrange: "3",
    country: "South Korea",
  },
  {
    name: "Flynn Wooten",
    phone: "1-417-576-1759",
    region: "Junín",
    numberrange: "6",
    country: "Costa Rica",
  },
  {
    name: "Lara Middleton",
    phone: "1-338-468-3748",
    region: "Yaroslavl Oblast",
    numberrange: "2",
    country: "Ukraine",
  },
  {
    name: "Maxwell Mosley",
    phone: "1-338-810-1737",
    region: "Himachal Pradesh",
    numberrange: "7",
    country: "South Korea",
  },
  {
    name: "Thane Moreno",
    phone: "1-373-223-3065",
    region: "Guainía",
    numberrange: "0",
    country: "Ukraine",
  },
];

const buttomEvent = document.querySelector("#changeBotton");
const inputLetterBox = document.getElementById("inputLetterBox");

let inputLetter = null;

buttomEvent.addEventListener("click", () => {
  inputLetter = inputLetterBox.value;
  chengeIndata(inputLetter);
});

function chengeIndata(changeLetter) {
  let newdata = [...data];
  for (let i = 0; i < newdata.length; i++) {
    let mainphone = newdata[i].phone;
    do {
      mainphone = mainphone.replace("-", inputLetter);
    } while (mainphone.includes("-"));
    newdata[i].phone = mainphone;
  }

  console.log(newdata);
}
