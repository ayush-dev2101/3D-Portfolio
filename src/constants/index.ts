  import ideas from "../assets/images/ideas.svg";
  import concepts from "../assets/images/concepts.svg";
  import designs from "../assets/images/designs.svg";
  import codes from "../assets/images/code.svg";

  type Word = {
    text: string;
    imgPath: string;
  }

  const words: Word[] = [
    { text: "Ideas", imgPath: ideas },
    { text: "Concepts", imgPath: concepts },
    {text: "Designs", imgPath: designs},
    {text: "Code", imgPath: codes},
    { text: "Ideas", imgPath: ideas },
    { text: "Concepts", imgPath: concepts },
    {text: "Designs", imgPath: designs},
    {text: "Code", imgPath: codes},
  ];

  export {words};
