import {
  Card,
  Button,
  Title,
  Description,
  Modal,
  ModalContent,
  ModalInfo,
  CloseIcon,
} from "./style";
import food from "../../assets/images/food3.png";
import close from "../../assets/images/close.png";
import { useState } from "react";

const Food = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card>
        <img src={food} alt="Comida" />
        <Title>Pizza Marguerita</Title>
        <Description>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Description>
        <Button onClick={() => closeModal()}>Mais detalhes</Button>
      </Card>
      <Modal className={showModal ? "isVisible" : ""}>
        <ModalContent>
          <img src={food} alt="" />
          <ModalInfo>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <button>Adicionar ao carrinho - R$ 60,90</button>
          </ModalInfo>
          <CloseIcon
            src={close}
            alt="Icone de fechar"
            onClick={() => closeModal()}
          />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  );
};

export default Food;
