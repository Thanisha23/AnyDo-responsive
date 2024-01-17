import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import { useState } from "react";
import './HomeComponent.css';
const cardsData = [
  { id: 1, cardname: 'StudyTasks' },
  { id: 2, cardname: 'Shopping List' },
  { id: 3, cardname: 'Notedown Ideas' },
];

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {selectedCard !== null && (
        <div className="overlay" onClick={handleClose}></div>
      )}
      <Navbar />
      <Header />
      {/* <div className="container-cards p-14 flex space-x-10 justify-center"> */}
      <div className="container mx-auto flex justify-center items-center">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[4rem]">
        {cardsData.map((card) => (
          <Card
            todoNum={card.id}
            key={card.id}
            cardName={card.cardname}
            classAdd={
              selectedCard === card.id
                ? 'scale-[1.2] z-10 transition-transform duration-300'
                : 'transition-transform duration-300'
            }
            action={() => handleCardClick(card.id)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;



// bg-purple-300































/*
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect, useRef,useState} from "react";
const Home = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

const [select1,setSelect1] = useState(false);
const [select2,setSelect2] = useState(false);
const [select3,setSelect3] = useState(false);
  const handleClickOutside = (e) => {
    if ((cardRef1.current && cardRef2.current && cardRef3.current) && (!cardRef1.current.contains(e.target) && !cardRef2.current.contains(e.target) && !cardRef3.current.contains(e.target))) {
      console.log("Clicked outside");
      setSelect1(false);
      setSelect2(false);
      setSelect3(false);
    }
  };

  const handleCardClick1 = (e) => {
      if(cardRef1.current && cardRef1.current.contains(e.target) && !(select2 && select3)){
        console.log("clicked on card 1");
        setSelect1(!select1);
      }
  }


  
  const handleCardClick2 = (e) => {
    if(cardRef2.current && cardRef2.current.contains(e.target) && !select1 && !select3){
      console.log("clicked on card 2");
      setSelect2(!select2);

    }
}

const handleCardClick3 = (e) => {
  if(cardRef3.current && cardRef3.current.contains(e.target) && !select1 && !select2){
    console.log("clicked on card 3");
    setSelect3(!select3);
    

  }
}


  // if(cardRef1.current && cardRef1.current.con)
  // function selection(){
  //   setSelect(!select);
  //   console.log(select);
  // }

  useEffect(() => {
    const handleCLick = (e) => {
      handleClickOutside(e);
      handleCardClick1(e);
      handleCardClick2(e);
      handleCardClick3(e);
    };
    document.addEventListener("click", handleCLick);

    return () => {
      document.removeEventListener("click", handleCLick);
    };
  }, []);

  return (
    <div>
      <Navbar selection={select1 || select2 || select3}/>
      <Header selection={select1 || select2 || select3}/>
      <div className="container-cards p-14 flex space-x-10 justify-center">
        <Card blur={select2 || select3} selection={select1} ref={cardRef1} cardName="StudyTasks" />
        <Card blur={select1 || select3} selection={select2} ref={cardRef2} cardName="Shopping List" />
        <Card blur={select1 || select2} selection={select3} ref={cardRef3} cardName="Notedown Ideas" />
      </div>
    </div>
  );
};

export default Home;
// bg-purple-300
*/