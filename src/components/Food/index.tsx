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

import close from "../../assets/images/close.png";
import { useState } from "react";
import { CardapioType } from "../../pages/Home";

type Props = {
  food: CardapioType;
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const Food = ({ food }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card>
        <img src={food.foto} alt="Comida" />
        <Title>Pizza Marguerita</Title>
        <Description>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Description>
        <Button onClick={() => closeModal()}>Mais detalhes</Button>
      </Card>
      <Modal className={showModal ? "isVisible" : ""}>
        <ModalContent>
          <img src={food.foto} alt="" />
          <ModalInfo>
            <h4>{food.nome}</h4>
            <p>
              {food.descricao}
              <span>{food.porcao}</span>
            </p>
            <button>{`Adicionar ao carrinho - ${formataPreco(
              food.preco
            )}`}</button>
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
